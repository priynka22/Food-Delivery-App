const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const product = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/food");
console.log("Connected to MongoDB");

app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app.use("/api", product);
app.use("/api/user", userRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port`);
});