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
  function cut (a, b) {
    let result = "";
    result = b.slice(0, a);
    return result;
  }
  console.log(cut(lines[0], lines[1]));
});
