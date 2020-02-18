


function roll() {
  let number1 = Math.floor((Math.random() * 6) + 1);
  let number2 = Math.floor((Math.random() * 6) + 1);

  document.querySelector(".img1").setAttribute("src", "images/dice" + number1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + number2 + ".png");

  if (number1 > number2) {
    document.querySelector("h1").innerText = "Player 1 wins!";
  } else if (number1 < number2) {
    document.querySelector("h1").innerText = "Player 2 is the winner!";
  } else if (number1 = number2) {
    document.querySelector("h1").innerText = "It's a bust, you tied! Try again."
  }
}
