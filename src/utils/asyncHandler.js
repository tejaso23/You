const asyncHandler = (requestHandler) => async (req, res, next) => {
  try {

   return await requestHandler(req, res, next);

  } catch (error) {

    return res.status(error.code || 500).json({
      success: false,
      message: error.message,

    });
  }
};

export { asyncHandler };


// using promise 

/*
const asyncHandeler = (requestHandler) =>{
    (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err));
    }
}

*/