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
     function judgment (str) {
        let result = {A : 0}
        for(let element of str) {
            if(element == "A") {
                result["A"] += 1;
            }
        }
        return result["A"]
    }
    console.log(judgment(lines[0]));
});