// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Express & Data Parsing
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static('app/public'));
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Spin up server
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});