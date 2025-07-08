var _; //globals

/* Esta seção usa uma extensão funcional conhecida como Underscore.js - http://documentcloud.github.com/underscore/
     "Underscore é uma biblioteca de utilidades para JavaScript que fornece muito do suporte de programação funcional
      que você esperaria no Prototype.js (ou Ruby), mas sem estender nenhum dos objetos JavaScript integrados.
      É a gravata para combinar com o smoking do jQuery."
 */
describe("Sobre Funções de Ordem Superior", function () {

  it("deve usar filter para retornar itens de array que atendem a um critério", function () {
    var numbers = [1,2,3];
    var odd = _(numbers).filter(function (x) { return x % 2 !== 0 });

    expect(odd).toEqual(FILL_ME_IN);
    expect(odd.length).toBe(FILL_ME_IN);
    expect(numbers.length).toBe(FILL_ME_IN);
  });

  it("deve usar 'map' para transformar cada elemento", function () {
    var numbers = [1, 2, 3];
    var numbersPlus1 = _(numbers).map(function(x) { return x + 1 });

    expect(numbersPlus1).toEqual(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("deve usar 'reduce' para atualizar o mesmo resultado em cada iteração", function () {
    var numbers = [1, 2, 3];
    var reduction = _(numbers).reduce(
            function(/* resultado da última chamada */ memo, /* atual */ x) { return memo + x }, /* inicial */ 0);

    expect(reduction).toBe(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("deve usar 'forEach' para iteração simples", function () {
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += (item % 2) === 0;
    };

    _(numbers).forEach(isEven);

    expect(msg).toEqual(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("deve usar 'all' para testar se todos os itens passam na condição", function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).all(isEven)).toBe(FILL_ME_IN);
    expect(_(mixedBag).all(isEven)).toBe(FILL_ME_IN);
  });

  it("deve usar 'any' para testar se algum item passa na condição" , function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).any(isEven)).toBe(FILL_ME_IN);
    expect(_(mixedBag).any(isEven)).toBe(FILL_ME_IN);
  });

  it("deve usar range para gerar um array", function() {
      expect(_.range(3)).toEqual(FILL_ME_IN);
      expect(_.range(1, 4)).toEqual(FILL_ME_IN);
      expect(_.range(0, -4, -1)).toEqual(FILL_ME_IN);
  });

  it("deve usar flatten para tornar arrays aninhados fáceis de trabalhar", function() {
      expect(_([ [1, 2], [3, 4] ]).flatten()).toEqual(FILL_ME_IN);
  });

  it("deve usar chain() ... .value() para usar múltiplas funções de ordem superior", function() {
      var result = _([ [0, 1], 2 ]).chain()
                       .flatten()
                       .map(function(x) { return x+1 } )
                       .reduce(function (sum, x) { return sum + x })
                       .value();

      expect(result).toEqual(FILL_ME_IN);
  });

});

