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
  function separete (n) {
    if (n % 2 === 0) {
      return n / 2;
    } else if(n % 2 === 1){
      return Math.floor(n / 2);
    }
  }
  console.log(separete(lines[0]));
});