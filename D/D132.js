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
    function quize (num, str) {
        let result = "";
        for(let i = 1; i <= num; i++) {
            result += str;
        }
        return result;
    }
    console.log(quize(lines[0], lines[1]));
});