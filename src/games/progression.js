import randomNumber from '../utils.js';
import gameEngine from '../index.js';

/* Задача игры. */
const description = 'What number is missing in the progression?';
const progressionLength = 10;

/* Создание массива с прогрессией. */
const getProgression = (firstNum, progressionStep, length) => {
  const progression = [];
  let nextNum = firstNum;
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(nextNum);
    nextNum += progressionStep;
  }
  return progression;
};

/* Получаем ответы и вопросы. */
function getQuestAndAnswer() {
  const startNum = randomNumber(0, 50);
  const step = randomNumber(2, 9);
  const progression = getProgression(startNum, step);
  const randomIndex = randomNumber(1, 10);

  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
}

export default () => {
  gameEngine(description, getQuestAndAnswer);
};
