// Deposit money into account
// Determine number of lines to bet on
// Make a bet amount
// spin the machine
// Check if user won
// Give user the winnings
// Play again?

// ===================================User Deposit================================
const prompt = require("prompt-sync")(); // take user input

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter the deposit amount: ");
    // Convert to interger
        const numberDepositAmount = parseFloat(depositAmount);
    //check if is a valid number
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid input, Please try Again!");
        } else {
            return numberDepositAmount;
        }
    }
};

//=============Determine number of lines user wants to bet on============================
const getNumberOfLines = () => {
    while (True) {
        const lines = prompt("Enter number of line to bet on (1-3)");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console("Invalid Amount! Please try again.");
        }  else {
            return numberOfLines;
        }
    }

}
const depositAmount = deposit();
const numberOfLines = getNumberOfLines();