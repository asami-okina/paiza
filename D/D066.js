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
    let numbers = lines[0].split(" ");//1行は全てlines[0]のため、値を半角区切りにする
    let a = Number(numbers[0]);
    let b = Number(numbers[1]);

    function staminaCalculation (a, b) {
        if(b > a){
            return b-a;
        } else if(b === b) {
            return 0;
        } else {
            return "No";
        }
     }
     console.log(staminaCalculation (a, b));
});