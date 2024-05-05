#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; // Dollar
const myPinCode = 1234;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter ur pin",
    type: "number",
  },
]);

if (pinAnswer.pin === myPinCode) {
  console.log("Correct Pin Code");

  let atmaAswers = await inquirer.prompt([
    {
      name: "accountType",
      message: "Please select option",
      type: "list",
      choices: ["Current Account", "Savings Account"],
    },
    {
      name: "transMethod",
      message: "Select your transaction method",
      type: "list",
      choices: ["Cash Withdrawal", "Fast Cash"],
    },
  ]);

  if (atmaAswers.transMethod == "Cash Withdrawal") {
    let cashAmount = await inquirer.prompt([
      {
        name: "withdrawal",
        message: "Enter the amount you want to withdraw",
        type: "number",
      },
    ]);
    if (cashAmount.withdrawal <= myBalance) {
      myBalance -= cashAmount.withdrawal;
      console.log(`your current balance is: ${myBalance}`);
    } else {
      console.log("Insufficient Balance");
    }
  } else {
    let fastCash = await inquirer.prompt([
      {
        name: "options",
        message: "",
        type: "list",
        choices: [1000, 3000, 5000],
      },
    ]);
    if (fastCash.options <= myBalance) {
        myBalance -= fastCash.options;
        console.log(`your current balance is: ${myBalance}`);
      } else {
        console.log("Insufficient Balance");
      }
  }
} else {
  console.log("your pin code is incorrect");
}