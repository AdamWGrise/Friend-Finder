var friends = require("./data/friends");
// Pulling in the friends array...

var Calculate = function (newFriend) {
    var differences = [] // Array for storing the summed differences for each friend in the array.
    // Below: d0 through d9 are storing the differences in the answers for each individual question; the total is then obtained and stored in the 'differences' array - the index of that value will be the same as the position of the friend in the friends array, which makes it easy to return the right one later on.
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
        // Below: Just a quick check to see if the routeName is the same for this friend. If so, the routeName for the new friend simply has a number appended to the end of their routeName, a number corresponding to which friend they are numerically in the array. This should ensure a unique value every time.
        if (newFriend.routeName === friends[i].routeName) {
            newFriend.routeName = newFriend.routeName + (friends.length + 1);
        }
    }

    // Now we find the index of the smallest value in the differences array...
    var matchValue = Math.min.apply(Math, differences);

    // ...which, if we remember, is necessarily the same position as the friend that we ultimately are matching up to...
    var friendMatch = differences.indexOf(matchValue);

    // ...and finally, just using that index to actually return the friend we want.
    return friends[friendMatch];
}

module.exports = Calculate;