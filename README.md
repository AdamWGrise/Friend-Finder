# Friend Finder!
Friend Finder is an application that... well... finds you a friend. :D

## What is this app?
This app asks you several questions about different subjects, then it'll use that to calculate who in the system is a good match for you. Further, your information will get added to the system for future users as well!

There are a couple of ways you can interact with the app.
1. Use the "Take the Survey" page to complete your survey and get back the result of who your friend is. Or,
2. Click the "View Person List" to get a list of all the friends in the system! This comes back in JSON format.

## How does it work?
On the front end, there are several technologies, including Bootstrap, jQuery, and [jQuery Modal](https://jquerymodal.com/ "jQuery Modal"), used specifically for the modal window that shows results.

As the answers on the Survey page are filled in and the Submit Answers button is clicked, the results are sent to the server for calculation.

Node.js and the Express framework are used to run the application on the back end. There is no data source other than a JS file that's storing an array of pre-defined friend objects to get the app started.

Once the back end receives the submission from the user, it's run through the calculate.js file to determine the aggregate difference between scores for each of the existing friends, and finds the lowest score out of all of them - it's this friend that's determined to be the match for the user.

The application itself is available for usage online, at Heroku.

## Alright, so how is it used?
This app in particular is very simple to use. From the home page, you can go to either of the two links, depending on what you want to do! You can look at the existing list of friends, or you can submit your own data and get back a match.

## Nice - so you said it's on Heroku. Can I get to it?

You sure can. [Here's a link directly to the app's home page!](https://adamgrise-friendfinder.herokuapp.com/ "Adam G Friend Finder App on Heroku")