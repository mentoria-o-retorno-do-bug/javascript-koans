function Muppet(age, hobby) {
  this.age = age;
  this.hobby = hobby;

  this.answerNanny = function(){
	return "Everything's cool!";
  }
}

function SwedishChef(age, hobby, mood) {
  Muppet.call(this, age, hobby);
  this.mood = mood;

  this.cook = function() {
    return "Mmmm soup!";
  }
}

SwedishChef.prototype = new Muppet();

describe("Sobre herança", function() {
  beforeEach(function(){
    this.muppet = new Muppet(2, "coding");
	this.swedishChef = new SwedishChef(2, "cooking", "chillin");
  });

  it("deve ser capaz de chamar um método no objeto derivado", function() {
    expect(this.swedishChef.cook()).toEqual(FILL_ME_IN);
  });

  it("deve ser capaz de chamar um método no objeto base", function() {
    expect(this.swedishChef.answerNanny()).toEqual(FILL_ME_IN);
  });

  it("deve definir parâmetros do construtor no objeto base", function() {
    expect(this.swedishChef.age).toEqual(FILL_ME_IN);
    expect(this.swedishChef.hobby).toEqual(FILL_ME_IN);
  });

  it("deve definir parâmetros do construtor no objeto derivado", function() {
    expect(this.swedishChef.mood).toEqual(FILL_ME_IN);
  });
});

// http://javascript.crockford.com/prototypal.html
Object.prototype.beget = function () {
  function F() {}
  F.prototype = this;
  return new F();
}

function Gonzo(age, hobby, trick) {
  Muppet.call(this, age, hobby);
  this.trick = trick;

  this.doTrick = function() {
    return this.trick;
  }
}

//não é mais necessário chamar o construtor Muppet (tipo base)
Gonzo.prototype = Muppet.prototype.beget();

describe("Sobre a melhoria de herança de Crockford", function() {
  beforeEach(function(){
  this.gonzo = new Gonzo(3, "daredevil performer", "eat a tire");
  });

  it("deve ser capaz de chamar um método no objeto derivado", function() {
    expect(this.gonzo.doTrick()).toEqual(FILL_ME_IN);
  });

  it("deve ser capaz de chamar um método no objeto base", function() {
    expect(this.gonzo.answerNanny()).toEqual(FILL_ME_IN);
  });

  it("deve definir parâmetros do construtor no objeto base", function() {
    expect(this.gonzo.age).toEqual(FILL_ME_IN);
    expect(this.gonzo.hobby).toEqual(FILL_ME_IN);
  });

  it("deve definir parâmetros do construtor no objeto derivado", function() {
    expect(this.gonzo.trick).toEqual(FILL_ME_IN);
  });
});
