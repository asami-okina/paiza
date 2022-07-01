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

let number = Number(lines[0])
let strings = [];
for(let i = 1; i <= number; i++){
    strings.push(lines[i])
}

console.log(strings.join(""))

});