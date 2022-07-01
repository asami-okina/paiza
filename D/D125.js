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
    let number = Number(input_lines[0]);

    function pedometer (array) {
        let result = 0;

        for(let element of array) {
            result += Number(element) / number;
        }

        return Math.floor((result - 1));

    }
    console.log(pedometer(input_lines))
});