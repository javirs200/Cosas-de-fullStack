const calculator = {
    add: (a,b)=>{return ((typeof a === 'number') && (typeof b === 'number')) ? a+b : NaN},
    sub: (a,b)=>{return ((typeof a === 'number') && (typeof b === 'number')) ? a-b : NaN},
    div: (a,b)=>{return ((typeof a === 'number') && (typeof b === 'number')) ? a*b : null},
    mul: (a,b)=>{return ((typeof a === 'number') && (typeof b === 'number')) ? a/b : null},
}

module.exports = calculator