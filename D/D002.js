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
    let num1 =Number(numbers[0]);
    let num2 =Number(numbers[1]);

    function numberOfComparision (num1, num2) {
        if(num1 > num2) {
            return num1;
        } else if(num2 > num1) {
            return num2;
        } else {
            return "eq"
        }
    }
  console.log(numberOfComparision (num1, num2));
});