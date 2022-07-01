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
    let strings = lines[0].split(" ");//1行は全てlines[0]のため、値を半角区切りにする
    let a = strings[0];
    let b = strings[1];

    function makeHi (a, b) {
        if(b === "M") {
            return `Hi, Mr. ${a}`;
        } else {
            return `Hi, Ms. ${a}`;
        }
    }
    console.log(makeHi (a, b));
});