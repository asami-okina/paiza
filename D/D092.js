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
let typeA = input_lines[0].split(" ");
let typeB = input_lines[1].split(" ");

let typeAx = Number(typeA[0]);
let typeAy = Number(typeA[1]);
let typeAp = Number(typeA[2]);

let typeBx = Number(typeB[0]);
let typeBy = Number(typeB[1]);
let typeBp = Number(typeB[2]);

let typeAAll = typeAp / (typeAx * typeAy);
let typeBAll = typeBp / (typeBx * typeBy);

if(typeAAll > typeBAll){
    console.log(`${typeBx} ${typeBy} ${typeBp}`)
}  else if (typeAAll === typeBAll){
    console.log("DRAW")
}else {
    console.log(`${typeAx} ${typeAy} ${typeAp}`)
}
});