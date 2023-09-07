function flatten(value) {
    if (typeof value !== 'object'|| value === null) {
      return value;
    }
  
    if (Array.isArray(value)) {
      return flattenArray(value);
    }
    return flattenObject(value);
  }
  
  function flattenArray(array) {
    return array.reduce((acc, curr) => acc.concat(flatten(curr)), []);
  }
  
  function flattenObject(object) {
    const flattenedObj = {};
    for(const [key, value] of Object.entries(object)) {
      const valueIsObject = typeof value === 'object'
              && value !== null
              && !Array.isArray(value);
      const flattenValue = flatten(value);
      if (valueIsObject) {
        Object.assign(flattenedObj, flattenValue);
      } else {
        flattenedObj[key] = flattenValue;
      }
    }
    return flattenedObj;
  }
  
  // Do not edit the line below.
  exports.flatten = flatten;
  