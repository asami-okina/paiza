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
    let num3=Number(numbers[2]);
    let num4 =Number(numbers[3]);
    let num5=Number(numbers[4]);

    function lastDigit (num1,num2,num3,num4,num5) {
        let number2  = num1 + num2 + num3 + num4 + num5;
        let array = String(number2);
        let result = [];
        
        for(let element of array){
            result.push(element)
        }
        return result.pop();
    }

  console.log(lastDigit (num1,num2,num3,num4,num5));
});