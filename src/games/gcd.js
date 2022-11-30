import readlineSync from 'readline-sync';

const gcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i < 3) {
    let a = Math.abs(Math.floor(Math.random() * 101));
    let b = Math.abs(Math.floor(Math.random() * 101));
    console.log('Question: ' + a + ' ' + b);
    const quest2 = readlineSync.question('Your answer: ');
    let result = [];
    let result1 = [];
    let c = 1;
    let d = 1;
    while (c < a + 1) {
      if (a % c === 0) {
        result.push(c);
      }
      c += 1;
    }
    while (d < b + 1) {
      if (b % d === 0) {
        result1.push(d)
      }
      d += 1;
    }
    const matched = result.filter( el => result1.indexOf( el ) > -1 );
    let f = (matched[matched.length - 1]);
    
    if (Number(f) === Number(quest2)) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${quest2}', is wrong answer ;(. Correct answer was, '${f}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }     
  }
};

export default gcd;
