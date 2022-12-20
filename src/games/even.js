import randomNumber from '../utils.js';
import buildGame from '../index.js';

/* Цель игры. */
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

/* Функция проверки на четность. */
const isEven = (number) => number % 2 === 0;

/* Создаем массив вопросов и ответов. */
const getQuestAndAnswer = () => {
  const question = randomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  buildGame(description, getQuestAndAnswer);
};
