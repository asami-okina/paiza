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
  const zettai = (number) => {
      if (number < 0) {
          return number * -1;
      } else  {
          return number * 1;
      };
  };
console.log(zettai(lines));
});