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
function stringConcatenation (input_lines){
  let result = "Hello ";

  for(let i = 1; i < input_lines.length;i++) {
    if(i < input_lines.length-1) {
      result += input_lines[i] + ","
    } else if (i < input_lines.length) {
      result += input_lines[i] + "."
    }
  }
  return result;

}
console.log(stringConcatenation (input_lines));
});