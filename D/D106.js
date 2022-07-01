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
    const amari = (a,b) => {
        return a % b;
    }
  console.log(amari(lines[0],lines[1]));
});