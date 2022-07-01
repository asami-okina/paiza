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
    function nogotiation (str) {
        let result = {y : 0, n : 0};
        for(let element of str) {
            if(element == "y") {
                result["y"] += 1;
            } else if (element == "n") {
                result["n"] += 1;
            }
        }
        return result["y"];
    }
    console.log(nogotiation(lines[0]));
});