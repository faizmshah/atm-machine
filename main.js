#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPinCode = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter ur pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPinCode) {
    console.log("Correct Pin Code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter you amount",
                type: "number"
            }
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`your current balance is: ${myBalance}`);
        }
        else {
            console.log("You don't have much enogh amount");
        }
    }
    else {
        console.log(`your balance is: ${myBalance}`);
    }
}
else {
    console.log("your pin code is incorrect");
}
