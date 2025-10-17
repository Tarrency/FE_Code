/* url参数解析
输入：getParams('https://nowcoder.com/online?id=1&salas=1000')
输出：{id:1, salas: 100}
*/
const _getParams = (url) => {
    // 补全代码
    const arr = url.split('?')[1].split('&')
    const obj = {}
    arr.map(item => {
        const [key, value] = item.split('=')
        obj[key] = value
    })
    return obj
}
