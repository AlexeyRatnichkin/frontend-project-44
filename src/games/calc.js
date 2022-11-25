import readlineSync from 'readline-sync';

const calc = () => {
  console.log('What is the result of the expression?');  
  const znak = ['+', '-', '*'];
  const random = znak[Math.floor(Math.random() * znak.length)];
  let a = Math.floor(Math.random() * 101);
  let b = Math.floor(Math.random() * 101);
  let i = 0;
  let c = 0;  
  while (i < 3) {
  
    const quest1 = readlineSync.question('Question: ' + a + '' + random + '' + b);
    const quest2 = readlineSync.question('Your answer: ');
  
    if (random === '+') {
      c = a + b;
    } else if (random === '-') {
      c = a - b;
    } else {
      c = a * b;
    }

    if (Number(c) === Number(quest2)) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(quest2, 'is wrong answer ;(. Correct answer was', c, ".");
      console.log(`Let's try again, ${name}`);
      break;
    }
  
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    };  
  }
}

export default calc;
