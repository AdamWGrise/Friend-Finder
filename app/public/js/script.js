$(document).ready(function () {
    $("#namePhotoWarning").hide();
    // Hiding the warning message that shows if the name/photo fields aren't filled in.
})

// Below: OnClick event for the Submit Answers button.
$("#submit-button").on("click", function () {
    $("#namePhotoWarning").hide(); 
    // Again hide the message in case it was showing from a bad previous submission.

    // Below: If the name or photo fields are blank, show the warning and also display a warning in the modal popup.
    if ($("#name").val().trim() === '' || $("#photo").val().trim() === '') {
        $("#namePhotoWarning").show();
        $("#modalText").html("You need to enter a name and photo URL!");
        // Below - an attempt to try to remove the closing "x" button in the top right corner of the modal, since the layering is a bit odd, and since the Close link serves the same purpose already. However, the method doesn't seem to work correctly in this case since you can still see a chunk of the button, whereas it does if the post request is successful. This may be a bug in jQueryModal.
        $("#friendModal").modal({
            showClose: false,
        })
        return;

    } else {
        // Continue entering the new user as a friend and perform the best friend calculation.
        enterNewFriend();
    };
});

// Below: The main front-end JS function for submission.
var enterNewFriend = function () {

    // Gathers the data and scores...
    var newFriend = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5")
            .val(), $(
                "#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10")
            .val()
        ]
    };

    // If the answers aren't all completed, this particular app will still let you submit it. But this is storing a warning message to show you in the modal box if so.
    var incompleteWarning = '';
    for (i = 0; i < newFriend.scores.length; i++) {
        console.log(newFriend.scores[i]);
        if (newFriend.scores[i] === "") {
            incompleteWarning =
                "Next time, make sure to answer all of the questions to get a more accurate match!";
        }
    }

    // Finally, our post request. The data is obtained, and then in the promise we go ahead and update our modal box with everything: The heading text, name of the returned friend, and the picture, as well as that incomplete warning defined above.
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

            // And finally, in this case, we're able to hide the close button in the top right of the modal box.
            $("#friendModal").modal({
                showClose: false,
            })
        });
};