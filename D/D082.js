process.stdin.resume();
process.stdin.setEncoding('utf8');

var input_lines = []; // 標準入力から与えられた各行を保存する変数：input_lines
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  input_lines.push(line);
});
reader.on('close', () => {
function twoWords (a,b){
    let finalA = a.slice(-1)
    let firstB = b.slice(0,1)
    let finalB = b.slice(-1)

    if(finalA === firstB && finalB !== "n"){
        return "OK"
    } else {
        return "NG"
    }
}
  console.log(twoWords(input_lines[0], input_lines[1]));
});