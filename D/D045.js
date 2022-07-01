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
    function isNotificationTable (n) {
        if(n === "5") {
            return "A";
        } else if (n === "3") {
            return "C";
        } else if (n === "2") {
            return "D";
        } else if (n === "4") {
            return "B";
        } else if(n === "1") {
            return "E";
        }
    } 
    console.log(isNotificationTable(lines[0]));
});