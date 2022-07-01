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
    let strings = lines[0].split(" ");
    let a = strings[0];
    let b = strings[1];   
    
    function initials (a, b) {
        return a.charAt(0) + "." + b.charAt(0)
    }
    console.log(initials(a,b));
});