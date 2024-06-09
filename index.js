#!/usr/bin/env node

import chalk from "chalk";
import gradient from "gradient-string";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let player;

const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    "Who wants to be a JavaScript millionaire? \n"
  );
  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.bgBlue("HOW TO PLAY")}
    I am a process on your computer that will ask you a series of questions.
    If you answer all the questions correctly, you will become a JavaScript millionaire.
    If you answer any question incorrectly, I will be ${chalk.bgRed("killed")}.
    So, get all the questions right.
    Let's get started.
  `)
}

async function askName() {
  const { player_name } = await inquirer.prompt({
    type: "input",
    name: "player_name",
    message: "What is your name?",
    default(){
        return "Player";
    }
  });

  console.log(`\nHello ${player_name}! Let's get started.\n`);
}

async function question1(){
    const { answer } = await inquirer.prompt({
        type: "input",
        name: "answer",
        message: "What is the output of 2 + 2?",
    });
}

await welcome();
await askName();