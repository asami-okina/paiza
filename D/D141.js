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
    let number = Number(input_lines[0]);

    function verticalAndHorizontalWriting (array) {
        let result = "";

        for(let i = 1; i <= number; i++) {
            result+= array[i]+ " " ;
        }
        result = result.replace(/\s+$/g, "")
        return result;
 
    }
    console.log(verticalAndHorizontalWriting(input_lines))
});