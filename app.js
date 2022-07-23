const express = require("express");
const PORT = process.env.PORT || 3000;
const MongoClient = require("mongodb").MongoClient;
const app = express();
// const images = require("./modules/images");
const bodyParser = require("body-parser");
app.set("view engine", "ejs");

MongoClient.connect("mongodb://localhost:27017/form", function (err, database) {
  if (err) throw err;
  else {
    db = database;
    console.log("Connected to MongoDB");
    //Start app only after connection is ready
    app.listen(4000);
  }
});

app.use(bodyParser.urlencoded({ extended: false }));

const path = require("path");

const publicDirectoryPath = path.join(__dirname, "./public");

app.use(express.static(publicDirectoryPath));

const viewsPath = path.join(__dirname, "/templates/views");
app.set("views", viewsPath);

// app.get("", (req, res) => {
//   let _images = images;
//   if (!!req.query.size) {
//     _images = _images.slice(0, req.query.size);
//   }
//   res.render("index", { imagesArray: _images });
// });

app.post("/form", (req, res) => {
  console.log(req.body);
  // res.render("form2");
  // Insert JSON straight into MongoDB
  db.collection("people").insertOne(req.body, function (err, result) {
    if (err) res.send("Error");
    else res.send("Form sent to our database");
  });
});

app.get("/form", (req, res) => {
  console.log(req.query);
  res.render("form");
});

// app.get('*', (req, res) => {
//     res.redirect(303,"/") })

app.listen(PORT, () => {
  console.log("Server is up on port " + PORT);
});
