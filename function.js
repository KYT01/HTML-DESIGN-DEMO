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
}

displayRating();


