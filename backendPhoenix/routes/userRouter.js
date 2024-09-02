// routes/user.js
import express from "express";
import { updateProfile } from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js"; // Ensure user is authenticated

const userRouter = express.Router();

userRouter.put("/profile", authMiddleware, updateProfile); // Endpoint to update profile

export default userRouter;
