Array.prototype.myMap = function (callback) {
    let output = [];
    for(let i = 0;i < this.length; i++) {
      output.push(callback(this[i], i, this));
    }
    return output;
  };
  
  Array.prototype.myFilter = function (callback) {
    let output = [];
    for(let i = 0;i < this.length; i++) {
      const value = callback(this[i], i, this)
      if(value === true) {
        output.push(this[i]);
      }    
    }
    return output;
  };
  
  Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    for(let i = 0;i < this.length; i++) {
      if( i === 0 && initialValue === undefined) {
        accumulator = this[i];
      } else {
        accumulator = callback(accumulator, this[i], i, this);
      }
    }
    return accumulator;
  };
  