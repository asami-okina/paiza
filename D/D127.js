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
    function lotNumberOfSeatNumber (str) {
        let result = [];

        for(let element of str) {
            result.push(element);
        }

        if(result[1] === result[2]  && result[2] === result[3] && result[3] === result[1]){
            return "Yes";
        } else {
            return "No"
        }
    }
    console.log(lotNumberOfSeatNumber (input_lines[0]))
});