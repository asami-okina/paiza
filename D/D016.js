process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  function output (a, b) {
    let result = "";
    result = a.slice(0, b); //sliceはarrayのオブジェクトだよ！
    return result;
  }
  console.log(output(lines[0], lines[1]));
});