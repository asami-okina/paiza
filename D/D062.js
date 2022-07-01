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
    let numbers = input_lines[0].split(" ");//1行は全てlines[0]のため、値を半角区切りにする
    let a = Number(numbers[0]);
    let b = Number(numbers[1]);
    let c = Number(numbers[2]);

    let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let printA = ""
    let printB = ""
    let printC = ""

    for(let i = 0; i < a; i++){
        printA += array[i]
    }

    let bLength = b + printA.length;
    for(let i = printA.length; i <  bLength; i++){
        printB += array[i]
    }

    let iLength = printA.length + printB.length;
    for(let i = iLength; i < array.length; i++){
        printC += array[i]
    }

    console.log(printA);
    console.log(printB);
    console.log(printC);
});