const http = require("http");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

const server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end("<html><body><h1>Hello World!</h1></body></html>");
});

const port = process.env.PORT || 1337;
app.listen(port, function () {
  console.log("Server running at http://localhost:%d", port);
});
