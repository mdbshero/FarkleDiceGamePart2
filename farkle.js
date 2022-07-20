var diceArr = [];
var diceClicked = [];

function initializeDice() {
  for (i = 0; i < 6; i++) {
    diceArr[i] = {};
    diceArr[i].id = "die" + (i + 1); //Updated the code so that the correct id displays, used to be die01 now is die1.
    diceArr[i].value = i + 1;
    diceArr[i].clicked = 0;
  }
}

/*Rolling dice values*/
function rollDice() {
  for (var i = 0; i < 6; i++) {
    if (diceArr[i].clicked === 0) {
      diceArr[i].value = Math.floor(Math.random() * 6 + 1);
    }
  }
  updateDiceImg();
}

/*Updating images of dice given values of rollDice*/
function updateDiceImg() {
  var diceImage;
  for (var i = 0; i < 6; i++) {
    diceImage = "images/" + diceArr[i].value + ".png"; //Fixed to diceArr[i].value to show actual value of die and not just the number in list.
    document.getElementById(diceArr[i].id).setAttribute("src", diceImage);
  }
}

function diceClick(img) {
  var i = img.getAttribute("data-number");
  img.classList.toggle("transparent");
  if (diceArr[i].clicked === 0) {
    diceArr[i].clicked = 1; //Fixed to it actually sets .clicked to 1
    diceClicked.push(diceArr[i]);
    console.log(diceClicked);
  } else {
    diceArr[i].clicked = 0; //Fixed to it actually sets .clicked to 1
	diceClicked = diceClicked.filter((die) => die.id !== diceArr[i].id)
	console.log(diceClicked)
  }
}

//Game Rules
//Dice Combo   Score
//Each 1 Rolled 100
//Each 5 Rolled 50
//Three 1       1000
//Three 2       200
//Three 3       300
//Three 4       400
//Three 5       500
//Three 6       600
