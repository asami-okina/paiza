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
  function chose (n) {
      if (21 % n === 0) {
          return n;
      } else {
           return 21 % n;
      }
  }
  console.log(chose(Number(lines[0])));
});