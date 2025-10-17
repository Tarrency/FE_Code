/* 千分位分隔符+小数点 */
const comma = function(num) {
    // 删除前面的0
    // num = String(parseFloat(num));
    // eslint-disable-next-line prefer-const
    let [integer, decimal] = num.split('.')
    // 中间是三位，多次出现且为结束，全局匹配
    // \B非单词边界（数字之间的位置），确保不在开头加，+表示出现一次或多次，\d是数字，{3}是三位，+表示出现一次或多次，全局匹配
    integer = integer.replace(/\B(?=(\d{3})+$)/g, ',')
    return integer + '.' + (decimal || '')
}
