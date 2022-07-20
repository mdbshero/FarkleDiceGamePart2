var diceArr = [];
var diceClicked = []; //Clicked die values
var checkedScore = 0; // Checked score
var roundScore = 0; // Round Score
var totalScore = 0; //Total score
let dieValues = []; //pulls die values into array
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
      diceArr[i].value = (Math.floor(Math.random() * 6) + 1);
	  dieValues.push(diceArr[i].value);
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
    diceClicked.push(diceArr[i]); //Creates array filled with clicked dice for scoring.
  } else {
    checkedScore = 0; // resets score so that gameLogic function can recalculate score with new clicked array.
    document.getElementById("checked score").innerHTML = checkedScore;
    diceArr[i].clicked = 0; //Fixed to it actually sets .clicked to 1
    diceClicked = diceClicked.filter((die) => die.id !== diceArr[i].id); //Removed dice from array that are not clicked.
  }
}
//Calculate score for 1s
function checkScoreOne(dice) {
  let lengthOfOne = dice.filter((num) => num === 1).length;
  console.log(lengthOfOne);
  if (lengthOfOne === 1) {
    checkedScore += 100;
  } else if (lengthOfOne === 2) {
    checkedScore += 200;
  } else if (lengthOfOne === 3) {
    checkedScore += 1200;
  } else if (lengthOfOne === 4) {
    checkedScore += 1300;
  } else if (lengthOfOne === 5) {
    checkedScore += 1400;
  } else if (lengthOfOne === 6) {
    checkedScore += 2600;
  }
}
//Calculate score for 2s
function checkScoreTwo(dice) {
  let lengthOfOne = dice.filter((num) => num === 2).length;
  if (lengthOfOne === 3) {
    checkedScore += 200;
  } else if (lengthOfOne === 6) {
    checkedScore += 400;
  }
}
//Calculate score for 3s
function checkScoreThree(dice) {
  let lengthOfOne = dice.filter((num) => num === 3).length;
  if (lengthOfOne === 3) {
    checkedScore += 300;
  } else if (lengthOfOne === 6) {
    checkedScore += 600;
  }
}
//Calculate score for 4s
function checkScoreFour(dice) {
  let lengthOfOne = dice.filter((num) => num === 4).length;
  if (lengthOfOne === 3) {
    checkedScore += 400;
  } else if (lengthOfOne === 6) {
    checkedScore += 800;
  }
}
//Calculate score for 5s
function checkScoreFive(dice) {
  let lengthOfOne = dice.filter((num) => num === 5).length;
  if (lengthOfOne === 1) {
    checkedScore += 50;
  } else if (lengthOfOne === 2) {
    checkedScore += 100;
  } else if (lengthOfOne === 3) {
    checkedScore += 600;
  } else if (lengthOfOne === 4) {
    checkedScore += 650;
  } else if (lengthOfOne === 5) {
    checkedScore += 700;
  } else if (lengthOfOne === 6) {
    checkedScore += 1250;
  }
}
//Calculate score for 6s
function checkScoreSix(dice) {
  let lengthOfOne = dice.filter((num) => num === 6).length;
  if (lengthOfOne === 3) {
    checkedScore += 600;
  } else if (lengthOfOne === 6) {
    checkedScore += 1200;
  }
}

//Calculates score when Check Score is clicked.
function checkScoreAll(dice) {
  checkedScore = 0;
  dice = diceClicked;
  dice = dice.map((dice) => dice.value);
  checkScoreOne(dice);
  checkScoreTwo(dice);
  checkScoreThree(dice);
  checkScoreFour(dice);
  checkScoreFive(dice);
  checkScoreSix(dice);
  document.getElementById("checked score").innerHTML = checkedScore;
}

function bankRoundScore() {
  roundScore += checkedScore;
  checkedScore = 0;
  document.getElementById("checked score").innerHTML = "C: " + checkedScore;
  document.getElementById("round score").innerHTML = "R: " + roundScore;
}
function endRoundScore() {
  totalScore += roundScore;
  checkedScore = 0;
  roundScore = 0;
  document.getElementById("checked score").innerHTML = "C: " + checkedScore;
  document.getElementById("round score").innerHTML = "R: " + roundScore;
  document.getElementById('total score').innerHTML = "T: " + totalScore
}
