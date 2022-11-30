import readlineSync from 'readline-sync';

const progression = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('What number is missing in the progression?');
  let i = 0;  
  while (i < 3) {
    let a = Math.abs(Math.floor(Math.random() * 101));
    let b = Math.abs(Math.floor(Math.random(1) * 9) + 1);
    let result = [];
    let result1 = [];
    let c = 0;
    let d = 0;
    let f = a;
    while (c < 10) {
      d = f;
      result.push(d);
      f = d + b
      c += 1;
    }
    
    let h = result[b];
    result1 = result;
    result1[b] = '..';
    result1 = result1.join(' ');
    console.log('Question: ' + result1);
    const quest2 = readlineSync.question('Your answer: ');
    
    if (Number(h) === Number(quest2)) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${quest2}', is wrong answer ;(. Correct answer was, '${h}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    } 
  }
}  

export default progression;
