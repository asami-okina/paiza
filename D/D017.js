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
    let num1 = Number(lines[0])
    let num2 = Number(lines[1])
    let num3 = Number(lines[2])
    let num4 = Number(lines[3])
    let num5 = Number(lines[4])

    function maximumAndMinimum (num1,num2,num3,num4,num5) {
        console.log(Math.max(num1,num2,num3,num4,num5));
        return console.log(Math.min(num1,num2,num3,num4,num5));
    }
    maximumAndMinimum (num1,num2,num3,num4,num5)
});