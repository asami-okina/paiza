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
    let strings = lines[0].split(" ");//1行は全てlines[0]のため、値を半角区切りにする
    let a = strings[0];
    let b = strings[1];
    let c = strings[2];
    let d = strings[3];
    let e = strings[4];
    let f = strings[5];
    let g = strings[6];
    let h = strings[7];
    let i = strings[8];
    let j = strings[9];

    function changingClithes (a,b,c,d,e,f,g,h,i,j) {
        let provisional = [a,b,c,d,e,f,g,h,i,j];
        let result = [];
        for(let element of provisional) {
            if(element === "W") {
                result.push(element);
            }
        }

        if(result.length >= 5) {
            return "OK";
        } else {
            return "NG";
        }
    }
    console.log(changingClithes (a,b,c,d,e,f,g,h,i,j));
});