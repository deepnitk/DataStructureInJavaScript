//bad Approach

var isAnagram = function(s, t) {
    
    return s.split("").sort().join("") === t.split("").sort().join("");
};

// Better force
//TC: o(N) SC: o(N)
var isAnagram = function(s, t) {
    let hashMap = new Map();
    for(let i = 0; i < s.length; i++) {
        hashMap.set(s[i], (hashMap.get(s[i]) || 0) + 1);
    }

    for(let i = 0;i < t.length; i++){
        if (hashMap.get(t[i])) {
            hashMap.set(t[i], hashMap.get(t[i]) - 1);
            if (hashMap.get(t[i]) === 0) {
                hashMap.delete(t[i]);
            }
        } else {
            return false;
        }
    }

    if(hashMap.size === 0) {
        return true;
    }
    return false;
};

