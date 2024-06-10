#!/usr/bin/env node

import chalk from "chalk";
import gradient from "gradient-string";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

import askQuestions from "./askQuestions.js";

const SLEEP_DURATION_MS = 2000;
let player;

const sleep = (ms = SLEEP_DURATION_MS) =>
  new Promise((resolve) => setTimeout(resolve, ms));

function createRainbowTitle() {
  return chalkAnimation.rainbow(`Who wants to be a millionaire? \n`);
}

function printInstructions() {
  console.log(`
    ${chalk.bgBlue(" HOW TO PLAY ")}
    I am a process on your computer that will ask you a series of 15 questions.
    If you answer all the questions correctly, you will become a millionaire.
    If you answer any question incorrectly, I will be ${chalk.bgRed(
      " killed "
    )}.`);
}

async function welcome() {
  const rainbowTitle = createRainbowTitle();
  await sleep();
  rainbowTitle.stop();
  printInstructions();
}

async function winner() {
  console.clear();
  const msg = `Congrats .  ${player}
         \n $ 1 , 0 0 0 , 0 0 0
    `;

  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
}

async function askName() {
  const { player_name } = await inquirer.prompt({
    type: "input",
    name: "player_name",
    message: "What is your name?",
    default() {
      return "Player";
    }
  });
  player = player_name;
  console.log(`\nHello ${player}! Let's get started.\n`);
}

async function handleAnswer(answer, correctAnswer) {
  const spinner = createSpinner("Checking your answer...").start();
  await sleep();
  if (answer === correctAnswer) {
    spinner.success({
      text: `Nice work!, ${player}, You got the right answer.`
    });
  } else {
    spinner.error({ text: `💀💀💀Game Over!!!, ${player_name}, You lose.` });
    process.exit(1);
  }
}

// async function question1() {
//   const { question_1 } = await inquirer.prompt({
//     type: "list",
//     name: "question_1",
//     message: "JavaScript is a ___ -side programming language.",
//     choices: ["Client", "Server", "Both", "None"]
//   });

//   return handleAnswer(question_1, "Both");
// }

await welcome();
await askName();
// await question1();
askQuestions(player);
