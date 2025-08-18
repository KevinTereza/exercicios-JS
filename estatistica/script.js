const average = (...nums) => nums.reduce((acc, n) => acc + n, 0) / nums.length
console.log(average(7, 8, 9))

const weightedAverage = (...entries) => {
    const sum = [...entries].reduce((acc, n) => acc + (n.value * (n?.weight ?? 1)), 0) 
    const weightSum = [...entries].reduce((acc, n) => acc + (n.weight ?? 1), 0)
    return sum / weightSum
}
console.log(weightedAverage(
  { value: 80, weight: 2 },
  { value: 90, weight: 3 },
  { value: 70 } // sem weight, assume 1
))

const median = (...nums) => {
    const cardinalNums = [...nums].sort((a, b) => a - b)
    const middle = Math.floor(cardinalNums.length / 2)
    if (nums.length % 2 !== 0) {
        return cardinalNums[middle]
    } else {
        return average(cardinalNums[middle], cardinalNums[middle - 1])
    }
}
console.log(median(7, 3, 9, 2, 5, 8, 4, 9, 10))

const mode = (...nums) => {
    let quantify = nums.map(num => [num, nums.filter(n => n === num).length])
    quantify = quantify.sort((a, b) => b[1] - a[1])
    return quantify[0][0]
}

console.log(mode(4, 2, 7, 2, 5, 7, 7, 3, 2, 4, 2))