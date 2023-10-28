const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const product = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

mongoose.connect("mongodb+srv://priyankakumarioraon22:0NxltFCokz9kBjC1@cluster0.a4cbmjj.mongodb.net/?retryWrites=true&w=majority");
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