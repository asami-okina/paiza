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
    function classfication (str) {
        if(str.startsWith("2")){
            return "ok";
        } else if (str.startsWith("4")) {
            return "error"
        } else {
            return "unknown";
        }
    }

    console.log(classfication(lines[0]));
});