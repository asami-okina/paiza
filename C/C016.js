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
    let slang = {A:4, E:3, G:6, I:1, O:0, S:5, Z:2};
    let str = input_lines[0]
    
    function leetString (str,slang){
        for(let element of str){
            for(let key in slang){
                if(element === key) {
                    str = str.replace(element, slang[key]);
                }
            }
        }
        return str;
    }
    
    console.log(leetString (str,slang));
});