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
    function dogsOrCats (str1, str2, str3) {
        let cat = 0;
        let dog = 0;
        let result = [str1, str2, str3];

        for(let element of result) {
            if(element === "cat") {
                cat += 1;
            } else {
                dog += 1;
            }
        }
        
        if(cat > dog) {
            return "cat";
        } else {
            return "dog"
        }
    }
  console.log(dogsOrCats (input_lines[0], input_lines[1], input_lines[2]));
});