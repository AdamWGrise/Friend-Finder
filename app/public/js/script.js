$(document).ready(function () {
    $("#namePhotoWarning").hide();
})

$("#submit-button").on("click", function () {
    $("#namePhotoWarning").hide();
    if ($("#name").val().trim() === '' || $("#photo").val().trim() === '') {
        $("#namePhotoWarning").show();
        $("#modalText").html("You need to enter a name and photo URL!");
        // Below - an attempt to try to remove the closing "x" button in the top right corner of the modal, since the layering is a bit odd and the Close link serves the same purpose already. However, the method doesn't seem to work correctly in this case, whereas it does if the post request is successful.
        $("#friendModal").modal({
            showClose: false,
        })
        return;

    } else {
        // Continue entering the new user as a friend and perform the best friend calculation.
        enterNewFriend();
    };
});

var enterNewFriend = function () {

    var newFriend = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5")
            .val(), $(
                "#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10")
            .val()
        ]
    };

    var incompleteWarning = '';
    for (i = 0; i < newFriend.scores.length; i++) {
        console.log(newFriend.scores[i]);
        if (newFriend.scores[i] === "") {
            incompleteWarning =
                "Next time, make sure to answer all of the questions to get a more accurate match!";
        }
    }

    $.post("/api/friends", newFriend)
        .then(function (data) {
            $("#modalText").html("Your best match is...")
            $("#res-name").text(data.name + "!");
            var resPhoto = $('<img>');
            resPhoto.attr({
                'src': data.photo,
                'title': data.name,
                'data-caption': data.name,
                'width': '75%',
            });
            $("#res-photo").html(resPhoto);
            $("#incomplete-warning").html(incompleteWarning);
            $("#friendModal").modal({
                showClose: false,
            })
        });
};