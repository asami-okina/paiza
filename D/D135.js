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
  const sannkaku = (number) => {
  return number/180+2;
};
  const result = sannkaku(Number(line));
  console.log(result);
});
