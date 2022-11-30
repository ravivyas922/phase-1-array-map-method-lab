const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function Proper(phrase) {
  phrase = phrase.split(' ');
  for (let i = 0; i < phrase.length; i++) {

    phrase[i] = phrase[i].charAt(0).toUpperCase() + phrase[i].slice(1); 
  
  }
  return phrase.join(' ');
}


const titleCased = () => tutorials.map(Proper);


