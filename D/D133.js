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
let x = Number(input_lines[0]);
let a = Number(input_lines[1]);
let b = Number(input_lines[2]);

function shareProfit (x, a, b) {
    let stockPrice = x / a;
    return Math.floor((stockPrice * b) - (stockPrice * a));
}
  console.log(shareProfit (x, a, b));
});