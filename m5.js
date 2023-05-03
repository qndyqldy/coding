// 문자열 압축
// 1 <= str <= 1000
function compressString(str) {

    let compress = '';
    let firstChar = str[0];
    let charCount = 0;
    let strArray = [];
    for(let s of str) {
        if(firstChar !== s) {
            strArray.push({
                char: firstChar,
                count: charCount
            })

            firstChar = s;
            charCount = 1;
            continue;
        }
        charCount ++;
    }

    strArray.push({
        char: firstChar,
        count: charCount
    });

    let checkOne = true;

    for(let o of strArray) {
        if(o.count !== 1) checkOne = false;
    }

    for(let o of strArray) {
        compress += o.char
        if(!checkOne) compress += o.count;
    }

    return compress;
}

console.log(compressString('aaabbbccc'));
console.log(compressString('aabcccccaaa'));
console.log(compressString('abcd'));
console.log(compressString('11122233311'));
console.log(compressString('1234'));