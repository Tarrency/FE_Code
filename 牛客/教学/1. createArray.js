/* 要求返回一个长度为参数值并且每一项值都为参数值的数组 */
const createArray1 = (number) => {
    // return new Array(number).fill(number)
    return Array(number).fill(number)
    // from
    // return Array.from({length: number}, () => number)
}
// from: 从类数组对象或可迭代对象创建新数组,包括字符串、set
// of: new Array()，参数不同，new array传长度，of传元素
