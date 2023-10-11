// write a curry function that returns sum of previos value
const curryfunc = () => {
    let prevSum = 0
    return (newValue = 0) => {
        prevSum = prevSum + newValue;
        return prevSum;
    }

}

const sum = curryfunc();

console.log(sum(1));
console.log(sum(1));
console.log(sum(7));
console.log(sum(9));
console.log(sum());