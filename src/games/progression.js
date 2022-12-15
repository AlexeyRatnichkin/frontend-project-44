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
const getQuestAndAnswer = () => {
  const step = randomNumber(1, 10);
  const firstNumProgression = randomNumber(1, 20);
  const hiddenNumIndex = randomNumber(0, 9);
  const progression = getProgression(firstNumProgression, step, progressionLength);
  const hiddenNum = progression[hiddenNumIndex];
  progression[hiddenNumIndex] = '..';
  const question = progression.join(' ');
  return [question, String(hiddenNum)];
};

export default () => {
  gameEngine(description, getQuestAndAnswer);
};
