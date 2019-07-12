var friends = require("./data/friends");

var Calculate = function (newFriend) {
    var differences = []
    for (i = 0; i < friends.length; i++) {
        var d0 = Math.abs(newFriend.scores[0] - friends[i].scores[0]);
        var d1 = Math.abs(newFriend.scores[1] - friends[i].scores[1]);
        var d2 = Math.abs(newFriend.scores[2] - friends[i].scores[2]);
        var d3 = Math.abs(newFriend.scores[3] - friends[i].scores[3]);
        var d4 = Math.abs(newFriend.scores[4] - friends[i].scores[4]);
        var d5 = Math.abs(newFriend.scores[5] - friends[i].scores[5]);
        var d6 = Math.abs(newFriend.scores[6] - friends[i].scores[6]);
        var d7 = Math.abs(newFriend.scores[7] - friends[i].scores[7]);
        var d8 = Math.abs(newFriend.scores[8] - friends[i].scores[8]);
        var d9 = Math.abs(newFriend.scores[9] - friends[i].scores[9]);
        var scoreDiff = d0 + d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9;
        differences.push(scoreDiff);
    }
    var matchValue = Math.min.apply(Math, differences);

    var friendMatch = differences.indexOf(matchValue);

    return friends[friendMatch];
}

module.exports = Calculate;