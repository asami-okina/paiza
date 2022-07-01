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
  const suuzi = (number) => {
    if (number % 2 === 0 ) {
        return "even";
    } else { 
        return "odd";
    };
  }
console.log(suuzi(lines));
});