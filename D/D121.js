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
    function replace (str) {
        for(let element of str) {
            if(element === "A") {
                return str.replace("A", "R");
        }return str;
    }
}
console.log(replace(lines[0]));
});