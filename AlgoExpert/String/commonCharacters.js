/*
    Time complexity: O(n∗m)

    Here n is the number of words in the input array and m is the length of the longest word.
    This is because the algorithm iterates through each word in the array once and performs a constant amount of work for each character in each word.

    Space complexity: O(k)

    Here k is the number of distinct characters across all the words.
    This is because the algorithm creates a Map object to store the frequency of each character, which has a space complexity proportional to the number of distinct keys (characters) it contains.

*/

function commonCharacters(strings) {
    let charFreqs = new Map();
    
        for(let char of strings[0]) {
            charFreqs.set(char, (charFreqs.get(char) || 0) + 1);
        }
    
        for ( let i = 1; i < strings.length; i++) {
            let wordFreqs = new Map();
    
            for(let char of strings[i]) {
                wordFreqs.set(char, (wordFreqs.get(char) || 0) + 1);
            }
    
            for(let [char, freq] of charFreqs) {
                if (wordFreqs.has(char)) {
                    charFreqs.set(char, Math.min(freq, wordFreqs.get(char)));
                } else {
                    charFreqs.delete(char);
                }
            }
        }
    
        let result = [];
        for (let [char, freq] of charFreqs) {
          result.push(char);
        }
    
        return result;
    }
    
    // Do not edit the line below.
    exports.commonCharacters = commonCharacters;
    