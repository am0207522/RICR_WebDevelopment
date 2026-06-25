// Import Express framework to create router
import express from "express";

// Import controller functions from auth.controller.js
import {
  LoginUser,
  LogoutUser,
  RegisterUser,
} from "../controllers/auth.controller.js";

// Create a new router instance
// Router is used to define API endpoints separately from main server file
const router = express.Router();

// ================= ROUTES =================
// LOGIN ROUTE
// When frontend sends POST request to /login,
// LoginUser controller will handle it
router.post("/login", LoginUser);

// REGISTER ROUTE
// When frontend sends POST request to /register,
// RegisterUser controller will handle user registration
router.post("/register", RegisterUser);

// LOGOUT ROUTE
// When frontend sends POST request to /logout,
// LogoutUser controller will handle logout logic
router.post("/logout", LogoutUser);

// Export router so it can be used in main server file (app.js / index.js)
export default router;