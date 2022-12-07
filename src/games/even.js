import getRandomNumber from '../utils.js';
import gameEngine from '../index.js';

/* Цель игры.*/
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

/* Функция проверки на четность.*/
function isEven(number) {
  return number % 2 === 0;
}

/* Создаем массив вопросов и ответов.*/
function getQuestAndAnswer() {
  const question = getRandomNumber(0, 1000);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
}

export default () => {
  gameEngine(description, getQuestAndAnswer);
};
