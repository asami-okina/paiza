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
    function include(str1,str2) {
        if(str2.includes(str1)){
            return "NG";
        } else {
            return str2;
        }
    }
  console.log(include(input_lines[0], input_lines[1]));
});