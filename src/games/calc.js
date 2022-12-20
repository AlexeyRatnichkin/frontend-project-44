import randomNumber from '../utils.js';
import buildGame from '../index.js';

/* Цель игры. */
const description = 'What is the result of the expression?';

/* Получение верного ответа. */
const calculator = (operator, operandOne, operandTwo) => {
  switch (operator) {
    case '+':
      return operandOne + operandTwo;
    case '-':
      return operandOne - operandTwo;
    case '*':
      return operandOne * operandTwo;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
};

/* Массив с возможными операциями. */
const operators = ['+', '-', '*'];

/* Массив с вопросами и ответами. */
const getQuestAndAnswer = () => {
  const randNumber1 = randomNumber(0, 10);
  const randNumber2 = randomNumber(0, 10);
  const randOperator = operators[randomNumber(0, operators.length - 1)];
  const question = `${randNumber1} ${randOperator} ${randNumber2}`;
  const resultCalc = calculator(randOperator, randNumber1, randNumber2);
  return [question, String(resultCalc)];
};

export default () => {
  buildGame(description, getQuestAndAnswer);
};
