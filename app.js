import { error } from "console";
import express from "express";
import { userInfo } from "os";

const app = express();

const PORT = 8000;
import path from "path";

const __dirname = path.resolve();
console.log(__dirname);
// app.get("/", (req, res) => {
//   console.log(req);
//   console.log("we got the request");
//     res.send("<h1>Hello World</h1> <p>This is a coding world</p>");
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/index.html");
});

app.use(express.static(__dirname + "/src/public"));
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost:${PORT}`);
});
