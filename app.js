//Importing packages
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//mongodb url
const url = "mongodb://localhost/student";

//Starting Express
const app = express();
//connecting mongoose
mongoose.connect(url);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

//geting hold on mongoose
const con = mongoose.connection;

//function run whrn connection open
con.on("open", () => {
  console.log("connected....");
});

const employee = require("./Router/Router.student");
app.use(express.json());
app.use("/student", student);

app.listen(3000, () => {
  console.log("Server started");
});
