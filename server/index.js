const express = require("express");
const app = express();
const mongoose = require("mongoose");
const employeeModel = require("./db/employees");

const http = require("http");

// server created for backend
const server = http.createServer(app);
const PORT = 3000 || process.env.PORT;
server.listen(PORT, () => console.log("Server is running"));

//Body parser for JSON data
app.use(express.json());

//cross origin
const cors = require("cors");

app.use(cors({ origin: true }));
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

//database initialization
mongoose.Promise = global.Promise;
// connection creation
mongoose
  .connect("mongodb://localhost/Project", {
    useMongoClient: true,
  })
  .then(() => {
    console.log("connection successful....");
  })
  .catch((err) => {
    console.log("not connected");
  });

//Routes
app.post("/register", (req, res) => {
  employeeModel
    .create(req.body)
    .then((employee) => res.json(employee))
    .catch((err) => res.json(err));
});

//login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  employeeModel.findOne({ username: username }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record found");
    }
  });
});
