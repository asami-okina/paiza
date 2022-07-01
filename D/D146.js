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
function wordAbbreviation (s){
    let result = "";

    for(let element of s){
        if(element!=="a" && element !== "e" && element !== "i" && element !== "o" && element !== "u"){
            result += element;
        }
    }
    return result;
}
  console.log(wordAbbreviation(input_lines[0]));
});