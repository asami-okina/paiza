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
  const sannkaku = (a,b) => {
      return 180 - ( a + b);
  }
  console.log(sannkaku(lines[0],lines[1]));
});