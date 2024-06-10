import figlet from "figlet";
import gradient from "gradient-string";

export default async function winnerMessage(win, player) {
    const ammount = win.split('').join(' ');
  const msg = `Congrats .  ${player}
         \n ${ammount} 0
    `;

  await figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
  process.exit(0);
}
