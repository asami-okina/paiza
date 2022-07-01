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
  lines.push(Number(line));
});
reader.on('close', () => {
  const suu = (number) => {
      return number * (number -1) / 2;
  }
  console.log(suu(lines));
});