describe('Sobre Expectativas', function() {

  // Devemos contemplar a verdade testando a realidade, via expectativas de teste.
  it('deve esperar verdadeiro', function() {

    // Sua jornada começa aqui: Substitua a palavra falso por verdadeiro 
    expect(false).toBeTruthy();
  });

  // Para entender a realidade, devemos comparar nossas expectativas contra a realidade.
  it('deve esperar igualdade', function() {
    var expectedValue = FILL_ME_IN;
    var actualValue = 1 + 1;

    expect(actualValue === expectedValue).toBeTruthy();
  });

  // Algumas formas de afirmar igualdade são melhores que outras.
  it('deve afirmar igualdade de uma forma melhor', function() {
    var expectedValue = FILL_ME_IN;
    var actualValue = 1 + 1;

  // toEqual() compara usando igualdade de senso comum.
    expect(actualValue).toEqual(expectedValue);
  });

  // Às vezes você precisa ser preciso sobre o que você "digita."
  it('deve afirmar igualdade com ===', function() {
    var expectedValue = FILL_ME_IN;
    var actualValue = (1 + 1).toString();

  // toBe() sempre usará === para comparar.
    expect(actualValue).toBe(expectedValue);
  });

  // Às vezes pediremos para você preencher os valores.
  it('deve ter valores preenchidos', function() {
    expect(1 + 1).toEqual(FILL_ME_IN);
  });
});
