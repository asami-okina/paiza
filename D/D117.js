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
    let num = Number(lines[0]);
    let numAll = lines[1].split(" ");// ["4", "5", "2", "3", "6", "1"]

    function sugoroku (num,numAll){
        let result = 0;

        for(let i = 0; i < num; i++){
            result = result + Number(numAll[i])
        }
        return result;
    }
    console.log(sugoroku (num,numAll))
});