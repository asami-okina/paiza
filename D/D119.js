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
let num = Number(input_lines[0])
let pi = "3.141592653589793"

let result = "";
for(let element of pi){
  result += element;
  if(result.length === num+2){
    break;
  }
}
console.log(result);
});