

const flatten = (value) => {
    // value is primitive
    if (typeof value !== 'object' || value === null) {
        return value;
    }

    // value is an array
    if (Array.isArray(value)) {
        return flattenArray(value);
    }

    // value is an object
    return flattenObject(value);
}

const flattenArray = (value) => {
    return value.reduce((acc, curr) => acc.concat(flatten(curr)), []);
}

const flattenObject = (object) => {
    const flattenedObj = {};
    for( const [key, value] of Object.entries(object)) {
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

// ----------------------------------------------------------------

const flatten2 = (obj, parent) => {
    const finalObj = {};
    const generateFlatObjects = (obj, parent) => {
        for ( let key in obj ) {
            const newParent = parent+key;
            const value = obj[key];
            if (typeof value === 'object') {
                generateFlatObjects(value, newParent+".");
            } else {
                finalObj[newParent] = value;
            }
        }
    };
    generateFlatObjects(obj, parent);
    return finalObj;
}

const obj = {
    A: "12",
    B: 23,
    C: {
      P: 23,
      O: {
         L: 56
      },
      Q: [1, 2]
     }   
  };

// expected output : { A: '12', B: 23, P: 23, L: 56, Q: [ 1, 2 ] }
console.log(flatten(obj));

// expected output : { A: '12', B: 23, 'C.P': 23, 'C.O.L': 56, 'C.Q.0': 1, 'C.Q.1': 2 }
console.log(flatten2(obj, ""));