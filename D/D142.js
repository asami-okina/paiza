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
    let num3 =Number(numbers[2]);

    function numberOfIlluminations (num1,num2,num3) {
        if(num1 % num2 === 0){
            return num1 / num2 * num3;
        } else {
            return (Math.ceil(num1 / num2)) * num3;
        }
    }
  console.log(numberOfIlluminations (num1,num2,num3));
});