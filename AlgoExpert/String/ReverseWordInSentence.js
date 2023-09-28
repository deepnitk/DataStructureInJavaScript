/**
 * @Problem statement:
 * input: "I love JavaScript"
 * output: "Javascript love I";
 * reverse the word sequence.
 */

//Solution 1: TC: O(N) SC: O(N)
const reverseWordsInSentence = (input) => {
    const array = input.split(" ");
    const output = [];
    for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }

    return output.join(" ");
}

//Better solution: O(n) can handle multiple space.
// no use of reverse, split, join. clean solution
// Approach:start from end. keep track of output and currentWord. if curr character is ' ' then add that currentWord to reverse.
const reverseWordsInString = (string) => {
    let reverse = "";
    let currentWord = "";
    let i = string.length -1;
    while (i >= 0) {
        const char = string.charAt(i);
        if (char === " ") {
            reverse += currentWord + " ";
            currentWord = "";
        } else {
            currentWord = char + currentWord;
        }
        i--;
    }
    return reverse + currentWord;
};


const input = 'I love JavaScript';
console.log(reverseWordsInSentence(input));
console.log(reverseWordsInString(input));