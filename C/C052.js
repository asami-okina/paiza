process.stdin.resume();
process.stdin.setEncoding('utf8');

var input_lines = []; // 標準入力から与えられた各行を保存する変数：input_lines
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  input_lines.push(line);
});
reader.on('close', () => {
let numbers = input_lines[0].split(" ");
let a = Math.abs(Number(numbers[0]));
let b = Math.abs(Number(numbers[1]));

let anotherNumbers = input_lines[1].split(" ");
let c = Math.abs(Number(anotherNumbers[0]));
let d = Math.abs(Number(anotherNumbers[1]));

console.log((a*d)+(b*c)-(c*d));
});