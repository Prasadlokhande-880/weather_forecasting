const hbs = require("hbs");
const express = require("express");
const app = express();
const path = require("path");

const path_view = path.join(__dirname, "temp", "views");
const path_partials = path.join(__dirname, "temp", "commponents");

app.set("view engine", "hbs");
app.set("views", path_view);

hbs.registerPartials(path_partials);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("/weather/*", (req, res) => {
  res.render("error404",{error:"There is no section name as this in weather"});
});

app.get("/about/*", (req, res) => {
  res.render("error404",{error:"There is no section name as this in About"});
});

app.get("*", (req, res) => {
  res.render("error404",{error:"The page you are looking for does not exist."});
});



app.listen(8000, () => {
  console.log("The server is listening on port 8000");
});
