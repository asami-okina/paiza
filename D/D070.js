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
  let m = Number(numbers[0]);
  let n = Number(numbers[1]);
  
  function page (m, n) {
      return m - n;
  }
  console.log(page(m, n));
});