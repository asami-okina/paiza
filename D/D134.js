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
    let str = input_lines[0];
    let result = "";

    for(let element of str){
        result += element;
        if(result.length === 10) {
            console.log(result);
            result ="";
        }
    }
    console.log(result);
});