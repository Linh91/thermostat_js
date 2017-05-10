describe('Thermostat', function(){
  var britishGas;
  beforeEach(function() {
    britishGas = new Thermostat();
  });

  describe('checks temp, ', function() {
    it('returns 20.', function() {
      expect(britishGas._temp).toEqual(20);
    });
  });

  describe('it increases temp,', function() {
    it('returns 21', function(){
      britishGas.up(1);
      expect(britishGas._temp).toEqual(21);
    });
  });

  describe('it decreases temp, ', function() {
    it('returns 19', function() {
      britishGas.down(1);
      expect(britishGas._temp).toEqual(19);
    });
  });

  describe('minimum temp', function() {
    it('is 10', function() {
      expect(britishGas._minTemp).toEqual(10);
    });

    it('cannot lower anymore', function(){
      britishGas.down(10)
      expect(function(){britishGas.down(1)}).toThrow('Minimum temp reached.');
    });

    it('can not be less than 10', function() {
      expect(function() {britishGas.down(11)}).toThrow('Minimum temp exceeded');
    })
  });

  
});
