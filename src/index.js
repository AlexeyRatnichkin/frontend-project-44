#!/usr/bin/env node

import readlineSync from 'readline-sync';

/* Необходимое количество раундов */
export const countRounds = 3;

export default (nameOfGame, getQuestAndAnswer) => {
  console.log('Welcome, to the   Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(nameOfGame);

  /* Логика всей игры. */
  /* Счетчик верных ответов. */
  let i = 0;
  while (i < countRounds) {
    const [question, correctAnswer] = getQuestAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
