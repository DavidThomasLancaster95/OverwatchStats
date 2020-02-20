
function callAPI() {

    let enteredName = "";

    let userName = "";
    let level = "";
    let competitiveWon = 0;
    let competitiveLost = 0;
    let competitiveDraw = 0;
    let competitivePlayed = 0;
    let competitiveWinRate = 0;
    let playTime = 0;

    console.log("callAPI function called");

    enteredName = document.getElementById("fname").value;

    console.log(enteredName);


    fetch('http://owapi.io/profile/pc/us/' + enteredName)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    //console.log(myJson);
    //console.log(myJson.username);

    userName = myJson.username;
    level = myJson.level;
    competitiveWon = myJson.games.competitive.won;
    competitiveLost = myJson.games.competitive.lost;
    competitiveDraw = myJson.games.competitive.draw;
    competitivePlayed = myJson.games.competitive.played;
    competitiveWinRate = myJson.games.competitive.win_rate;
    playTime = myJson.playtime.competitive;

    //console.log(competitiveWinRate);
    //console.log(playTime);

    document.getElementById("loadStats").innerHTML = 
    "<p> Player Name: " + userName + "</p>" +
    "<p>Play Time: " + playTime + "</p>" +
    "<p>Competitive Games Won:  " + competitiveWon + "</p>" +
    "<p>Competitive Games Lost:  " + competitiveLost + "</p>" +
    "<p>Competitive Games Draw:  " + competitiveDraw + "</p>" +
    "<p>Competitive Games Played:  " + competitivePlayed + "</p>" +
    "<p>Competitive Win Rate:  " + competitiveWinRate + "%</p>" 

    ;

  })
  .catch(function() {
        console.log("Failed to Load Game Name");
        document.getElementById("loadStats").innerHTML =
         "<h1> Failed to Load Data <h1>" +
         "<p>Make sure Name is properly formatted</p>" +
         "<p>Make sure the name and number are separated by a dash '-'</p>"+
         "<p>You can find your player id at this website:</p>" +
         "<p>https://playoverwatch.com/en-us/search</p>"
         "<p>Example: </p>"
         ;


  });
}

document.getElementById("button").addEventListener("click", function(){
    callAPI();
  });