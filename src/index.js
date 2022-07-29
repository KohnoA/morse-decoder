const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let separateArr = []; 
    let removeZeros = [];
    let result = [];

    for(let i = 0; i < expr.length; i += 10) {
        separateArr.push(expr.slice(i, 10 + i));
    }

    separateArr.map(item => {
        removeZeros.push(item.replace(/^0+/, '')
        .replace(/10/g, '.')
        .replace(/11/g, '-'));
    });

    for(let j = 0; j < separateArr.length; j++) {
        for(let key in MORSE_TABLE) {
            if(removeZeros[j] === key) {
                result.push(MORSE_TABLE[key]);
            } 
        }
        if(removeZeros[j] === '**********') {
            result.push(' ');
        }
    }
    
    return result.join('');
}

module.exports = {
    decode
}