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
    let a = lines[0];
    let b = lines[1];
    let c = lines[2];
    let d = lines[3];
    let e = lines[4];
    let f = lines[5];
    let g = lines[6];

    let result = [a, b, c, d, e, f, g];

    function oneWeekSchedule(result) {
        let allResult = result.filter((word) => word === "no")
        return allResult.length;
    }
    console.log(oneWeekSchedule(result));
});