
const findItem = (arr , arg) => Array.isArray(arr) && arr.length > 0 && arr.some(item => item === arg)

module.exports = findItem

// console.log(findItem([1,2,3,4,5], 5))
