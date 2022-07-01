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
reader.on('close', (ado,ress) => {
  const addres = (s,t) => {
      console.log(lines[0] + "@" + lines[1]);
  }
  addres(lines[0],lines[1]);
});