var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

console.log(chalk.blue('Sweet mother of blue!'));

var evens  = [ 2, 4, 6, 8 ];

console.log(evens);
console.log(evens[1]);

for(var j = 0; j < 10; j++){
  if(j % 2 === 0){
    console.log(chalk.red(j));
  }else{
    console.log(chalk.cyan(j));
  }
}

for(var i = 0; i < evens.length; i++){
  console.log('evens ->', chalk.red.bold(evens[i]));
}

var numbers = [];
var response = prompt('Enter a number or (q)uit: ');

while(response !== 'q'){
  response = parseInt(response);
  numbers.push(response);
  response = prompt('Enter a number or (q)uit: ');
}

console.log(numbers);

var sum = 0;
for(var k = 0; k < numbers.length; k++){
  sum += numbers[k];
}
console.log('the sum of numbers is:', sum);



