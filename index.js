const express = require("express");
const app = express();
const path = require("path")

const port = 5000;

app.set("view engine", "ejs");
// app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))

// home
app.get("/", (req, res) => {
    res.render("home");
});
   
// fevicon         
app.get("/fevicon", (req, res) => {
    res.render("fevicon");
});

// about
app.get("/about", (req, res) => {
    res.render("about");
});

// careers
app.get("/careers", (req, res) => {
    res.render("careers");
});

// contact
app.get("/contact", (req, res) => {
    res.render("contact");
});

// services
app.get("/services", (req, res) => {
    res.render("services");
});

// admin
app.get("/admin", (req, res) => {
    res.render("admin");
});

//user   
app.get("/user", (req, res) => {
    res.render("user");
});

// user registration
app.get("/register", (req, res) => {
    res.render("register");
});

// forgot password
app.get("/forgot", (req, res) => {
    res.render("forgot");
});

// slide
app.get("/slide", (req, res) => {
    res.render("slide");
});

app.listen(port, () => {
    console.log(`Server is running at port no: ${port}`);
});