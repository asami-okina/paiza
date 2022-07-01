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
    function include(str) {
        for(let element of str) {
            if(element === "I" || element === "l" || element === "i") {
                return "caution"
            } else {
                return str;
            }
        }
    }
  console.log(include(input_lines[0]));
});