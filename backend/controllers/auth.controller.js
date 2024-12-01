import bcryptjs from "bcryptjs";
import User from "../Models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  // Check for missing fields
  if (!username || !email || !password || username==="" || email==="" || password==="") {
    return next(errorHandler(400, "All fields are required")); // Ensure the function exits after calling next
  }

  // Hash the password asynchronously
  const hashedPassword = await bcryptjs.hash(password, 10);

  // Create a new user
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    // Save the user to the database
    await newUser.save();
    res.status(201).json({ message: "Signup successful!" });
  } catch (error) {
   next(error)
  }
};
