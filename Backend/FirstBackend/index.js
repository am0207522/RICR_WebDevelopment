import dotenv from "dotenv"; //environment variable load
dotenv.config();

import express from "express"; // express

const app = express(); // object

app.get("/", (req, res) => {
  console.log("Default Get API Hit");
  res.json({ message: "Welcome to my first backend Project" });  // api creations
}); 

app.post("/login",(req,res) =>{
    res.json({message:"Login Sucessfull"})
})

const port = process.env.PORT || 5000; // verify the port

app.listen(port, () => {
  console.log("Server Strated on PORT:", port);  //
});