// import necessary some stuff
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const reload = require("reload");

// import actions
const home = require("./src/home/action");
const about = require("./src/about/action");
const contactUs = require("./src/contact-us/action");

// set view engine to ejs
app.set("view engine", "ejs");

// set static files
app.use(express.static(__dirname + '/src'));

// page routes
app.get("/", function(req, res) {
    res.render("pages/home", {
        mascots: home.mascots,
        tagline: home.tagline,
    });
});
app.get("/about", function(req, res) {
    res.render("pages/about", {
        title: about.content.title,
        message: about.content.message,
        option: about.option,
    });
});
app.get("/contact-us", function(req, res) {
    res.render("pages/contact-us", {
        contactInfo: contactUs.contactInfo,
        option: contactUs.option,
    });
});

// listen the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
// hot reload the browser
reload(app);
