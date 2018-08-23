# LIRI Bot
This application will search Spoify for songs, Bands in Town for concerts and OMDB for movies.

## Installation Instructions
The following node modules must be installed in order for the app to work: Moment, DotEnv, Request, and Node-Spotify-API.

To run the application clone this repository to your computer and thn run the following commands from a bash command line.

node liri.js concert-this <artist/band name here> - This will return upcoming concert information from Bands in Town.

node liri.js spotify-this-song '<song name here>' - This will return song information from Spotify.

node liri.js movie-this '<movie name here>' -  This will return information about movies from OMDB.
  
node liri.js do-what-it-says -  This will run a special command that is stored in a text file.  

