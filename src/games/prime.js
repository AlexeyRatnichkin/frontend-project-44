import randomNumber from '../utils.js';
import buildGame from '../index.js';

/* Цель игры */
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".ind the greatest common divisor of given numbers.';

/* Проверка на простое число. */
const isNumberPrime = (number) => {
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
const getQuestAndAnswer = () => {
  const question = randomNumber(1, 100);
  const correctAnswer = isNumberPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
}

export default () => {
  buildGame(description, getQuestAndAnswer);
};
