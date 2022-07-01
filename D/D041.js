process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    let numbers = lines[0].split(" ");//1行は全てlines[0]のため、値を半角区切りにする
    let str1 = Number(numbers[0]);
    let str2 = Number(numbers[1]);
    let str3 = Number(numbers[2]);

    function bookShelf (str1, str2, str3) {
        let result = str2 * str3;
        if(result >= str1) {
            return "OK";
        } else {
            return "NG"
        }
    }
    console.log(bookShelf (str1, str2, str3));
});