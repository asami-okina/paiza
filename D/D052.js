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
    let num = Number(lines[0]);

    function makePyramid (num) {
        let result = 0;
        for(let i = 0; i <= num; i++) {
            result += i;
        }
        return result;
    }
    console.log(makePyramid(num));
});