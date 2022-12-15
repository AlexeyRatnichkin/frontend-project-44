import randomNumber from '../utils.js';
import gameEngine from '../index.js';

/* Цель игры */
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".ind the greatest common divisor of given numbers.';

/* Проверка на простое число. */
function isTheNumberPrime(number) {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

/* Получаем массив вопросов и ответов. */
function getQuestAndAnswer() {
  const question = randomNumber(1, 100);
  const correctAnswer = isTheNumberPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
}

export default () => {
  gameEngine(description, getQuestAndAnswer);
};
