const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRouter = require("./Routes/users");
const exerciseRouter = require("./Routes/exercises");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use("/exercises", exerciseRouter);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
