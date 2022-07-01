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
function order (str) {
    let strings = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let element of strings) {
        if(element === str) {
            return (1) + (strings.indexOf(str));
        }
    }
}
console.log(order(lines[0]));
});