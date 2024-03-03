import registerUser from "../controllers/user.controller.js";

import { Router } from "express";
const router = Router();

router.route("/register").post(registerUser);
//http://localhost:8000/api/v1/users/register






export default router;
