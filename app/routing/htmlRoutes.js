var path = require("path");

// Just the two HTML pages and their associated routing.

module.exports = function (app) {

    // HTML Routing
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};