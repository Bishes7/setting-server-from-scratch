import { error } from "console";
import exp from "constants";
import express from "express";
import { userInfo } from "os";

import fs from "fs";

const app = express();

const PORT = 8000;
import path from "path";
import { workerData } from "worker_threads";

app.use(express.urlencoded({ extended: true }));
const __dirname = path.resolve();
console.log(__dirname);
// app.get("/", (req, res) => {
//   console.log(req);
//   console.log("we got the request");
//     res.send("<h1>Hello World</h1> <p>This is a coding world</p>");
// });

// Home page Controller
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/index.html");
});

// User Registration Controller

app.get("/register", (req, res) => {
  console.log(req.query);
  res.sendFile(__dirname + "/src/register.html");
});

const fileName = "userList.csv";
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const str = `${name},${email},${password}\n`;

  // Creating file and writing data

  fs.appendFile(fileName, str, (error) => {
    error
      ? console.log(error)
      : console.log("data has been written in the file");
  });

  res.sendFile(__dirname + "/src/register.html");
});

// User Login Controller

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/src/login.html");
});

// To get only json file
// app.get("/get-user", (req, res) => {
//   res.json({
//     fName: "Bishes",
//     lName: "Adhikari",
//   });
// });

app.use(express.static(__dirname + "/src/public")); // to connect the css file

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost:${PORT}`);
});
