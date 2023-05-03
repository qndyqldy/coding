function isBalanced(str) {
    if(str.length < 1) return false;

    let flag = true;

    let startBracketCount = str.match(/\(/g)?.length;
    let endBracketCount = str.match(/\)/g)?.length;

    if(startBracketCount !== endBracketCount) return false;

    let firstStartBracketIndex = str.indexOf('(');
    let firstEndBracketIndex = str.indexOf(')');

    if(firstStartBracketIndex > firstEndBracketIndex) return false;

    let lastStartBracketIndex = str.lastIndexOf('(');
    let lastEndBracketIndex = str.lastIndexOf(')');

    if(lastStartBracketIndex > lastEndBracketIndex) return false;

    startBracketCount = 0;
    endBracketCount = 0;

    for(let s of str) {
        if(s === '(') startBracketCount ++;
        if(s === ')') endBracketCount ++;
        if(startBracketCount < endBracketCount) {
            return false;
        }
    }

    return flag;
}

console.log(isBalanced('(hello)')); // true
console.log(isBalanced('())((hello)')); // false
console.log(isBalanced('(world')); // false
console.log(isBalanced('(j(a)v)a(s)cr(i)pt)')); // true
console.log(isBalanced('()()()()()()')); // true
console.log(isBalanced('(()())()')); // true
console.log(isBalanced('())(')); // false