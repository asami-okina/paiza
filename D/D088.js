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
    let numbers = lines[0].split(" ");
    let t = Number(numbers[0]);
    let u = Number (numbers[1]);
    
    function temperature (t, u) {
        return (t) - (u);
    }
    console.log(temperature(t, u));
});