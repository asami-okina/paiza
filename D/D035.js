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
  let strings = lines[0]. split(" ");
  let y = strings[0];
  let m = strings[1];
  let d = strings[2];
  
  function date (y, m, d) {
      return y + "/" + m + "/" + d;
  }
  console.log(date(y, m, d));
});