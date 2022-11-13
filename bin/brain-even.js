import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');   
let i = 0;
while (i < 3) {
  const quest = readlineSync.question('Question: ');
  const questt = readlineSync.question('Your answer: ');
  if (quest % 2 === 0 && questt === 'yes') {
      console.log('Correct!');
      i += 1;
    } else if (quest % 2 !== 0 && questt === 'no') {
      console.log('Correct!');
      i += 1;  
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log("Let's try again, Bill!");
  };
};
console.log(`Congratulations, ${name}`);
