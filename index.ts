#! /usr/bin/env node
import inquirer from "inquirer"
//1)computer wil generate a random number
// 2)user input ffor guessing number
// 3) compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);

console.log("Welcome to number guessing game")
const answers = await inquirer.prompt([
{
     name: "userGuessedNumber",
     type: "number",
     message: "please guess a number between 1-10: ",

},
]);

if(answers.userGuessedNumber === randomNumber){
     console.log("CONGRATS! you guessed the right number")

}else {
    console.log("The number you guessed is wrong, please try again")
}