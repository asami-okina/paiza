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
    let i = Number(numbers[8]);
    let j = Number(numbers[9]);

    function pollenForecast (a,b,c,d,e,f,g,h,i,j) {
     let result = 0;
     let array = [a,b,c,d,e,f,g,h,i,j];
     for(let element of array) {
         if(element <= 2) {
             result += 1;
         }
     }
     return result;
    }
    console.log(pollenForecast (a,b,c,d,e,f,g,h,i,j));
});