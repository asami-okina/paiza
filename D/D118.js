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
 let num = Number(lines[1]);

 function makeCalendar (str,num) {
     if(str === "S") {
         return 1925 + num;
     } else if(str === "H") {
         return 1988 + num;
     }
 }
 console.log(makeCalendar(lines[0],num));
});