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
let strings = input_lines[0].split(":");
let hour = Number(strings[0]);
let minute = strings[1];

let hourDiffrence = hour - 8;

if(hourDiffrence < 0) {
  console.log(`${24+hourDiffrence}:${minute}`);
} else {
  console.log(`${hourDiffrence}:${minute}`)
};
});