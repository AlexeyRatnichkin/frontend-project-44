import randomNumber from '../utils.js';
import gameEngine from '../index.js';

/* Цель игры. */
const description = 'What is the result of the expression?';

/* Получение верного ответа. */
const colculate = (operator, operandOne, operandTwo) => {
  let resultCalc = 0;
  switch (operator) {
    case '+':
      resultCalc = operandOne + operandTwo;
      break;
    case '-':
      resultCalc = operandOne - operandTwo;
      break;
    case '*':
      resultCalc = operandOne * operandTwo;
      break;
    default:
      break;
  }
  return resultCalc;
};

/* Массив с возможными операциями. */
const operators = ['+', '-', '*'];

/* Массив с вопросами и ответами. */
const getQuestAndAnswer = () => {
  const randNumber1 = randomNumber(0, 10);
  const randNumber2 = randomNumber(0, 10);
  const randOperator = operators[randomNumber(0, operators.length - 1)];
  const question = `${randNumber1} ${randOperator} ${randNumber2}`;
  const resultCalc = colculate(randOperator, randNumber1, randNumber2);
  return [question, String(resultCalc)];
};

export default () => {
  gameEngine(description, getQuestAndAnswer);
};
