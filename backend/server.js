const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// use dynamic port for cloud deployment
const PORT = process.env.PORT || 5000;

app.get("/test", (req, res) => {
  res.json({ message: "Backend is connected!" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});