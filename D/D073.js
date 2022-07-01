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
    function isInversion (str) {
        let result = [];
        for(let element of str) {
            result.unshift(element);
        }
        return result[0];
    }
function judgment (str){
  let result = [];
for(element of str) {
  result.unshift(element);
}
let sum = "";
for(let element2 of result) {
  sum += element2;
}
return sum;
}

console.log(judgment(lines[0]));
});