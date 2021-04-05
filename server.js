const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 7654;
app.use(express.json({
  limit: "15mb"
}));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public", "index.html"));
});
app.get("/welcome/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public", "welcome.html"));
});
app.get("/upload/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public", "upload.html"));
});
app.get("/display/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public", "display.html"));
});
app.get("/js/main.js", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/js", "main.js"));
});
app.get("/js/index.js", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/js", "index.js"));
});
app.get("/js/box.js", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/js", "box.js"));
});
app.get("/js/welcome.js", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/js", "welcome.js"));
});
app.get("/js/getDataAndDisplayIt.js", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/js", "getDataAndDisplayIt.js"));
});
app.get("/js/upload.js", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/js", "upload.js"));
});
app.get("/js/display.js", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/js", "display.js"));
});
app.get("/css/main.css", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/css", "main.css"));
});
app.get("/css/index.css", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/css", "index.css"));
});
app.get("/css/box.css", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/css", "box.css"));
});
app.get("/images/favicon.ico", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/images", "favicon.ico"));
});
app.get("/json/pages.json", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/json", "pages.json"));
});
app.get("/json/list.json", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/json", "list.json"));
});
app.get("/uploads/:fileName", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/uploads", req.params.fileName));
});
app.post("/post/js/json/upload/", function (req, res) {
  const listPath = path.join(__dirname, "/public/json", "list.json");
  let list = JSON.parse(fs.readFileSync(listPath));
  let name = Date.now() + ".json";
  list.push(name);
  fs.writeFileSync(listPath, JSON.stringify(list, null, 1));
  fs.writeFileSync(path.join(__dirname, "/public/uploads", name), JSON.stringify(req.body, null, 1));
  res.end();
});
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/public", "404error.html"));
});
app.listen(port, function () {
  console.log("Server runing at localhost:" + port);
});
