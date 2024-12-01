import bcryptjs from "bcryptjs";
import User from "../Models/user.model.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  // Check for missing fields
  if (!username || !email || !password) {
    return res.status(400).json({
      message: "All fields are required.",
    });
  }

  try {
    // Check if the email or username is already in use
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(409).json({
        message: "Username or email already exists.",
      });
    }

    // Hash the password asynchronously
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "Signup successful!" });
  } catch (error) {
    // Log the error for debugging
    console.error("Error during signup:", error);

    // Provide a generic error message to the client
    res.status(500).json({ message: "Internal server error." });
  }
};
