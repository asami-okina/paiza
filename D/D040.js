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
    let num1 =Number(input_lines[0]);
    let num2 =Number(input_lines[1]);
    let num3=Number(input_lines[2]);
    let num4 =Number(input_lines[3]);
    let num5=Number(input_lines[4]);
    let num6=Number(input_lines[5]);
    let num7=Number(input_lines[6]);

    function consecutiveHolidaysWeather (num1,num2,num3,num4,num5,num6,num7) {
        let array = [num1,num2,num3,num4,num5,num6,num7];
        let result = 0;

        for(let element of array) {
            if(element <= 30 ) {
                result+= 1;
            }
        }
        return result;
    }
    console.log(consecutiveHolidaysWeather (num1,num2,num3,num4,num5,num6,num7))

});