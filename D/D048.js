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
    let a = Number(lines[0]);
    let b = Number(lines[1]); 
    let c = Number(lines[2]); 
    let d = Number(lines[3]); 
    let e = Number(lines[4]); 
function interval (a,b,c,d,e) {;
    console.log(b-a)
    console.log(c-b)
    console.log(d-c)
    console.log(e-d)
}
 interval(a,b,c,d,e);
});