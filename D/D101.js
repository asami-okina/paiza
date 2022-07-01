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
    let numbers = input_lines[0].split(" "); //["a", "b", "c"] 
    let number1 = Number(numbers[0]);
    let number2 = Number(numbers[1])

    function EvenAndOdd (number1,number2) {
        if((number1 % 2 === 0 && number2 % 2 === 1) || (number1 % 2 === 1 && number2 % 2 ===0)){
            return "YES";
        } else {
            return "NO";
        }
    }
  console.log(EvenAndOdd (number1,number2));
});