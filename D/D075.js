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
    let num1 = Number(lines[0]);
    let num2 = Number(lines[1]);
    let num3 = Number(lines[2]);
    let num4 = Number(lines[3]);

    function missingCards (num1,num2,num3,num4) {
        let result = [num1,num2,num3,num4];
        let provisional= [1,2,3,4,5]

        for(let i = 0;i < 4; i++) {
            if(result.includes(provisional[i]) === false){
                return provisional[i].toString();
            }
        }
        // return provisional.toString();
    }
    console.log(missingCards (num1,num2,num3,num4))
});