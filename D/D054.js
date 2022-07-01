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

function desert (str) {
    if(str.length >= 11){
        return "OK"
    } else {
        return  (11- str.length);
    }
}
console.log(desert(lines[0]))
});