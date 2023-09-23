const express = require("express");
const app = express();

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
