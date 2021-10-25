// import necessary some stuff
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

// import actions
const home = require("./views/actions/home/action");
const about = require("./views/actions/about/action");

// set view engine to ejs
app.set("view engine", "ejs");

// home page
app.get("/", function(req, res) {
    res.render("pages/home", {
        mascots: home.mascots,
        tagline: home.tagline,
    });
});

// about page
app.get("/about", function(req, res) {
    res.render("pages/about", {
        title: about.content.title,
        message: about.content.message,
    });
});

// listen the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
