function randomStr(){
    return (Math.random()*0xffffff).toString(16).replace(/\./g,'');
}

function getUID(){
    return randomStr + '-' + randomStr;
}

export default {
    randomStr,
    getUID,
};