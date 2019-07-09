var path = require("path");
var friends = require('../data/friends');

module.exports = function (app) {

    // Displays all friends
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    // Displays a single person in JSON
    app.get("/api/friends/:friend", function (req, res) {
        var selected = req.params.friend;

        for (var i = 0; i < friends.length; i++) {
            if (selected === friends[i].routeName) {
                return res.json(friends[i]);
            }
        };
        return res.json("Nobody by that name. Try again! (Replace this message with an actual error screen!)");
    });

    // Post request for adding yourself to the array after filling out the survey
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        newFriend.routeName = newFriend.name.replace(/\s+/g, "-").toLowerCase(); // Replace spaces with dashes for the routeName
        friends.push(newFriend);
        res.json(newFriend);
    });

};