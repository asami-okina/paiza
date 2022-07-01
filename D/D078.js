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
    let number3 = Number(numbers[2])
    let number4 = Number(numbers[3])
    let number5 = Number(numbers[4])
    let number6 = Number(numbers[5])
    let number7 = Number(numbers[6])
    let num = Number(input_lines[1])

    function entranceExamination (number1,number2,number3,number4,number5,number6,number7){
        let array = [number1,number2,number3,number4,number5,number6,number7];
        let result = 0;

        for(let element of array) {
            result += element;
        }
        let average = result / array.length;

        if(average >= num) {
            return "pass";
        } else {
            return "failure";
        }
    }

  console.log(entranceExamination (number1,number2,number3,number4,number5,number6,number7,num));
});