import readlineSync from 'readline-sync';

const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"')
  let i = 0;
  while (i < 3) {
    const quest = readlineSync.question('Question: ');
    const questt = readlineSync.question('Your answer: ');
    if (quest % 2 === 0 && questt === 'yes') {
        console.log('Correct!');
        i += 1;
      } else if (quest % 2 !== 0 && questt === 'no') {
        console.log('Correct!');
        i += 1;  
      } else {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log("Let's try again, Bill!");
        break;
    };
    if (i === 3) {
    console.log(`Congratulations, ${name}!`);
    };  
  };
}

export default even;
