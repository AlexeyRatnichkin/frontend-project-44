import getRandomNumber from '../utils.js';
import gameEngine from '../index.js';

/* Цель игры. */
const description = 'What is the result of the expression?';

/* Массив с возможными операциями. */
const operations = ['+', '-', '*'];

/* Получение случайной операции. */
function getRandomOperation(arrayWithOperations) {
  const rand = Math.floor(Math.random() * arrayWithOperations.length);
  return operations[rand];
}

/* Получение верного ответа. */
function calculate(firstNumber, secondNumber, operation) {
  switch (operation) {
    case '+':
      return (firstNumber + secondNumber).toString();
    case '-':
      return (firstNumber - secondNumber).toString();
    default:
      return (firstNumber * secondNumber).toString();
  }
}

/* Массив с вопросами и ответами. */
function getQuestAndAnswer() {
  let firstNumber = 0;
  let secondNumber = 0;
  let operation = '';
  firstNumber = getRandomNumber(0, 10);
  secondNumber = getRandomNumber(0, 10);
  operation = getRandomOperation(operations);
  const question = `${firstNumber} ${operation} ${secondNumber} = ?`;
  const correctAnswer = calculate(firstNumber, secondNumber, operation);

  return [question, correctAnswer];
}

export default () => {
  gameEngine(description, getQuestAndAnswer);
};
