const asyncHandler = (requestHandler) => async (req, res, next) => {
  try {

   return await requestHandler(req, res, next);

  } catch (error) {

    return res.status(err.code || 500).json({
      success: false,
      message: err.message,

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