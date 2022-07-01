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
    let x =Number(numbers[0]);
    let y =Number(numbers[1]);
    let p=Number(numbers[2]);

    function dataOfBackup (x, y, p) {
        let quantity = Math.ceil(x / y);
        let price = quantity * p;

        return price;
    }
  console.log(dataOfBackup (x, y, p));
});