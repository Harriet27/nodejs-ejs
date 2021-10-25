// import necessary some stuff
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

// set view engine to ejs
app.set("view engine", "ejs");

// index page
app.get("/", function(req, res) {
    let mascots = [
        { name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
        { name: "Tux", organization: "Linux", birth_year: 1996 },
        { name: "Moby Dock", organization: "Docker", birth_year: 2013 },
    ];
    let tagline = "No programming concept is complete without a cute animal mascot.";
    res.render("pages/index", {
        mascots: mascots,
        tagline: tagline
    });
});

// about page
app.get("/about", function(req, res) {
    res.render("pages/about");
});

// listen the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
