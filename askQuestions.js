import { createSpinner } from "nanospinner";
import questions from "./Questions.js";
import wins from "./Wins.js";
import inquirer from "inquirer";
import winnerMessage from "./winnerMessage.js";

let guaranteedWin;
const SLEEP_DURATION_MS = 2000;

const sleep = (ms = SLEEP_DURATION_MS) =>
  new Promise((resolve) => setTimeout(resolve, ms));

function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const question = questions[randomIndex];
  //  Remove the question from the array so it doesn't get asked again
  questions.splice(randomIndex, 1);
  return question;
}

async function askQuestion(question) {
  const { answer } = await inquirer.prompt({
    type: "list",
    name: "answer",
    message: question.question,
    choices: question.options
  });

  return answer === question.correctAnswer;
}

async function takeTheMoney(win) {
  const { takeTheMoney } = await inquirer.prompt({
    type: "confirm",
    name: "takeTheMoney",
    message: `Do you want to take ${win} ?`
  });
  return takeTheMoney;
}

async function askQuestions(player) {
  for (let i = 0; i < 15; i++) {
    const win = wins[i]
    const guaranteed = i === 4 || i === 10 || i === 14;
    const question = getRandomQuestion();
    const correct = await askQuestion(question);
    const spinner = createSpinner("Checking your answer...").start();
    await sleep();
    if (correct) {
      const text = `Nice work!, ${player}, You got the right answer.
        \nYou now have ${win}.
        ${guaranteed ? `This is a guaranteed win.` : ``}
        `;
      if (guaranteed) guaranteedWin = win;
      spinner.success({
        text
      });
      const tookMoney = await takeTheMoney(win);
      if (tookMoney) await winnerMessage(win, player)
    } else {
      if (guaranteedWin) {
        await winnerMessage(guaranteedWin, player);
      } else {
        spinner.error({ text: `\n💀💀💀Game Over!!!, ${player}, You lose.` });
        process.exit(1);
      }
    }
  }
}

export default askQuestions;
