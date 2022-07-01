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
function sum (n) {
    if(n < 10) {
        return 1000;
    } else {
        return n* 150;
    }
}
console.log(sum(lines[0]));
});