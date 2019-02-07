// const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


const functions = require('firebase-functions');

exports.helloWorld = functions.https.onRequest((request, response) => {

    // google maps api key functions

    const googleMapsClient = require('@google/maps').createClient({
        key: 'AIzaSyBg5HJZLJHcJozUtQuhNlpqPbK5z744EGA'
      });

    // Geocode an address. #keine Ahnung was das ist

googleMapsClient.geocode({
    address: '1600 Amphitheatre Parkway, Mountain View, CA'
  }, function(err, res) {
    if (!err) {
      console.log(res.json.results);

      //AUSGABE
      response.send(res.json.results);
    }
  });

// geocode ende hier

    
});

// Injoy Stockack Place ID : ChIJv1kVEVpmmkcRRgn5ZOT6PfY
// Google Place API : AIzaSyBg5HJZLJHcJozUtQuhNlpqPbK5z744EGA












