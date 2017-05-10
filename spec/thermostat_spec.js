describe('Thermostat', function(){
  var britishGas;
  beforeEach(function() {
    britishGas = new Thermostat();
  });

  describe('checks temp, ', function() {
    it('returns 20.', function() {
      expect(britishGas._temp).toEqual(20)
    });
  });
});
