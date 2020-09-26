//const values will not be changed

const dickSize = 100;
const chad = 10 * dickSize;
const firstname = 'Abi';
const lastname = 'Karunaratne';

//Concatonating Strings
const sentence = 'Hello,' + firstname + " " + lastname + " Welcome! ";

//To use template strings use backticks
const sentenceTemplate = `Hello, ${firstname} ${lastname} Welcome!`;
console.log(chad);

//Booleans
const randomBool = true;
const anotherBool = false;

console.log(randomBool);
console.log(anotherBool);

// Control Flow (if)

const temp = 86;

if (temp >= 80) {
    console.log(temp);
} else {
    console.log(temp);
}

// let = local variable
// var = global variable

//Functions

function greet(name, age) {
    return `greetings ${name} your age is ${age}`
  }
  console.log(greet('abi', '21'));

  //objects
  //objects can have functions and other objects nested inside them

  const student = {
      id: 100,
      studentName: 'abi',
  };

  console.log(student);
  console.log(student.id);

  //Arrays

  const numbers = [
      '1',
      '2',
      '3',
  ]

  console.log(numbers);
  console.log(numbers[1]);
  console.log(numbers.length);
  console.log(numbers.join('|')); // joins the array to a single string

  const student = [{
    id: 100,
    studentName: 'abi',
}];

  student.push ({ id: '400', name: 'habibi' });
  student[2] = {id: '200', name: 'hUwu'};

  //DOM

  const redSquere = document.querySelector('.CSSCLASS');
  redSquere.style.backgroundColor = 'green';

  //Event Listeners
