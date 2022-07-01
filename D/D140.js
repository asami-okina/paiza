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
    let number = Number(lines[0]);
    
    let strings = lines[1].split(" ");//1行は全てlines[0]のため、値を半角区切りにする
    let a = strings[0];
    let b = strings[1];
    let c = strings[2];
    let d = strings[3];
    let e = strings[4];
    let f = strings[5];
    let g = strings[6];
    let h = strings[7];
    let i = strings[8];
    let j = strings[9];

    let result = [a,b,c,d,e,f,g,h,i,j]

    function order(result){
        return String(result.splice(number-1,1));
    }
    console.log(order(result));
});