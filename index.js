var readlineSync = require("readline-sync");
var chalk = require("chalk");

//Welcome Message
var userName = readlineSync.question(chalk.blue("Hi! What's your name: "));
console.log(chalk.bgCyan.bold("Welcome " + userName + "!"));
console.log("Let's see if you know these movies.");
console.log("-----------------------------------");

//Variables
var score = 0;
var questions = [
  {
    question: "Who directed the movie The Prestige? ",
    answer: "Christopher Nolan"
  },
  {
    question: "Which Spider-Man actor played the lead role in Hacksaw Ridge? ",
    answer: "Andrew Garfield"
  },
  {
    question: "Which movie is the villainous character Hans Landa from? ",
    answer: "Inglourious Basterds"
  },
  {
    question: "What is the fifth movie in the Mission Impossible franchise called? ",
    answer: "Rogue Nation"
  },
  {
    question: "Who is known as the main idea head behind the MCU? ",
    answer: "Kevin Feige"
  },
  {
    question: "What is the Michael Keaton starring movie based on the founding of McDonald's called? ",
    answer: "The Founder"
  },
  {
    question: "What is the movie continuation of Breaking Bad called? ",
    answer: "El Camino"
  },
  {
    question: "Which Korean movie had won the Best Picture Oscar in 2020? ",
    answer: "Parasite"
  },
  {
    question: "Which 2022 movie used the new technology of StageCraft instead of green screen making some gorgeous shots? ",
    answer: "The Batman"
  },
  {
    question: "Who played the primary antagonist in the coolest spy thriller movie Kingsman The Secret Service? ",
    answer: "Samuel L. Jackson"
  },
];

//Options
var answerOptions = [
  ["Steven Spielberg", "Christopher Nolan", "Quentin Tarantino", "Joe Russo"],
  ["Andrew Garfield", "Tobey Maguire", "Nicholas Hammond", "Tom Holland"],
  ["Star Wars", "Django Unchained", "Star Trek", "Inglourious Basterds"],
  ["Ghost Protocol", "Rogue Nation", "Fallout", "Dead Reckoning"],
  ["Kevin Feige", "Bob Iger", "James Gunn", "Russo Brothers"],
  ["McDonald", "The Founder", "Ronald", "Fast Food Giant"],
  ["Better Call Saul", "Minerals", "El Camino", "Ozymandius"],
  ["Memories of Murder", "Infernal Affairs", "Parasite", "Lady Bird"],
  ["The Batman", "Inside", "Werewolf by Night", "Everything, Everywhere, All At Once"],
  ["Samuel L. Jackson", "Mark Hamill", "Julianne Moore", "Ralph Fiennes"]
]

//High Scores
var scoreList = [
  {
    name: "Naseef",
    score: 9
  },
  {
    name: "Prayag",
    score: 8
  },
  {
    name: "Jay",
    score: 8
  }
]

//Function to play the game
function ask(question, answer){
  var currentOptions = answerOptions[i];
  var userAnswer = readlineSync.keyInSelect(currentOptions,question);
  console.log(" ");
  if(currentOptions[userAnswer] == answer){
    console.log(chalk.bgGreen.bold("That's correct!"));
    score++;
  }
  else{
    console.log(chalk.bgRed.bold("Wrong. Sorry."));
  }
  console.log("Current Score: ", score);
  console.log("----------------------");
}

//For loop to go through all questions
for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  ask(currentQuestion.question,currentQuestion.answer);
}

//Score Results
console.log("Final score: "+ score);
if(score>3){
  console.log("I see you're a man of culture.");
}
else{
  console.log("So uh.. want me to show you some movies?");
}
console.log(" ");
highScore(score);

//Function to check if High Score
function highScore(score){
  for(var i=0; i<scoreList.length; i++){
    if(score>=scoreList[i].score){
      return console.log(chalk.bgGreen.bold("Congratulations! You've got a high score!"), chalk.blue("Send me a screenshot and I'll add you to the list."));
    }    
  }
}