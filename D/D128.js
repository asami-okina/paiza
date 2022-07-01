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
    let num = Number(input_lines[0])
    let strings = input_lines[1].split(" "); //["a", "b", "c"] 

    function abbreviationGeneration (num,strings){
        let result = "";
        for(let i = 0; i < num; i++){
            result += strings[i].slice(0,1);
        }
        return result;
    }
  console.log(abbreviationGeneration (num,strings));
});