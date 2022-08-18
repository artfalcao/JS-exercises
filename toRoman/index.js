// Reescrever toRoman
function toRoman(num) {
    let unidade = ['','I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X' ]
  
    let dezena = ['','X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
  
    let dez = parseInt(num /10)
  
    let unid = num % 10
  
    let resp = ''
  
    if ( num <= 10) {
      for (let i = 0; i < unidade.length; i++) {
        if (num == i) {
          resp += unidade[i]
          return resp
        }
      }
    } else {
        for (let i = 0; i < dezena.length; i++) {
            if (dez == i) {
                resp += dezena[i]
            } 
        } 
        for (let i = 0; i < unidade.length; i++) {
            if (unid == i) {
                resp += unidade[i]
            }
        }
        return resp
    }
};
  
  /** Teste **/
  
  const test = (value, expected) => {
    const result = toRoman(value);
    if (result === expected)
      console.log(`✓ Teste ${value} correto`);
    else
      console.log(`✗ Teste ${value} incorreto. Esperado ${expected}, obtido ${result}`);
  };
  
  function testa() {
    test(1, "I");
    test(2, "II");
    test(3, "III");
    test(4, "IV");
    test(5, "V");
    test(6, "VI");
    test(7, "VII");
    test(8, "VIII");
    test(9, "IX");
    test(10, "X")
    test(12, "XII")
    test(15, "XV")
    test(18, "XVIII")
    test(19, "XIX")
    test(29, "XXIX")
    test(38, "XXXVIII")
    test(47, "XLVII")
    test(56, "LVI")
    test(65, "LXV")
    test(74, "LXXIV")
    test(83, "LXXXIII")
    test(92, "XCII")
  }
  
  testa();


