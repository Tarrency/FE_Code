const closure = () => {
    let timer = 1
    return () => timer++
}
const closure1 = () => {
    let num = 0
    return function() {
        return ++num
    }
}
