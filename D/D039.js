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
    function isEquilateralTriangle (str1, str2, str3) {
        if(str1 === str2 && str1 === str3 && str2 === str3) {
            return "YES"
        } else {
            return "NO"
        }
    }
    console.log(isEquilateralTriangle(lines[0], lines[1], lines[2]));
});