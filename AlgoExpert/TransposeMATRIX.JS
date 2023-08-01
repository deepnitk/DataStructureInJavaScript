function transposeMatrix(matrix) {
    const res = [];
    for(let i = 0; i < matrix.length; i++) {
      for(let j = 0;j < matrix[i].length; j++) {
        if (res[j] === undefined) res.push([]);
        res[j].push(matrix[i][j]);
      }
    }
    return res;
  }
  
  // Do not edit the line below.
  exports.transposeMatrix = transposeMatrix;
  