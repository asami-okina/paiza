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
    let num = input_lines[0];

    function month (num) {
        let result = "";
        let months = {1 : "January", 2 : "February", 3 : "March", 4 : "April", 5 : "May", 6 : "June",  7 : "July", 8 : "August", 9 : "September", 10 : "October", 11 : "November", 12 : "December"};
        for(let key in months) {
            if(key === num) {
                result += months[key];
            }
        }
        return result;
    }
  console.log(month(num));
});