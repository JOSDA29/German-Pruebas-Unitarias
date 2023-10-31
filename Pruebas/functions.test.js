const {sum, rest, mul, div, concatenateStrings} = require('./functions');

describe('FUnciones matemáticas', () =>{
    test('Suma', () => {
        expect(sum(2,3)).toBe(5);
    });

    test('Resta', () => {
        expect(rest(12,2)).toBe(10);
    });

    test('Multiplicacion', () =>{
        expect(mul(8,8)).toBe(64);
    });

    test('Division', () =>{
        expect(div(25,5)).toBe(5)
    });
});

    describe('Concatenate Strings', () =>{
        test('Contatenate two strings', () =>{
            expect(concatenateStrings('Josda,','Quinvar')).toBe('Josda,Quinvar');
        });
            
        test('Lanza un error si alguno de los argumentos no es una cadena', () => {
            expect(() => concatenateStrings('Josda', 123)).toThrowError(
              'Ambos argumentos deben ser cadenas de texto'
            );
          });          
     });
        
