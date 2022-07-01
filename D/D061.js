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
    function chocolate (num) {
        if(num === 0) {
            return 1;
        } else {
            return num * 3;
        }
    }
    console.log(chocolate(lines[0]));
});