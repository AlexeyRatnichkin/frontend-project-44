import readlineSync from 'readline-sync';

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(/* Условие игры*/);
  let i = 0;
  while (i < 3) {
    /* Логика игры */ 

    if (/* Ответ правильный*/) {
      console.log('Correct!');
      i += 1;   
    } else { (/* Ответ неправильный */)
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${name}!`);
      break;
    }
  
    if (/* Если 3 раунда выполнены правильно */) {
      console.log(`Congratulations, ${name}!`);
    }   
  } 
} 

export default game; 
