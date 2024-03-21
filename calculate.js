#! usr/bin/env node;
import inquirer from "inquirer";
let result = await inquirer.prompt([
    {
        type: "number",
        name: "firstNumber",
        message: "Enter Your First Number:"
    },
    {
        type: "number",
        name: "secondNumber",
        message: "Enter Your Second Number:"
    },
    {
        type: "list",
        name: "operator",
        message: "Select the operation you need to perform:",
        choices: ["Select an operator", "Addition", "Subtraction", "Multiplication", "Division", "Modulus", "Exponent"]
    }
]);
let { firstNumber, secondNumber, operator } = result;
if (firstNumber && secondNumber && operator) {
    if (operator === "Addition") {
        console.log("Your answer is: " + (firstNumber + secondNumber));
    }
    else if (operator === "Subtraction") {
        console.log("Your answer is: " + (firstNumber - secondNumber));
    }
    else if (operator === "Multiplication") {
        console.log("Your answer is: " + (firstNumber * secondNumber));
    }
    else if (operator === "Division") {
        console.log("Your answer is: " + (firstNumber / secondNumber));
    }
    else if (operator === "Modulus") {
        console.log("Your answer is: " + (firstNumber % secondNumber));
    }
    else if (result.operator === "Exponent") {
        console.log("Your answer is: " + (firstNumber ** secondNumber));
    }
    else {
        console.log("Please give a number or select a valid operator");
    }
}
