import registerUser from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { Router } from "express";
const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1
    },
    {
      name: "coverImage",
      maxCount: 1
    },
  ]),
  registerUser
);
//http://localhost:8000/api/v1/users/register

export default router;
