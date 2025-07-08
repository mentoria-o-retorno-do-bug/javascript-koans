var _; //globals

describe("Sobre Aplicar o Que Aprendemos", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("dado que sou alérgico a nozes e odeio cogumelos, deve encontrar uma pizza que posso comer (imperativo)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(FILL_ME_IN);
  });

  it("dado que sou alérgico a nozes e odeio cogumelos, deve encontrar uma pizza que posso comer (funcional)", function () {

      var productsICanEat = [];

      /* resolver usando filter() & all() / any() */

      expect(productsICanEat.length).toBe(FILL_ME_IN);
  });

  /*********************************************************************************/

  it("deve somar todos os números naturais abaixo de 1000 que são múltiplos de 3 ou 5 (imperativo)", function () {

    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(FILL_ME_IN);
  });

  it("deve somar todos os números naturais abaixo de 1000 que são múltiplos de 3 ou 5 (funcional)", function () {

    var sum = FILL_ME_IN;    /* tentar encadear range() e reduce() */

    expect(233168).toBe(FILL_ME_IN);
  });

  /*********************************************************************************/
   it("deve contar a ocorrência de ingredientes (imperativo)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(FILL_ME_IN);
  });

  it("deve contar a ocorrência de ingredientes (funcional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* encadear map(), flatten() e reduce() */

    expect(ingredientCount['mushrooms']).toBe(FILL_ME_IN);
  });

  /*********************************************************************************/
  /* DESCOMENTE PARA CRÉDITO EXTRA */
  /*
  it("deve encontrar o maior fator primo de um número composto", function () {

  });

  it("deve encontrar o maior palíndromo feito do produto de dois números de 3 dígitos", function () {

  });

  it("deve encontrar o menor número divisível por cada um dos números de 1 a 20", function () {


  });

  it("deve encontrar a diferença entre a soma dos quadrados e o quadrado das somas", function () {

  });

  it("deve encontrar o 10001º primo", function () {

  });
  */
});
