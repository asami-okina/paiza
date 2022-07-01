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
　const str1 = lines[0];
　const str2 = lines[1];
　
  function isMozi (s, c) {
      return c.concat(s, c)
  }
  console.log(isMozi(str1, str2));
});