import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnClodinary } from "../utils/Cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";



const registerUser = asyncHandler(async (req, res) => {
 

  const { fullname, email, username, password } = req.body;
  console.log(fullname, username, password, email);




  //checking all the fields
  if (
    [fullname, email, username, password].some((field) => {
      field?.trim() === "";
    })
  ) {
    throw new ApiError(400, "All fields are required");
  }



  //if user exits
  const exitedUSer = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (exitedUSer) {
    throw new ApiError(409, "User with email or email Already exists");
  }



  //images handling
  const avatarlocalPath = req.files?.avatar[0]?.path;
  //const coverImagelocalPath = req.files?.coverImage[0]?.path;

  let coverImagelocalPath ;
  if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.lenght > 0){
           coverImagelocalPath = req.files.coverImage[0].path;
  }

  if (!avatarlocalPath) {
    throw new ApiError(404, "Avatar file Required");
  }

  const avatar = await uploadOnClodinary(avatarlocalPath);
  const coverImage = await uploadOnClodinary(coverImagelocalPath);

 

  if (!avatar) {
    throw new ApiError(404, "Avatar file is required");
  }



  //making object and creating entry in database
  const user = await User.create({
    fullname,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    username: username.toLowerCase(),
    password,
    email,
  });


  const createdUSer = await User.findById(user._id).select(" -password -refreshToken");


  //check user is created
  if(!createdUSer){
    throw new ApiError(500,"Someting went wrong while registering a user ");
  }
   ////console.log(req.body);
   //console.log(req.files);
   

    return res.status(201).json(
       new ApiResponse(200,createdUSer,"User registered Successfully")
    )



});






export default registerUser;
