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
    let result = "";
function escapeGame (string){
    for(let element of string){
        if(element === "0") {
            result += "C";
        } else if(element === "1"){
            result += "A";
        } else {
            result += "B";
        }
    }
    return result;
}
  console.log(escapeGame(input_lines[0]));
});