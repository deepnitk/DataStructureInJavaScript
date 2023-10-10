/**
 * @Problem Statement
 * const string1 = 'The quick the fox jumped over the lazy dog';
    console.log(string1.split('the'));
    [ 'The quick ', ' fox jumped over ', ' lazy dog' ]
    console.log(string1.split(''));*[
        'T', 'h', 'e', ' ', 'q', 'u', 'i',
        'c', 'k', ' ', 't', 'h', 'e', ' ',
        'f', 'o', 'x', ' ', 'j', 'u', 'm',
        'p', 'e', 'd', ' ', 'o', 'v', 'e',
        'r', ' ', 't', 'h', 'e', ' ', 'l',
        'a', 'z', 'y', ' ', 'd', 'o', 'g'
    ]

    We need to write split function pollyfill function
 */


const split = (string, delimiter) => {
    const res = [];
    if (delimiter === '') return Array.from(string);
    const startSplit = (str, i) => {
        if (i === string.length - 1) return;
        const index = str.indexOf(delimiter);
        if (index >= 0) {
            res.push(str.substring(0, index));
            startSplit(str.substring(index + delimiter.length), index + delimiter.length);
        } else {
            res.push(str);
        }
    }
    startSplit(string, 0);
    return res;
}
console.log(split('The quick the fox jumped over the lazy dog', 'the'));
console.log(split('The quick the fox jumped over the lazy dog', ''));

