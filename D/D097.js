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
    let numbers = lines[0].split(" ");
    let a = Number(numbers[0]);
    let b = Number(numbers[1]); 
    let c = Number(numbers[2]);
    let d = Number(numbers[3]);
    let e = Number(numbers[4]);
    let f = Number(numbers[5]);
    let g = Number(numbers[6]);
    let h = Number(numbers[7]);

    function rainySeason (a,b,c,d,e,f,g,h) {
        let array = [a,b,c,d,e,f,g,h];
        let result = 0;
        for(let element of array) {
            if(element === 1) {
                result += 1;
            } 
        }
        if(result >= 5) {
            return "yes";
        } else {
            return "no"
        }
    }
    console.log(rainySeason (a,b,c,d,e,f,g,h));
});