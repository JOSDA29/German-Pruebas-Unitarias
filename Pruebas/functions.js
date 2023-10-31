function sum (a, b){
    return a + b;
}

function rest (a, b){
    return a - b;
}

function mul (a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

function concatenateStrings(msg, msg2){
    if(typeof msg != 'string' || typeof msg2 != 'string'){
        throw new Error('Ambos argumentos deben ser cadenas de texto');
    }
    return msg + msg2;
}

module.exports = {sum, rest, mul, div, concatenateStrings};