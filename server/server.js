const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//Setting up the app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Connecting to the MongoDB database
mongoose.connect("mongodb://localhost:27017/hotel_admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Creating a new user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

//Creating a new user signup route
app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = new User({ name, email, password });
    await user.save();
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: error.message });
  }
});

//Start the server
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
