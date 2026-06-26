import dotenv from "dotenv"; //environment variable load
dotenv.config();

import express from "express"; // express
import AuthRouter from "./src/routers/auth.route.js";
import PublicRouter from "./src/routers/public.route.js";
import connectDB from "./src/config/dbConnection.config.js";

const app = express(); // object

app.use(express.json()); // middleware

app.use("/auth", AuthRouter);
app.use("/public", PublicRouter);

// default API
app.get("/", (req, res) => {
  console.log("Default Get API Hit");
  res.json({ message: "Welcome to my first backend Project" }); // api creations
});

// Default Error Handler
app.use((err, req, res, next) => {
  const ErrorMessage = err.message || "Internal Server Error";
  const ErrorStatusCode = err.statusCode || 500;

  res.status(ErrorStatusCode).json({ message: ErrorMessage });
});

const port = process.env.PORT || 5000; // verify the port

app.listen(port, () => {
  console.log("Server Strated on PORT:", port); //
  connectDB();
});