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
  function length (S_1, S_2) {
      if (S_1.length === S_2.length) {
          return "Yes";
      } else {
          return "No";
      }
  }
  console.log(length(lines[0], lines[1]));
});