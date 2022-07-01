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
    let number = Number(lines[0])

    function rainyAndSunnyRecords (number, s) {
        let result = [];
        for(let element of s) {
            result.push(element);
        }
        let allResult = result.filter((str)=> {
            return str === "S";
        })
        return allResult.length + " " + (number - allResult.length);
    }
console.log(rainyAndSunnyRecords (number, lines[1]));
});