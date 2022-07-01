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
    let strings = lines[1].split(" ");
    let a = strings[0];
    let b = strings[1];  
    let c = strings[2];  
    let num = Number(lines[0]) 

    function present (num,a,b,c) {
        if(num === 1) {
            return a;
        } else if (num === 2) {
            return b;
        } else if (num === 3) {
            return c;
        }
    }
    console.log(present(num,a,b,c));
});