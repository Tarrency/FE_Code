/* 判断新旧版本 */
const _shouldUpdate = (oldVersion, newVersion) => {
    const oldversion = parseInt(oldVersion.split('.').join(''))
    const newversion = parseInt(newVersion.split('.').join(''))
    return newversion > oldversion
}
