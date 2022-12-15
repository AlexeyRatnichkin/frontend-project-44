import randomNumber from '../utils.js';
import gameEngine from '../index.js';

/* Цель игры */
const description = 'Find the greatest common divisor of given numbers.';

/* Получение правильного ответа */
const getGcd = (num1, num2) => {
  let x = num1;
  let y = num2;
  if (x > y) {
    while (y !== 0) {
      const intNum = y;
      y = x % y;
      x = intNum;
    }
    return x;
  }
  if (y > x) {
    while (x !== 0) {
      const intNum = x;
      x = y % x;
      y = intNum;
    }
    return y;
  }
  return x;
};

/* Массив с вопросами и ответами. */
function getQuestAndAnswer() {
  const firstNumber = randomNumber(1, 50);
  const secondNumber = randomNumber(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = `${getGcd(firstNumber, secondNumber)}`;

  return [question, correctAnswer];
}

export default () => {
  gameEngine(description, getQuestAndAnswer);
};
