//Memoization Techniques
// TC: 0(M*N) SC: O(N*M) + O(N + M)
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

function f(i, j, s, t, dp) {
    if ( i < 0 || j < 0) return 0;
    if (dp[i][j] !== -1) {
        return dp[i][j];
    }
    if(s[i] === t[j]) {
        return dp[i][j] = 1 + f(i - 1, j - 1, s, t, dp);
    } else {
        return dp[i][j] = Math.max(f(i - 1, j, s, t, dp), f(i, j - 1, s, t, dp))
    }
}

var longestCommonSubsequence = function(s, t) {
    let n = s.length;
    let m = t.length;
    const dp = new Array(n).fill(-1).map(() => new Array(m).fill(-1));
    return f(n - 1, m - 1, s, t, dp);
};

//Tabulation/ bottom Up
// Rules
// 1. copy the base case
// 2. capture the schanging parameter in opposite direction
// 3. copy the recurence.

function f(i, j, s, t, dp) {
    if ( i == 0 || j == 0) return 0;
    if (dp[i][j] !== -1) {
        return dp[i][j];
    }
    if(s[i - 1] === t[j - 1]) {
        return dp[i][j] = 1 + f(i - 1, j - 1, s, t, dp);
    } else {
        return dp[i][j] = Math.max(f(i - 1, j, s, t, dp), f(i, j - 1, s, t, dp))
    }
}

var longestCommonSubsequence = function(s, t) {
    let n = s.length;
    let m = t.length;
    const dp = new Array(n + 1).fill(-1).map(() => new Array(m + 1).fill(-1));
    return f(n, m , s, t, dp);
};

//dp solution
var longestCommonSubsequence = function(s, t) {
    let n = s.length;
    let m = t.length;
    const dp = new Array(n + 1).fill(-1).map(() => new Array(m + 1).fill(0));
    for( let j = 0; j <= m; j++) dp[0][j] = 0;
    for(let i = 0; i <= n; i++) dp[i][0] = 0;
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            if(s[i - 1] === t[j - 1]) {
                dp[i][j] = 1 + dp[i-1][j-1];
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp[n][m];
};