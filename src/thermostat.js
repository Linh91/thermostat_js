function Thermostat(){
  this._temp = 20;
  this._minTemp = 10;
}

Thermostat.prototype.up = function(number) {
  (this._temp += number);
};

Thermostat.prototype.down = function(number) {
  if (this._temp === this._minTemp){
    throw  'Minimum temp reached.';
  } else {
      this._temp -= number;}
};
