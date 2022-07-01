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
    let numbers = input_lines[0].split(" "); //["a", "b", "c"] 
    let m =Number(numbers[0]);
    let v =Number(numbers[1]);
    let f=Number(numbers[2]);

    function calculationOfBreakingDistance (m, v, f) {
        return Math.floor(((v*v)*m) / (2 * f));
    }
    console.log(calculationOfBreakingDistance (m, v, f))
});