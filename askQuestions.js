import { createSpinner } from "nanospinner";
import questions from "./Questions.js";
import wins from "./Wins.js";
import inquirer from "inquirer";

let guaranteed;
let guaranteedWin;

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

async function askQuestions(player) {
  for (let i = 0; i < 15; i++) {
    const question = getRandomQuestion();
    const correct = await askQuestion(question);
    const spinner = createSpinner("Checking your answer...").start();
    if (correct) {
      const text = `Nice work!, ${player}, You got the right answer.
        You now have ${wins[i]}.
        ${guaranteed && `This is a guaranteed win.`}
        `;
      spinner.success({
        text
      });
      if (i === )
    } else {
      spinner.error({ text: `\n💀💀💀Game Over!!!, ${player}, You lose.` });
      process.exit(1);
    }
  }
}

export default askQuestions;
