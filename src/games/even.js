import readlineSync from 'readline-sync';

const even = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no" ')
  let i = 0;
  while (i < 3) {
    let a = Math.abs(Math.floor(Math.random() * 101))
    console.log('Question: ' + a);
    const questt = readlineSync.question('Your answer: ');
    if (Number(a) % 2 === 0 && questt === 'yes') {
        console.log('Correct!');
        i += 1;
      } else if (Number(a) % 2 !== 0 && questt === 'no') {
        console.log('Correct!');
        i += 1;  
      } else {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log(`Let's try again, ${name}!`);
        break;
    };
    if (i === 3) {
    console.log(`Congratulations, ${name}!`);
    };  
  };
}

export default even;
