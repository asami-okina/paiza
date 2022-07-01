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
    function button (n) {
        if(n % 2 === 0) {
            return "OFF";
        } else {
            return "ON";
        }
    }
    console.log(button(lines[0]));
});