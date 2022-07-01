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
  let result = 0;
  let index = 0;
  for(let i = 4; i >= 0; i--){
    index = 4 - i;
    result += Number(str[index]) * (2 ** i)
  }
  console.log(result);
});