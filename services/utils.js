module.exports ={
    genID,
    getRandomInt,
}

function genID(len = 10) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'
    var randID = ''
    for (let i = 0; i < len; i++) {
        randID += chars[getRandomInt(0, chars.length-1)]
    }
    return randID;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }