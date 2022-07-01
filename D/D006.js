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
    let string = input_lines[0].split(" "); //["a", "b", "c"] 
    let n = Number(string[0]);
    let s = string[1];

    function unitCalculation (n, s) {
        if(s === "km"){
            return n * 1000 * 100 * 10;
        } else if(s === "m") {
            return n * 100 * 10;
        } else {
            return n * 10;
        }
    }
  console.log(unitCalculation (n, s));
});