import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the words!"
    }]);
let words = answer.sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence word count is ${words.length}`);
