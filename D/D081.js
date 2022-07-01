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
    let numbers = lines[1].split(" ");//1行は全てlines[0]のため、値を半角区切りにする
    let a = Number(numbers[0]);
    let b = Number(numbers[1]);

    function separete (num,a,b) {
        return (a * b) % num;
    }
    console.log(separete(lines[0],a,b));
});