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
     let numbers = lines[0].split(" "); //["a", "b", "c"] 
    let a =Number(numbers[0]);
    let b =Number(numbers[1]);

 function division (a, b) {
     let result = [];
     result.push(Math.floor(a / b));
     result.push(a % b);
     return result[0] + " " + result[1];
 }
 console.log(division(a, b));
});