process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  let numbers = lines[0].split(" ");
  let a = Number(numbers[0]);
  let b = Number(numbers[1]);
  
  function drinkingParty (num1, num2) {
      return (num1 * 6000) + (num2 * 4000);
  }
  console.log(drinkingParty(a, b));
});