// controllers/userController.js
import User from "../models/user.js";
import { apiResponseCode } from "../routes/helper.js";

// Update user profile
const updateProfile = async (req, res) => {
  const { profilePicture, bio } = req.body; // Expecting profilePicture URL and bio from frontend
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id, // Assuming you have middleware that sets req.user from JWT
      { profilePicture, bio },
      { new: true }
    );

    res.status(200).json({
      response: apiResponseCode.SUCCESSFUL,
      responseMessage: "Profile updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      response: apiResponseCode.INTERNAL_SERVER_ERR,
      responseMessage: "Internal server error",
      data: null,
    });
  }
};

export { updateProfile };
