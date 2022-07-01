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
    function conect (str1, str2, str3) {
        console.log(`Gold ${str1}`);
        console.log(`Silver ${str2}`);
        console.log(`Bronze ${str3}`);
    }
    conect(lines[0], lines[1], lines[2]);
});