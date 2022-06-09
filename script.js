// HARRY POTTER SORTING QUIZ

// Total counter variables for each house
let gryffindor = 0;
let ravenclaw = 0;
let hufflepuff = 0;
let slytherin = 0;



// FUNCTION TO PLAY BUTTON CLICK AUDIO

function playAudio() {
  let buttonClick = document.getElementById("buttonAudio");
  buttonClick.play();
};


/*============================================================= QUESTION 1 ===================================================================*/
// QUESTION 1: MOON OR STARS?
// MOON:
function answer1A() {
  let question1Div = document.querySelector('.question1');
  let question2Div = document.querySelector('.question2');
  question1Div.setAttribute('style', 'display: none');
  document.getElementById('question-count1').textContent = "2 / 12";
  document.getElementById('question-count2').textContent = "2 / 12";
  let randQuestion = Math.floor((Math.random() * 100) + 1);
  if (randQuestion < 50) {
    question2Div.setAttribute('style', 'display: flex; visibility: visible; background: url(images/woods-photo-zack-silver.jpg) no-repeat center fixed;');
    document.getElementById('question-2').textContent = "Forest or River?";
    document.getElementById('answer-2A').textContent = "Forest";
    document.getElementById('answer-2B').textContent = "River";
  } else if (randQuestion >= 50) {
    question2Div.setAttribute('style', 'display: flex; visibility: visible; background: url(images/daw-dusk-chris-galbraith.jpg) no-repeat fixed;');
    document.getElementById('question-2').textContent = "Dawn or Dusk?";
    document.getElementById('answer-2A').textContent = "Dawn";
    document.getElementById('answer-2B').textContent = "Dusk";
  }
  gryffindor += 27;
  ravenclaw += 74;
  hufflepuff += 33;
  slytherin += 72;

  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// STARS:
function answer1B() {
  let question1Div = document.querySelector('.question1');
  let question2Div = document.querySelector('.question2');
  question1Div.setAttribute('style', 'display: none');
  document.getElementById('question-count1').textContent = "2 / 12";
  document.getElementById('question-count2').textContent = "2 / 12";
  let randQuestion = Math.floor((Math.random() * 100) + 1);
  if (randQuestion < 50) {
    question2Div.setAttribute('style', 'display: flex; visibility: visible; background: url(images/woods-photo-zack-silver.jpg) no-repeat center fixed;');
    document.getElementById('question-2').textContent = "Forest or River?";
    document.getElementById('answer-2A').textContent = "Forest";
    document.getElementById('answer-2B').textContent = "River";
  } else if (randQuestion >= 50) {
    question2Div.setAttribute('style', 'display: flex; visibility: visible; background: url(images/daw-dusk-chris-galbraith.jpg) no-repeat fixed;');
    document.getElementById('question-2').textContent = "Dawn or Dusk?";
    document.getElementById('answer-2A').textContent = "Dawn";
    document.getElementById('answer-2B').textContent = "Dusk";
  }
  gryffindor += 73;
  ravenclaw += 26;
  hufflepuff += 67;
  slytherin += 28;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};

/*============================================================= QUESTION 2 ===================================================================*/
// QUESTION 2: DAWN OR DUSK? | FOREST OR RIVER?
// DAWN | FOREST
function answer2A() {
  let question2Div = document.querySelector('.question2');
  let question3Div = document.querySelector('.question3');
  question2Div.setAttribute('style', 'display: none');
  question3Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "3 / 12";
  document.getElementById('question-count2').textContent = "3 / 12";

  gryffindor += 73;
  ravenclaw += 73;
  hufflepuff += 30;
  slytherin += 26;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// DUSK | RIVER
function answer2B() {
  let question2Div = document.querySelector('.question2');
  let question3Div = document.querySelector('.question3');
  question2Div.setAttribute('style', 'display: none');
  question3Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "3 / 12";
  document.getElementById('question-count2').textContent = "3 / 12";
  gryffindor += 27;
  ravenclaw += 27;
  hufflepuff += 70;
  slytherin += 74;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};

/*============================================================= QUESTION 3 ===================================================================*/
// QUESTION 3: FOUR BOXES ARE PLACED BEFORE YOU. WHICH DO YOU OPEN?
// SMALL TORTOISESHELL BOX
function answer3A() {
  let question3Div = document.querySelector('.question3');
  let question4Div = document.querySelector('.question4');
  question3Div.setAttribute('style', 'display: none');
  question4Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "4 / 12";
  document.getElementById('question-count2').textContent = "4 / 12";
  gryffindor += 14;
  ravenclaw += 18;
  hufflepuff += 46;
  slytherin += 18;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// GLEAMING JET BLACK BOX
function answer3B() {
  let question3Div = document.querySelector('.question3');
  let question4Div = document.querySelector('.question4');
  question3Div.setAttribute('style', 'display: none');
  question4Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "4 / 12";
  document.getElementById('question-count2').textContent = "4 / 12";
  gryffindor += 18;
  ravenclaw += 20;
  hufflepuff += 16;
  slytherin += 46;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// ORNATE GOLDEN CASKET
function answer3C() {
  let question3Div = document.querySelector('.question3');
  let question4Div = document.querySelector('.question4');
  question3Div.setAttribute('style', 'display: none');
  question4Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "4 / 12";
  document.getElementById('question-count2').textContent = "4 / 12";
  gryffindor += 19;
  ravenclaw += 44;
  hufflepuff += 21;
  slytherin += 19;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// SMALL PEWTER BOX
function answer3D() {
  let question3Div = document.querySelector('.question3');
  let question4Div = document.querySelector('.question4');
  question3Div.setAttribute('style', 'display: none');
  question4Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "4 / 12";
  document.getElementById('question-count2').textContent = "4 / 12";
  gryffindor += 49;
  ravenclaw += 19;
  hufflepuff += 17;
  slytherin += 17;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};

/*============================================================= QUESTION 4 ===================================================================*/
// QUESTION 4: FOUR GOBLETS ARE PLACED BEFORE YOU. WHICH DO YOU CHOOSE?
// FOAMING FROTHING SILVERY LIQUID
function answer4A() {
  let question4Div = document.querySelector('.question4');
  let question5Div = document.querySelector('.question5');
  question4Div.setAttribute('style', 'display: none');
  question5Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "5 / 12";
  document.getElementById('question-count2').textContent = "5 / 12";
  gryffindor += 21;
  ravenclaw += 44;
  hufflepuff += 19;
  slytherin += 18;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// SMOOTH THICK RICHLY PURPLE DRINK
function answer4B() {
  let question4Div = document.querySelector('.question4');
  let question5Div = document.querySelector('.question5');
  question4Div.setAttribute('style', 'display: none');
  question5Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "5 / 12";
  document.getElementById('question-count2').textContent = "5 / 12";
  gryffindor += 19;
  ravenclaw += 19;
  hufflepuff += 43;
  slytherin += 20;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// GOLDEN LIQUID
function answer4C() {
  let question4Div = document.querySelector('.question4');
  let question5Div = document.querySelector('.question5');
  question4Div.setAttribute('style', 'display: none');
  question5Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "5 / 12";
  document.getElementById('question-count2').textContent = "5 / 12";
  gryffindor += 41;
  ravenclaw += 18;
  hufflepuff += 19;
  slytherin += 19;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// MYSTERIOUS BLACK LIQUID
function answer4D() {
  let question4Div = document.querySelector('.question4');
  let question5Div = document.querySelector('.question5');
  question4Div.setAttribute('style', 'display: none');
  question5Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "5 / 12";
  document.getElementById('question-count2').textContent = "5 / 12";
  gryffindor += 18;
  ravenclaw += 19;
  hufflepuff += 19;
  slytherin += 43;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};

/*============================================================= QUESTION 5 ===================================================================*/
// QUESTION 5: YOU AND TWO FRIENDS CONFRONT A TROLL. DO YOU:
// ATTEMPT TO CONFUSE IT
function answer5A() {
  let question5Div = document.querySelector('.question5');
  let question6Div = document.querySelector('.question6');
  question5Div.setAttribute('style', 'display: none');
  question6Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "6 / 12";
  document.getElementById('question-count2').textContent = "6 / 12";
  gryffindor += 20;
  ravenclaw += 44;
  hufflepuff += 18;
  slytherin += 23;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// SUGGEST DRAWING LOTS
function answer5B() {
  let question5Div = document.querySelector('.question5');
  let question6Div = document.querySelector('.question6');
  question5Div.setAttribute('style', 'display: none');
  question6Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "6 / 12";
  document.getElementById('question-count2').textContent = "6 / 12";
  gryffindor += 16;
  ravenclaw += 17;
  hufflepuff += 47;
  slytherin += 17;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// ALL THREE FIGHT
function answer5C() {
  let question5Div = document.querySelector('.question5');
  let question6Div = document.querySelector('.question6');
  question5Div.setAttribute('style', 'display: none');
  question6Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "6 / 12";
  document.getElementById('question-count2').textContent = "6 / 12";
  gryffindor += 18;
  ravenclaw += 19;
  hufflepuff += 16;
  slytherin += 42;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// VOLUNTEER TO FIGHT
function answer5D() {
  let question5Div = document.querySelector('.question5');
  let question6Div = document.querySelector('.question6');
  question5Div.setAttribute('style', 'display: none');
  question6Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "6 / 12";
  document.getElementById('question-count2').textContent = "6 / 12";
  gryffindor += 46;
  ravenclaw += 19;
  hufflepuff += 19;
  slytherin += 18;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};


/*============================================================= QUESTION 6 ===================================================================*/
// QUESTION 6: YOU ENTER AN ENCHANTED GARDEN. WHAT WOULD YOU EXAMINE FIRST?
// SILVER LEAFED TREE
function answer6A() {
  let question6Div = document.querySelector('.question6');
  let question7Div = document.querySelector('.question7');
  question6Div.setAttribute('style', 'display: none');
  question7Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "7 / 12";
  document.getElementById('question-count2').textContent = "7 / 12";
  gryffindor += 17;
  ravenclaw += 45;
  hufflepuff += 18;
  slytherin += 16;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// FAT RED TOADSTOOLS
function answer6B() {
  let question6Div = document.querySelector('.question6');
  let question7Div = document.querySelector('.question7');
  question6Div.setAttribute('style', 'display: none');
  question7Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "7 / 12";
  document.getElementById('question-count2').textContent = "7 / 12";
  gryffindor += 18;
  ravenclaw += 15;
  hufflepuff += 42;
  slytherin += 17;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// THE BUBBLING POOL
function answer6C() {
  let question6Div = document.querySelector('.question6');
  let question7Div = document.querySelector('.question7');
  question6Div.setAttribute('style', 'display: none');
  question7Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "7 / 12";
  document.getElementById('question-count2').textContent = "7 / 12";
  gryffindor += 16;
  ravenclaw += 22;
  hufflepuff += 21;
  slytherin += 46;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// STATUE OF AN OLD WIZARD
function answer6D() {
  let question6Div = document.querySelector('.question6');
  let question7Div = document.querySelector('.question7');
  question6Div.setAttribute('style', 'display: none');
  question7Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "7 / 12";
  document.getElementById('question-count2').textContent = "7 / 12";
  gryffindor += 49;
  ravenclaw += 18;
  hufflepuff += 19;
  slytherin += 21;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};


/*============================================================= QUESTION 7 ===================================================================*/
// QUESTION 7: AFTER YOU HAVE DIED HOW WOULD YOU LIKE PEOPLE TO REACT TO YOUR NAME?
// MISSYOU, BUT SMILE
function answer7A() {
  let question7Div = document.querySelector('.question7');
  let question8Div = document.querySelector('.question8');
  question7Div.setAttribute('style', 'display: none');
  question8Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "8 / 12";
  document.getElementById('question-count2').textContent = "8 / 12";
  gryffindor += 18;
  ravenclaw += 16;
  hufflepuff += 42;
  slytherin += 19;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// ASK FOR MORE STORIES OF YOUR ADVENTURES
function answer7B() {
  let question7Div = document.querySelector('.question7');
  let question8Div = document.querySelector('.question8');
  question7Div.setAttribute('style', 'display: none');
  question8Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "8 / 12";
  document.getElementById('question-count2').textContent = "8 / 12";
  gryffindor += 46;
  ravenclaw += 19;
  hufflepuff += 14;
  slytherin += 19;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// ADMIRE YOUR ACHIEVEMENTS
function answer7C() {
  let question7Div = document.querySelector('.question7');
  let question8Div = document.querySelector('.question8');
  question7Div.setAttribute('style', 'display: none');
  question8Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "8 / 12";
  document.getElementById('question-count2').textContent = "8 / 12";
  gryffindor += 18;
  ravenclaw += 45;
  hufflepuff += 22;
  slytherin += 17;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// DOESN'T MATTER, ITS WHAT THEY THINK OF ME WHEN IM ALIVE
function answer7D() {
  let question7Div = document.querySelector('.question7');
  let question8Div = document.querySelector('.question8');
  question7Div.setAttribute('style', 'display: none');
  question8Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "8 / 12";
  document.getElementById('question-count2').textContent = "8 / 12";
  gryffindor += 18;
  ravenclaw += 20;
  hufflepuff += 22;
  slytherin += 45;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};


/*============================================================= QUESTION 8 ===================================================================*/
// QUESTION 8: A MUGGLE CONFRONTS YOU ABOUT BEING A WITCH/WIZARD. DO YOU:
// ASK THEM WHAT MAKES THEM THINK SO?
function answer8A() {
  let question8Div = document.querySelector('.question8');
  let question9Div = document.querySelector('.question9');
  question8Div.setAttribute('style', 'display: none');
  question9Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "9 / 12";
  document.getElementById('question-count2').textContent = "9 / 12";
  gryffindor += 17;
  ravenclaw += 45;
  hufflepuff += 20;
  slytherin += 17;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// AGREE, AND OFFER A FREE SAMPLE OF A JINX?
function answer8B() {
  let question8Div = document.querySelector('.question8');
  let question9Div = document.querySelector('.question9');
  question8Div.setAttribute('style', 'display: none');
  question9Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "9 / 12";
  document.getElementById('question-count2').textContent = "9 / 12";
  gryffindor += 21;
  ravenclaw += 17;
  hufflepuff += 20;
  slytherin += 41;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// AGREE, WALK AWAY, LEAVE THEM WONDERING WHETHER YOU ARE BLUFFING
function answer8C() {
  let question8Div = document.querySelector('.question8');
  let question9Div = document.querySelector('.question9');
  question8Div.setAttribute('style', 'display: none');
  question9Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "9 / 12";
  document.getElementById('question-count2').textContent = "9 / 12";
  gryffindor += 47;
  ravenclaw += 21;
  hufflepuff += 15;
  slytherin += 23;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// TELL THEM YOU'RE WORRIED ABOUT THEIR MENTAL HEALTH AND OFFER TO CALL A DOCTOR
function answer8D() {
  let question8Div = document.querySelector('.question8');
  let question9Div = document.querySelector('.question9');
  question8Div.setAttribute('style', 'display: none');
  question9Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "9 / 12";
  document.getElementById('question-count2').textContent = "9 / 12";
  gryffindor += 16;
  ravenclaw += 17;
  hufflepuff += 45;
  slytherin += 20;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};



/*============================================================= QUESTION 9 ===================================================================*/
// QUESTION 9: WHICH ROAD TEMPTS YOU THE MOST?
// THE WIDE, SUNNY, GRASSY LANE
function answer9A() {
  let question9Div = document.querySelector('.question9');
  let question10Div = document.querySelector('.question10');
  question9Div.setAttribute('style', 'display: none');
  question10Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "10 / 12";
  document.getElementById('question-count2').textContent = "10 / 12";
  gryffindor += 18;
  ravenclaw += 14;
  hufflepuff += 41;
  slytherin += 18;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// THE NARROW, DARK, LANTERN-LIT ALLEY
function answer9B() {
  let question9Div = document.querySelector('.question9');
  let question10Div = document.querySelector('.question10');
  question9Div.setAttribute('style', 'display: none');
  question10Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "10 / 12";
  document.getElementById('question-count2').textContent = "10 / 12";
  gryffindor += 19;
  ravenclaw += 20;
  hufflepuff += 17;
  slytherin += 44;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// THE TWISTING, LEAF-STREWN PATH THROUGH THE WOODS
function answer9C() {
  let question9Div = document.querySelector('.question9');
  let question10Div = document.querySelector('.question10');
  question9Div.setAttribute('style', 'display: none');
  question10Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "10 / 12";
  document.getElementById('question-count2').textContent = "10 / 12";
  gryffindor += 44;
  ravenclaw += 22;
  hufflepuff += 19;
  slytherin += 23;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// THE COBBLED STREET LINED WITH ANCIENT BUILDINGS
function answer9D() {
  let question9Div = document.querySelector('.question9');
  let question10Div = document.querySelector('.question10');
  question9Div.setAttribute('style', 'display: none');
  question10Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "10 / 12";
  document.getElementById('question-count2').textContent = "10 / 12";
  gryffindor += 19;
  ravenclaw += 43;
  hufflepuff += 23;
  slytherin += 14;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};



/*============================================================= QUESTION 10 ==================================================================*/
// QUESTION 10: WHICH OF THE FOLLOWING WOULD YOU MOST HATE PEOPLE TO CALL YOU?
// ORDINARY
function answer10A() {
  let question10Div = document.querySelector('.question10');
  let question11Div = document.querySelector('.question11');
  question10Div.setAttribute('style', 'display: none');
  question11Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "11 / 12";
  document.getElementById('question-count2').textContent = "11 / 12";
  gryffindor += 17;
  ravenclaw += 18;
  hufflepuff += 19;
  slytherin += 45;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// IGNORANT
function answer10B() {
  let question10Div = document.querySelector('.question10');
  let question11Div = document.querySelector('.question11');
  question10Div.setAttribute('style', 'display: none');
  question11Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "11 / 12";
  document.getElementById('question-count2').textContent = "11 / 12";
  gryffindor += 19;
  ravenclaw += 50;
  hufflepuff += 19;
  slytherin += 17;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// COWARDLY
function answer10C() {
  let question10Div = document.querySelector('.question10');
  let question11Div = document.querySelector('.question11');
  question10Div.setAttribute('style', 'display: none');
  question11Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "11 / 12";
  document.getElementById('question-count2').textContent = "11 / 12";
  gryffindor += 47;
  ravenclaw += 17;
  hufflepuff += 18;
  slytherin += 20;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// SELFISH
function answer10D() {
  let question10Div = document.querySelector('.question10');
  let question11Div = document.querySelector('.question11');
  question10Div.setAttribute('style', 'display: none');
  question11Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "11 / 12";
  document.getElementById('question-count2').textContent = "11 / 12";
  gryffindor += 17;
  ravenclaw += 15;
  hufflepuff += 44;
  slytherin += 18;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};



/*============================================================= QUESTION 11 ==================================================================*/
// QUESTION 11: GIVEN THE CHOICE, WOULD YOU RATHER INVENT A POTION THAT WOULD GAURANTEE YOU:?
// LOVE?
function answer11A() {
  let question11Div = document.querySelector('.question11');
  let question12Div = document.querySelector('.question12');
  question11Div.setAttribute('style', 'display: none');
  question12Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "12 / 12";
  document.getElementById('question-count2').textContent = "12 / 12";
  gryffindor += 17;
  ravenclaw += 18;
  hufflepuff += 19;
  slytherin += 45;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// GLORY?
function answer11B() {
  let question11Div = document.querySelector('.question11');
  let question12Div = document.querySelector('.question12');
  question11Div.setAttribute('style', 'display: none');
  question12Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "12 / 12";
  document.getElementById('question-count2').textContent = "12 / 12";
  gryffindor += 19;
  ravenclaw += 50;
  hufflepuff += 19;
  slytherin += 17;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// WISDOM?
function answer11C() {
  let question11Div = document.querySelector('.question11');
  let question12Div = document.querySelector('.question12');
  question11Div.setAttribute('style', 'display: none');
  question12Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "12 / 12";
  document.getElementById('question-count2').textContent = "12 / 12";
  gryffindor += 47;
  ravenclaw += 17;
  hufflepuff += 18;
  slytherin += 20;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// POWER?
function answer11D() {
  let question11Div = document.querySelector('.question11');
  let question12Div = document.querySelector('.question12');
  question11Div.setAttribute('style', 'display: none');
  question12Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "12 / 12";
  document.getElementById('question-count2').textContent = "12 / 12";
  gryffindor += 17;
  ravenclaw += 15;
  hufflepuff += 44;
  slytherin += 18;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};



/*============================================================= QUESTION 12 ==================================================================*/
// QUESTION 12: DID YOU PUT YOUR NAME IN THE GOBLET OF FIRE?
// NO SIR!:
function answer12A() {
  let question12Div = document.querySelector('.question12');
  question12Div.setAttribute('style', 'display: none');
  gryffindor += 25;
  ravenclaw += 25;
  hufflepuff += 25;
  slytherin += 25;
  gameResult(gryffindor, ravenclaw, hufflepuff, slytherin);
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// SO WHAT IF I DID 'BIG AL'?:
function answer12B() {
  let question12Div = document.querySelector('.question12');
  question12Div.setAttribute('style', 'display: none');
  gryffindor += 25;
  ravenclaw += 25;
  hufflepuff += 25;
  slytherin += 25;
  gameResult(gryffindor, ravenclaw, hufflepuff, slytherin);
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};













/*============================================================ GAME FUNCTIONS =================================================================*/

function restartGame() {
  let gryffSound = document.getElementById("gryffindorAudio");
  let ravenSound = document.getElementById("ravenclawAudio");
  let huffleSound = document.getElementById("hufflepuffAudio");
  let slythSound = document.getElementById("slytherinAudio");
  let restartSound = document.getElementById("restartAudio");
  gryffSound.pause();
  ravenSound.pause();
  huffleSound.pause();
  slythSound.pause();
  restartSound.play();
  gryffindor = 0;
  ravenclaw = 0;
  hufflepuff = 0;
  slytherin = 0;
  let question1Div = document.querySelector('.question1');
  //let question12Div = document.querySelector('.question12');
  //question12Div.setAttribute('style', 'display: none');
  question1Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "1 / 12";
  document.getElementById('question-count2').textContent = "1 / 12";
}

  
// FUNCTION TO OPEN END OF GAME MODAL SCREEN
function openModal() {
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  var restart = document.getElementById("playAgain");
  modal.style.display = "block";
    // FUNCTION TO CLOSE MODAL WHEN CLOSE (X) BUTTON CLICKED
  span.onclick = function() {
    modal.style.display = "none";
    restartGame();
  };
  // FUNCTION TO CLOSE MODAL WHEN RESTART BUTTON CLICKED
  restart.onclick = function() {
    modal.style.display = "none";
    restartGame();
  };
  // FUNCTION TO CLOSE MODAL WHEN USER CLICKS OUTSIDE OF MODAL
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      restartGame();
    }
  };
};



// Function to return final result
function gameResult(gryffindor, ravenclaw, hufflepuff, slytherin) {
  openModal();
  let gryffindorPercent = Math.floor(((gryffindor) / (gryffindor + ravenclaw + hufflepuff + slytherin)) * 100);
  let ravenclawPercent = Math.floor(((ravenclaw) / (gryffindor + ravenclaw + hufflepuff + slytherin)) * 100);
  let hufflepuffPercent = Math.floor(((hufflepuff) / (gryffindor + ravenclaw + hufflepuff + slytherin)) * 100);
  let slytherinPercent = Math.floor(((slytherin) / (gryffindor + ravenclaw + hufflepuff + slytherin)) * 100);
    // VARIABLES TO STORE SOUND EFFECTS
  let gryffSound = document.getElementById("gryffindorAudio");
  let ravenSound = document.getElementById("ravenclawAudio");
  let huffleSound = document.getElementById("hufflepuffAudio");
  let slythSound = document.getElementById("slytherinAudio");
  if ((gryffindor >= ravenclaw) && (gryffindor >= hufflepuff) && (gryffindor >= slytherin)) {
    gryffSound.play();
    document.getElementById('threeTraits').textContent = "Courage, Bravery, Determination";
    document.getElementById('finalResult').innerHTML = "GRYFFINDOR!";
    document.getElementById('houseCrest').src="images/icons8-gryffindor-100.png";
    document.getElementById('welcomeMessage').textContent = "Welcome to Gryffindor";
    document.getElementById('houseDescription').textContent = "You probably know that some of Gryffindor's most renowned members include Albus Dumbledore and Harry Potter. But did you know the sword of Gryffindor was made a thousand years ago by goblins. or that Head of House Minerva McGonagall's hobbies include correcting articles in Transfiguration Today and supporting the Montrose Magpies?";
    document.getElementById('gryffindor').innerHTML = "Gryffindor: <br>" + gryffindorPercent + "%";
    document.getElementById('ravenclaw').innerHTML = "Ravenclaw: <br>" + ravenclawPercent + "%";
    document.getElementById('hufflepuff').innerHTML = "Hufflepuff: <br>" + hufflepuffPercent + "%";
    document.getElementById('slytherin').innerHTML = "Slytherin: <br>" + slytherinPercent + "%";
    document.getElementById('quoteContent').textContent = '"You might belong in Gryffindor, Where dwell the brave at heart, Their daring, nerve and chivalry Set Gryffindors apart"';
    document.getElementById('quotePerson').textContent = "THE SORTING HAT";
    document.getElementById('quoteSource').textContent = "Harry Potter and the Philosopher's Stone";
    document.getElementById("modalScreen").style.backgroundImage = "linear-gradient(rgba(161, 17, 17, 0.957), rgb(67, 1, 1))";
  } else if ((ravenclaw >= gryffindor) && (ravenclaw >= hufflepuff) && (ravenclaw >= slytherin)) {
    ravenSound.play();
    document.getElementById('threeTraits').textContent = "Wit, Learning, Wisdom";
    document.getElementById('finalResult').innerHTML = "RAVENCLAW!";
    document.getElementById('houseCrest').src="images/icons8-ravenclaw-100.png";
    document.getElementById('welcomeMessage').textContent = "Welcome to Ravenclaw";
    document.getElementById('houseDescription').textContent = "You probably know that some of Ravenclaw’s most renowned members include Gilderoy Lockhart and Luna Lovegood. But did you know Ravenclaw’s Grey Lady is the least talkative Hogwarts house ghost, or that Ravenclaw’s common room boasts the most stunning views of the castle grounds?";
    document.getElementById('gryffindor').innerHTML = "Gryffindor: <br>" + gryffindorPercent + "%";
    document.getElementById('ravenclaw').innerHTML = "Ravenclaw: <br>" + ravenclawPercent + "%";
    document.getElementById('hufflepuff').innerHTML = "Hufflepuff: <br>" + hufflepuffPercent + "%";
    document.getElementById('slytherin').innerHTML = "Slytherin: <br>" + slytherinPercent + "%";
    document.getElementById('quoteContent').textContent = '"Or yet in wise old Ravenclaw, If you’ve a ready mind, Where those of wit and learning, Will always find their kind."';
    document.getElementById('quotePerson').textContent = "THE SORTING HAT";
    document.getElementById('quoteSource').textContent = "Harry Potter and the Philosopher's Stone";
    document.getElementById("modalScreen").style.backgroundImage = "linear-gradient(rgb(0, 73, 79), rgb(0, 0, 78))";
  } else if ((hufflepuff >= gryffindor) && (hufflepuff >= ravenclaw) && (hufflepuff >= slytherin)) {
    huffleSound.play();
    document.getElementById('threeTraits').textContent = "Dedication, Patience, Loyalty";
    document.getElementById('finalResult').innerHTML = "HUFFLEPUFF!";
    document.getElementById('houseCrest').src="images/icons8-hufflepuff-100.png";
    document.getElementById('welcomeMessage').textContent = "Welcome to Hufflepuff";
    document.getElementById('houseDescription').textContent = "You probably know that some of Hufflepuff’s most renowned members include Nymphadora Tonks and Cedric Diggory. But did you know that Hufflepuff’s house ghost, the Fat Friar, still resents the fact he was never made a cardinal? Or that Hufflepuff has produced the fewest Dark wizards of any house at Hogwarts?";
    document.getElementById('gryffindor').innerHTML = "Gryffindor: <br>" + gryffindorPercent + "%";
    document.getElementById('ravenclaw').innerHTML = "Ravenclaw: <br>" + ravenclawPercent + "%";
    document.getElementById('hufflepuff').innerHTML = "Hufflepuff: <br>" + hufflepuffPercent + "%";
    document.getElementById('slytherin').innerHTML = "Slytherin: <br>" + slytherinPercent + "%";
    document.getElementById('quoteContent').textContent = '"You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true And unafraid of toil"';
    document.getElementById('quotePerson').textContent = "THE SORTING HAT";
    document.getElementById('quoteSource').textContent = "Harry Potter and the Philosopher's Stone";
    document.getElementById("modalScreen").style.backgroundImage = "linear-gradient(rgb(101, 39, 0), goldenrod)";
  } else if ((slytherin >= gryffindor) && (slytherin >= ravenclaw) && (slytherin >= hufflepuff)) {
    slythSound.play();
    document.getElementById('threeTraits').textContent = "Pride, Ambition, Cunning";
    document.getElementById('finalResult').innerHTML = "SLYTHERIN!";
    document.getElementById('houseDescription').textContent = "You probably know that some of Slytherin’s most renowned members include Severus Snape and Bellatrix Lestrange. But did you know Merlin himself was a Slytherin, or that according to legend, the ribbon of a First Class Order of Merlin is green to reflect his Hogwarts house?";
    document.getElementById('houseCrest').src="images/icons8-slytherin-100.png";
    document.getElementById('welcomeMessage').textContent = "Welcome to Slytherin";
    document.getElementById('gryffindor').innerHTML = "Gryffindor: <br>" + gryffindorPercent + "%";
    document.getElementById('ravenclaw').innerHTML = "Ravenclaw: <br>" + ravenclawPercent + "%";
    document.getElementById('hufflepuff').innerHTML = "Hufflepuff: <br>" + hufflepuffPercent + "%";
    document.getElementById('slytherin').innerHTML = "Slytherin: <br>" + slytherinPercent + "%";
    document.getElementById('quoteContent').textContent = '"Or perhaps in Slytherin, You\'ll make your real friends, These cunning folks use any means To achieve their ends."';
    document.getElementById('quotePerson').textContent = "THE SORTING HAT";
    document.getElementById('quoteSource').textContent = "Harry Potter and the Philosopher's Stone";
    document.getElementById("modalScreen").style.backgroundImage = "linear-gradient(#002009, rgb(1, 59, 38))";
  }







};

