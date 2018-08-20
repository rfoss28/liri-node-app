//code to read and set any environment variables with the dotenv package
require("dotenv").config();

// imports the keys.js file
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var Bit = require("bandsintown");
var fs = require("fs");
var request = require("request");

var spotify = new Spotify(keys.spotify);
// var concert = new Bit(keys.bit);

var input = process.argv;
var command = input[2];

//variable for holding the name for the movie, concert, or song
var name = "";

for (var i = 3; i < input.length; i++) {
  if (i > 2 && i < input.length) {
    name = name + "+" + input[i];
  } else {
    name += input[i];
  }
}

// Make it so liri.js can take in one of the following commands:

switch (command) {
  case "concert-this":
    callBit();
    break;

  case "spotify-this-song":
    callSpotify();
    break;

  case "movie-this":
    callOmdb(name);
    break;

  case "do-what-it-says":
    doWhatItSays();
    break;

  default:
    console.log("Invalid input, try again.");
}

function callBit() {}

function callSpotify() {}

function callOmdb(movieName) {
 ;

  // This line is just to help us debug against the actual URL.
  console.log(queryUrl);
  console.log(name);
  if (name===""){
    name= "Mr. Nobody";
    console.log(name);
  }

  var queryUrl =
  "http://www.omdbapi.com/?t=" + name + "&y=&plot=short&apikey=trilogy"

  request(queryUrl, function(error, response, body) {
    // If the request is successful
    if (!error && response.statusCode === 200) {
      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      console.log("Title - " + JSON.parse(body).Title);
      console.log("Release Year: - " + JSON.parse(body).Year);
      console.log("IMDB Rating - " + JSON.parse(body).imdbRating);
      console.log("Rotten Tomatoes Rating - " + JSON.parse(body).tomatoRating);
      console.log("Country where the movie was produced - " + JSON.parse(body).Country);
      console.log("Language - " + JSON.parse(body).Language);
      console.log("Plot - " + JSON.parse(body).Plot);
      console.log("Actors - "  + JSON.parse(body).Actors);
    }
  });
}

function doWhatItSays() {}
