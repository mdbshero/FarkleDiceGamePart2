var diceArr = [];
var diceClicked = []; //Clicked die values
var checkedScore = 0; // Checked score
var uncheckedScore = 0; //Checks unclicked dice for possible points.
var roundScore = 0; // Round Score
var totalScore = 0; //Total score
var dieValues = []; //pulls die values into array
var rollBTN = document.getElementById('roll'); //roll button
var checkBTN = document.getElementById('check');//Check score button
var bankBTN = document.getElementById('bank');//Bank Score button
var endBTN = document.getElementById('end');//End round button



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
  dieValues = [];
  uncheckedScore = 0;
  for (var i = 0; i < 6; i++) {
    if (diceArr[i].clicked === 0) {
      diceArr[i].value = Math.floor(Math.random() * 6) + 1;
      dieValues.push(diceArr[i].value);
    }
  }
  checkBTN.removeAttribute('disabled')
  checkScoreUnclicked(dieValues)
  if (uncheckedScore === 0) {
    console.log("please try again")
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
//Changes dice to transparent when clicked. Also changes their clicked attribute and adds clicked dice to clickedDice array. Removes if unclicked.
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
  let lengthOfTwo = dice.filter((num) => num === 2).length;
  if (lengthOfTwo === 3) {
    checkedScore += 200;
  } else if (lengthOfTwo === 6) {
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
  let lengthOfFour = dice.filter((num) => num === 4).length;
  if (lengthOfFour === 3) {
    checkedScore += 400;
  } else if (lengthOfFour === 6) {
    checkedScore += 800;
  }
}
//Calculate score for 5s
function checkScoreFive(dice) {
  let lengthOfFive = dice.filter((num) => num === 5).length;
  if (lengthOfFive === 1) {
    checkedScore += 50;
  } else if (lengthOfFive === 2) {
    checkedScore += 100;
  } else if (lengthOfFive === 3) {
    checkedScore += 600;
  } else if (lengthOfFive === 4) {
    checkedScore += 650;
  } else if (lengthOfFive === 5) {
    checkedScore += 700;
  } else if (lengthOfFive === 6) {
    checkedScore += 1250;
  }
}
//Calculate score for 6s
function checkScoreSix(dice) {
  let lengthOfSix = dice.filter((num) => num === 6).length;
  if (lengthOfSix === 3) {
    checkedScore += 600;
  } else if (lengthOfSix === 6) {
    checkedScore += 1200;
  }
}
//Calculate score for 1s unchecked
function uncheckScoreOne(dice) {
  let lengthOfOne = dice.filter((num) => num === 1).length;
  if (lengthOfOne === 1) {
    uncheckedScore += 100;
  } else if (lengthOfOne === 2) {
    uncheckedScore += 200;
  } else if (lengthOfOne === 3) {
    uncheckedScore += 1200;
  } else if (lengthOfOne === 4) {
    uncheckedScore += 1300;
  } else if (lengthOfOne === 5) {
    uncheckedScore += 1400;
  } else if (lengthOfOne === 6) {
    uncheckedScore += 2600;
  }
}
//Calculate score for 2s unchecked
function uncheckScoreTwo(dice) {
  let lengthOfTwo = dice.filter((num) => num === 2).length;
  if (lengthOfTwo === 3) {
    uncheckedScore += 200;
  } else if (lengthOfTwo === 6) {
    uncheckedScore += 400;
  }
}
//Calculate score for 3s unchecked
function uncheckScoreThree(dice) {
  let lengthOfOne = dice.filter((num) => num === 3).length;
  if (lengthOfOne === 3) {
    uncheckedScore += 300;
  } else if (lengthOfOne === 6) {
    uncheckedScore += 600;
  }
}
//Calculate score for 4s unchecked
function uncheckScoreFour(dice) {
  let lengthOfFour = dice.filter((num) => num === 4).length;
  if (lengthOfFour === 3) {
    uncheckedScore += 400;
  } else if (lengthOfFour === 6) {
    uncheckedScore += 800;
  }
}
//Calculate score for 5s unchecked
function uncheckScoreFive(dice) {
  let lengthOfFive = dice.filter((num) => num === 5).length;
  if (lengthOfFive === 1) {
    uncheckedScore += 50;
  } else if (lengthOfFive === 2) {
    uncheckedScore += 100;
  } else if (lengthOfFive === 3) {
    uncheckedScore += 600;
  } else if (lengthOfFive === 4) {
    uncheckedScore += 650;
  } else if (lengthOfFive === 5) {
    uncheckedScore += 700;
  } else if (lengthOfFive === 6) {
    cunheckedScore += 1250;
  }
}
//Calculate score for 6s unchecked
function uncheckScoreSix(dice) {
  let lengthOfSix = dice.filter((num) => num === 6).length;
  if (lengthOfSix === 3) {
    uncheckedScore += 600;
  } else if (lengthOfSix === 6) {
    uncheckedScore += 1200;
  }
}

//Calculates score when Check Score is clicked.
function checkScoreAll(dice) {
  console.log(diceClicked)
  checkedScore = 0;
  dice = diceClicked;
  dice = dice.map((dice) => dice.value);
  checkScoreOne(dice);
  checkScoreTwo(dice);
  checkScoreThree(dice);
  checkScoreFour(dice);
  checkScoreFive(dice);
  checkScoreSix(dice);
  document.getElementById("checked score").innerHTML = 'C: ' + checkedScore;
  bankBTN.removeAttribute('disabled')
}
//Calculates score of unchecked dice to make sure user did not lose turn
function checkScoreUnclicked(dice) {
  uncheckedScore = 0;
  uncheckScoreOne(dice);
  uncheckScoreTwo(dice);
  uncheckScoreThree(dice);
  uncheckScoreFour(dice);
  uncheckScoreFive(dice);
  uncheckScoreSix(dice);
  document.getElementById("unchecked score").innerHTML = 'UN: ' + uncheckedScore;
}
//Banks the round score and sets the diceClicked to empty so you cannot use dice you have already scored.
function bankRoundScore() {
  roundScore += checkedScore;
  checkedScore = 0;
  uncheckedScore = 0;
  diceClicked = [];
  document.getElementById("checked score").innerHTML = "C: " + checkedScore;
  document.getElementById("round score").innerHTML = "R: " + roundScore;
  document.getElementById("unchecked score").innerHTML = "UC: " + uncheckedScore;
}

//Will eventually end round and bank score but for now just banks total score. Resets images to initial images and resets transparency.
function endRoundScore() {
  totalScore += roundScore;
  checkedScore = 0;
  roundScore = 0;
  uncheckedScore = 0;
  document.getElementById("checked score").innerHTML = "C: " + checkedScore;
  document.getElementById("round score").innerHTML = "R: " + roundScore;
  document.getElementById("total score").innerHTML = "T: " + totalScore;
  document.getElementById("unchecked score").innerHTML = "UN: " + uncheckedScore;
  bankBTN.setAttribute('disabled', '')
  checkBTN.setAttribute('disabled', '')
  initializeDice();
  updateDiceImg();
  let imgs = document.querySelectorAll("img");
  imgs.forEach((img) => img.classList.remove("transparent"));
}

//Still need to add logic that ends users turn if they cannot score with dice shown. Create array of unclicked dice that scores the potential of the unlicked dice. If zero, ends users turn and gives them zero points.
//Add another player
//Update CSS
