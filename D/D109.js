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
  let a = numbers[0];
  let b = numbers[1];

  let result = "";

  for (let element of a) {
    result += element;
  }

  for (let element of b) {
    result += element;
  }

  let isSame = true;
  let first = result[0];

  for(let i = 1; i < result.length; i++){
      if(first !== result[i]){
          isSame = false;
          break;
      }
  }
  if(isSame){
      console.log("Yes");
  } else {
      console.log("No");
  }
});