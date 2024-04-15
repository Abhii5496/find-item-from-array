
const findItem = (array , arg) => {
    const val = array && array.length > array.find(item => item == arg)
    return val
}

module.exports = findItem

// console.log(findItem([1,2,3,4,5], '5'))
