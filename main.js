#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red("\t\t\t\t\t<======="), chalk.bgWhite.red.italic.bold("CODE WITH MUHAMMAD FASIH"), chalk.red("=======>"));
console.log(chalk.green("\t\t         <---------------"), chalk.blue.italic.bold("A NAME GUESSING GAME USING TYPESCRIPT"), chalk.green("--------------->\n"));
let firstNumber = [];
let secondNumber = [];
let firstNames = [];
let secondNames = [];
let finalName = [];
let sample1 = "AEIMQUY";
let sample2 = "BFJNRVZ";
let sample3 = "CGKOSW";
let sample4 = "DHLPTX";
const letterQuantity = await inquirer.prompt([{
        name: "number",
        type: "input",
        message: chalk.red.underline.italic("Let me know how many letters are in your name, please...")
    }]);
console.log(chalk.green.bold(`
      1   2   3   4`), chalk.yellow.italic.bold(`
                 
    | A | B | C | D |
    | E | F | G | H |
    | I | J | K | L |
    | M | N | O | P |
    | Q | R | S | T |
    | U | V | W | X |
    | Y | Z |   |   |`));
console.log("\n");
for (let i = 1; i <= letterQuantity.number; i++) {
    let ordinal = `${i}`;
    switch (ordinal) {
        case "1" || "21" || "31":
            ordinal = chalk.red(`${i}st`);
            break;
        case "2" || "22" || "32":
            ordinal = chalk.red(`${i}nd`);
            break;
        case "3" || "23" || "33":
            ordinal = chalk.red(`${i}rd`);
            break;
        default:
            ordinal = chalk.red(`${i}th`);
            break;
    }
    const firstTurn = await inquirer.prompt([
        {
            name: "letter",
            type: "number",
            message: chalk.blue.underline.italic(`Enter the column number of the ${ordinal} letter of your name..`),
            validate: (num) => {
                if (num <= 4) {
                    return true;
                }
                else {
                    return chalk.green.bold.italic(`You have selected an invalid number`);
                }
            }
        }
    ]);
    firstNumber.push(firstTurn.letter);
}
const first = chalk.yellow.italic.bold("     | A | E | I | M | Q | U | Y |");
const second = chalk.yellow.italic.bold("     | B | F | J | N | R | V | Z |");
const third = chalk.yellow.italic.bold("     | C | G | K | O | S | W |   |");
const fourth = chalk.yellow.italic.bold("     | D | H | L | P | T | X |   |");
firstNumber.forEach((val) => {
    switch (val) {
        case 1:
            firstNames.push(first);
            secondNames.push(sample1);
            break;
        case 2:
            firstNames.push(second);
            secondNames.push(sample2);
            break;
        case 3:
            firstNames.push(third);
            secondNames.push(sample3);
            break;
        case 4:
            firstNames.push(fourth);
            secondNames.push(sample4);
            break;
        default: return null;
    }
});
console.log(chalk.bgCyan.blue("\nCOULD YOU REPEAT THAT FOR THE SAME NAME...?\n"));
console.log(chalk.green.bold(`       1   2   3   4   5   6   7
              `));
firstNames.forEach((letters) => { console.log(letters); });
console.log("\n");
for (let i = 1; i <= letterQuantity.number; i++) {
    let ordinal = `${i}`;
    switch (ordinal) {
        case "1" || "21" || "31":
            ordinal = chalk.red(`${i}st`);
            break;
        case "2" || "22" || "32":
            ordinal = chalk.red(`${i}nd`);
            break;
        case "3" || "23" || "33":
            ordinal = chalk.red(`${i}rd`);
            break;
        default:
            ordinal = chalk.red(`${i}th`);
            break;
    }
    const secondTurn = await inquirer.prompt([
        {
            name: "letter",
            type: "input",
            message: chalk.blue.underline.italic(`Enter the column number of the ${ordinal} letter of your name..`),
            validate: (val) => {
                if (val <= 7) {
                    return true;
                }
                else {
                    return chalk.green.bold.italic(`You have selected an invalid number`);
                }
            }
        },
    ]);
    secondNumber.push(secondTurn.letter);
}
for (let i = 0; i < secondNumber.length; i++) {
    finalName.push(secondNames[i].slice(secondNumber[i] - 1, secondNumber[i]));
}
let Name = chalk.red.italic.bold(finalName.join(""));
console.log(chalk.yellow.bold(`\n\t\tTHE NAME YOU THOUGHT OF: ${Name}`));
