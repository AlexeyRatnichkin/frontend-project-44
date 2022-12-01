import readlineSync from 'readline-sync';

const prime = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    let a = Math.abs(Math.floor(Math.random() * 101));
    let j = 1;
    let result = [];
    console.log('Question: ' + a);
    const quest2 = readlineSync.question('Your answer: ');
    while (j < a + 1) {
      if (Number.isInteger(a / j) === true) {
        result.push(j);
      }
      j += 1;
    } 

    if (result.length === 2 && quest2 === 'yes') {
      console.log('Correct!');
      i += 1;   
    } else if (result.length > 2 && quest2 === 'no') {
      console.log('Correct!');
      i += 1;
    } else {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${name}!`);
      break;
    }
  
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }   
  } 
} 

export default prime; 
