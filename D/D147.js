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
  let bottomArea = Number(input_lines[0]);

  let heights =  input_lines[1].split(" ");//1行は全てlines[0]のため、値を半角区切りにする
  let a = Number(heights[0]);
  let b = Number(heights[1]);
  let c = Number(heights[2]);
  let d = Number(heights[3]);

  console.log((Math.min(a,b,c,d)* bottomArea));
});