#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";

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




await welcome();
await askName();
askQuestions(player);
