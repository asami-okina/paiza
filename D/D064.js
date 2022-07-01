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
    function liarDay (str) {
        if(str.includes("False")){
            return str.replace(/False/g, "True");
        } else {
            return str;
        }
    }
    console.log(liarDay(lines[0]))
});