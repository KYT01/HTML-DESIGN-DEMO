let user;

function userName() {
  if (!user) {
    user = prompt("What is your name?");
  }
  let welcomeMessage = "Welcome " + user;
  return document.write(welcomeMessage);
}

userName();

let rating;

function displayRating() {
  let rating = prompt("On a scale of 1 - 3, how much do you like the artwork?");
  let message = "";

  if (rating === "1") {
    message = ":(";
  } else if (rating === "2") {
    message = ":)";
  } else if (rating === "3") {
    message = ":o";
  }

  return document.write(message);


displayRating(); } 



document.addEventListener('DOMContentLoaded', function() {
  let rate = prompt("How many stars would you rate this site?");

  if (rate >= 1 && rate <= 5) {
    let stars = "";
    for (let i = 0; i < rate; i++) {
      stars += `<img class="star-image" src="https://pngimg.com/uploads/star/star_PNG1595.png">`;
    }
    document.getElementById("starsContainer").innerHTML = stars;
  } else {
    alert("Invalid rating! Please enter a number between 1 and 5.");
  }
});

