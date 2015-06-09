describe("Bar", function() {
var bar;

beforeEach(function() {
  bar = new Bar();

});


describe('squared', function() {

  it('should square a number', function() {
    expect(bar.squared(2)).to.equal(4);
  })

});

describe('cubed', function() {
  it('should cube a number', function() {
    expect(bar.cubed(3)).to.equal(27);
  });

});



describe('exponentOf', function() {
  it('should return a number raised to given exponent', function() {
    var square = bar.exponentOf(2);
    expect(square(2)).to.equal(4);

  });
});


describe('reverseString', function() {
  it('should reverse a string', function() {
    expect(bar.reverseString('horse')).to.equal('esroh');
  });
});


describe('cipher', function() {
  it('should cipher a string', function() {
    expect(bar.cipher('horse')).to.equal('ÌÓÖ×É');
  });
});

describe('decipher', function() {
  it('should decipher a string', function() {
    expect(bar.decipher('ÌÓÖ×É')).to.equal('horse');
  });
});


describe('rot13', function() {
  it('should turn a sentence into a character code string', function() {
    expect(bar.rot13('the horse was a liar')).to.equal('gur ubefr jnf n yvne');
  });
});












});
