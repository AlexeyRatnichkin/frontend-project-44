import randomNumber from '../utils.js';
import buildGame from '../index.js';

/* Цель игры */
const description = 'Find the greatest common divisor of given numbers.';

/* Получение правильного ответа */
const getGcd = (num1, num2) => {
  let x = num1;
  let y = num2;
  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }

  return x + y;
};

/* Массив с вопросами и ответами. */
const getQuestAndAnswer = () => {
  const firstNumber = randomNumber(1, 50);
  const secondNumber = randomNumber(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGcd(firstNumber, secondNumber);

  return [question, String(correctAnswer)];
}

export default () => {
  buildGame(description, getQuestAndAnswer);
};
