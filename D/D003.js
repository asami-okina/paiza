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
let num = Number(input_lines[0]);

function listOfMultiplication (num) {
    return (1 * num) + " " + (2 * num) + " " + (3 * num) + " "+ (4 * num) + " " + (5 * num) + " " + (6 * num) + " "+ (7 * num)+ " "+ (8 * num)+ " "+ (9 * num);
    }
  console.log(listOfMultiplication (num));
});