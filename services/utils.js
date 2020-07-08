module.exports ={
    genID,
}

function genID(len = 10) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'
    var randID = ''
    for (let i = 0; i < len; i++) {
        randID += chars[getRandomInteger(0, chars.length)]
    }
    return randID;
}