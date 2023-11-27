const {add,sub,div,mul} = require('../utils/calculator')

describe("testing calculator funcionalities",()=>{
    describe("adding numbers test add",()=>{
        test('adding 1+1 equals 2',()=>{
            expect(add(1,1)).toBe(2)
        }),
        test('adding 1+"1" equals NAN',()=>{
            expect(add(1,"1")).toBeNaN()
        }),
        test('adding no parameters equals NAN',()=>{
            expect(add()).toBeNaN()
        }),
        test('adding arrays equals NAN',()=>{
            expect(add([1,2,3],[1,2,3])).toBeNaN()
        }),
        test('adding NaN equals NAN',()=>{
            expect(add(NaN,NaN)).toBeNaN()
        })
    })

    describe("substracting numbers test sub",()=>{
        test('substracting 1-1 equals 0',()=>{
            expect(sub(1,1)).toBe(0)
        }),
        test('substracting 1-"1" equals NAN',()=>{
            expect(sub(1,"1")).toBeNaN()
        }),
        test('substracting no parameters equals NAN',()=>{
            expect(sub()).toBeNaN()
        }),
        test('substracting arrays equals NAN',()=>{
            expect(sub([1,2,3],[1,2,3])).toBeNaN()
        }),
        test('substracting NaN equals NAN',()=>{
            expect(sub(NaN,NaN)).toBeNaN()
        })
    })

    describe("multiply numbers test mul",()=>{
        test('multiply 1*1 equals 1',()=>{
            expect(mul(1,1)).toBe(1)
        }),
        test('multiply 1*"1" equals null',()=>{
            expect(mul(1,"1")).toBeNull()
        }),
        test('multiply no parameters equals null',()=>{
            expect(mul()).toBeNull()
        }),
        test('multiply arrays equals NAN',()=>{
            expect(mul([1,2,3],[1,2,3])).toBeNull()
        }),
        test('multiply NaN equals NAN',()=>{
            expect(mul(NaN,NaN)).toBeNull()
        })
    })

    describe("dividing numbers test div",()=>{
        test('dividing 1/1 equals 1',()=>{
            expect(div(1,1)).toBe(1)
        }),
        test('dividing 1/0 equals null',()=>{
            expect(div(1,"1")).toBeNull()
        }),
        test('dividing 1+"1" equals null',()=>{
            expect(div(1,"1")).toBeNull()
        }),
        test('dividing no parameters equals null',()=>{
            expect(div()).toBeNull()
        }),
        test('dividing arrays equals null',()=>{
            expect(div([1,2,3],[1,2,3])).toBeNull()
        }),
        test('dividing NaN equals null',()=>{
            expect(div(NaN,NaN)).toBeNull()
        })
    })
})
