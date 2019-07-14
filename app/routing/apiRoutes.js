var path = require("path");
var friends = require('../data/friends');
var Calculate = require("../calculate");

module.exports = function (app) {

    // Displays all friends
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    // Post request for adding yourself to the array after filling out the survey
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        newFriend.routeName = newFriend.name.replace(/\s+/g, "-").toLowerCase(); // Replace spaces with dashes for the routeName
        res.json(Calculate(newFriend));
        friends.push(newFriend);
    });
};