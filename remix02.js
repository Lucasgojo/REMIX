var answer = Math.floor(Math.random() * 100) + 1;
 var guess;
 var guesses = 0;
var maxGuesses = 5;

//A declaração while cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira.
// A condição é avaliada antes da execução da rotina.
while (guesses < maxGuesses) {
     //prompt serve para 
     guess = parseInt(prompt ("Guess a number between 1 and 100:"));
     guesses++;
if (guess == answer) {
     alert("You got it in " + guesses + "guesses!");
     break;
}

else if (guess < answer) { alert("Too low!");
}
else  {
 alert("Too high!");
 }
}
if (guesses == maxGuesses) {
alert("You didn't get it! The answer was " + answer);
}