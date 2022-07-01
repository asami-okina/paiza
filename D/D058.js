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
    let numbers = lines[0].split(" ");//1行は全てlines[0]のため、値を半角区切りにする
    let L = Number(numbers[0]);
    let M = Number(numbers[1]);
    let N = Number(numbers[2]);

    function hatsumoude (L, M, N){
        let result = "";
        for(let i = 1;i <= L; i++){
            result +=  "A";
        }

        for(let i = 1;i <= M; i++){
            result +=  "B";
        }

        for(let i = 1;i <= N; i++){
            result +=  "A";
        }
        return result;
    }
    console.log(hatsumoude (L, M, N));
});