import randomNumber from '../utils.js';
import buildGame from '../index.js';

/* Задача игры. */
const description = 'What number is missing in the progression?';
const progressionLength = 10;

/* Создание массива с прогрессией. */
const getProgression = (firstNumber, step) => {
  const progression = [firstNumber];
  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(firstNumber + (i * step));
  }
  return progression;
}

/* Получаем ответы и вопросы. */
const getQuestAndAnswer = () => {
  const startNum = randomNumber(0, 100);
  const step = randomNumber(2, 9);
  const progression = getProgression(startNum, step);
  const randomIndex = randomNumber(0, progressionLength - 1);
  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
}

export default () => {
  buildGame(description, getQuestAndAnswer);
};
