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
    function weather (num) {
        let result = "";
        if (num <= 30) {
            result += "sunny";
        } else if(num <= 70) {
            result += "cloudy";
        } else {
            result += "rainy";
        }
        return result;
    }
    console.log(weather(lines[0]));
});