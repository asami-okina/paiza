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
let num = Number(input_lines[0]); 

function lessWin (num,array) {
    let G = 0;
    let P = 0;

    for(let i = 0; i < num; i++) {
        if(array[i]=== "G"){
            G += 1;
        } else {
            P += 1;
        }
    }
    if(G > P){
        console.log("P");
    } else if (P > G) {
        console.log("G")
    } else {
        console.log("Draw")
    }
}
lessWin(num,input_lines[1])
});