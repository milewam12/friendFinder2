

  var friends = require("../app/data/friends.js");
  var currentFriend = require ("../app/data/newfriend.js")


  // ----------------------------------------
  module.exports = function (app) {
    
//Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

app.get("/api/friends", function (req, res) {
  res.json(friends)
  
})

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

app.post("api/friends", function (req, res) {
  
  
function MatchMe(friend){
  var results= []; 
  var friend = req.body;
  for (var i = 0; i < friends.length; i++) {
              var totalScore = 0;
              for (var x = 0; x < friend.scores.length; x++) {
                   totalScore+=Math.abs(friend.scores[x]-friends[i].scores[x]);
      }
      results.push(totalScore);
      console.log("This is the total score" + totalScore)
  }
  return results.indexOf(Math.min.apply(null,results));
 
  friends.push(friend);
  //returns the lowest match in the group.
}

let currentMatch = MatchMe(currentFriend);


console.log("This is the current match " + currentMatch);


});
    
  };