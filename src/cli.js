import readlineSync from 'readline-sync';

const user = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  return (`Hello, ${name}`);
};

export default user;

