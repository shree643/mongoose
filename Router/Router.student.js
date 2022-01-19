//Importing packages
const express = require("express");
const student = require("../Model/Model.student");
const app = require("../app");

//for routing
const router = express.Router();

router.get("/", async (req, res) => {
  const stud = await student.find();
  res.json(stud);
});
router.post("/create", (req, res) => {
  const stud = new student({
    name: req.body.name,
    gender: req.body.gender,
    age: req.body.age,
    salary: req.body.salary,
  });
  try {
    const a1 = stud.save();
    res.json(a1);
  } catch {}
});

router.post("/update", async (req, res) => {
  const stud = await student
    .updateOne({ name: req.body.name }, { age: 24 }, (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        console.log("DOCS", docs);
      }
    })
    .clone();
});
router.post("/delete", async (req, res) => {
  const stud = await student
    .deleteOne({ name: req.body.name }, (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        console.log("DOCS", docs);
      }
    })
    .clone();
});

module.exports = router;
