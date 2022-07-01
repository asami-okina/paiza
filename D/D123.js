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
  function charge (n) {
      if (n <= 10000) {
          return n + 10000;
      } else {
          return n;
      }
  }
  console.log(charge(Number(lines[0])));
});