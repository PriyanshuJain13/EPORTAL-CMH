const express = require("express");

const app = express();

const http = require("http");

const server = http.createServer(app);
const PORT = 3000 || process.env.PORT;
server.listen(PORT, () => console.log("Server is running"));
