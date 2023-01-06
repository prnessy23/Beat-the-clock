var storage = JSON.parse(localStorage.getItem("quizHistory"));
var highscoreContainer = document.getElementById("highscore-container");

if (storage === null) {
  var nullStorage = document.createElement("h4");
  nullStorage.textContent = "No highscores";
  highscoreContainer.append(nullStorage);
} else {
  highscoreContainer.textContent = "";

  for (var i = 0; i < storage.length; i++) {
    var userData = document.createElement("p");

    userData.textContent =
      "Name: " + storage[i].name + " ------- Score: " + storage[i].score;

    highscoreContainer.append(userData);
  }
}
