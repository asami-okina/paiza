process.stdin.resume();
process.stdin.setEncoding('utf8');

var input_lines = []; // 標準入力から与えられた各行を保存する変数：input_lines
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  input_lines.push(line);
});
reader.on('close', () => {
    let numbers = input_lines[0].split(" ");//1行は全てlines[0]のため、値を半角区切りにする
    let a = Number(numbers[0]/100 + 1);
    let b = Number(numbers[1]);

    function priceIncludingTax (a, b){
        return Math.floor(b * a);
    }
    console.log(priceIncludingTax (a, b));
});