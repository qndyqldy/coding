function isBalanced(str) {
    if(str.length < 1) return false;

    let firstStartBracketIndex = str.indexOf('(');
    let firstEndBracketIndex = str.indexOf(')');

    if(firstStartBracketIndex > firstEndBracketIndex) return false;

    let startBracketCount = 0;
    let endBracketCount = 0;

    for(let s of str) {
        if(s === '(') startBracketCount ++;
        else if(s === ')') endBracketCount ++;

        if(startBracketCount < endBracketCount) {
            return false;
        }
    }

    if(startBracketCount !== endBracketCount) return false;

    return true;
}

console.log(isBalanced('(hello)')); // true
console.log(isBalanced('())((hello)')); // false
console.log(isBalanced('(world')); // false
console.log(isBalanced('(j(a)v)a(s)cr(i)pt)')); // true
console.log(isBalanced('()()()()()()')); // true
console.log(isBalanced('(()())()')); // true
console.log(isBalanced('())(')); // false