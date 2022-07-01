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
    let num1 = Number(lines[0]);
    let num2 = Number(lines[1]);


    function getHayFever (num1, num2) {
        return Math.floor(num2 / num1) + (1);
    }
    console.log(getHayFever (num1, num2));
});