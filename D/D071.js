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
    let string = input_lines[0].split(" "); //["a", "b", "c"] 
    let t = Number(string[0]);
    let m = Number(string[1]);

    function laundryAndDust (t, m) {
        if(t >= 25 && m <= 40) {
            return "No";
        } else if (t >= 25 || m <= 40) {
            return "Yes";
        } else {
            return "No"
        }
    }
  console.log(laundryAndDust (t, m));
});