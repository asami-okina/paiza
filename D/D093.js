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
    let str = input_lines[0]

    let isSame = true
    let first = str[0]
    for(let  i = 1; i < str.length;i++){
        if (first !== str[i]) {
            isSame = false
            break
        }
    }
    if (isSame) {
        console.log(str)
    } else {
        console.log("No")
    }
});