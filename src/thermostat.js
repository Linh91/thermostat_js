function Thermostat(){
  this._temp = 20;
  this._minTemp = 10;
  this._maxTemp = 25;
};

Thermostat.prototype.up = function(number) {
  (this._temp += number);
};

Thermostat.prototype.down = function(number) {
  if (this._temp === this._minTemp) {
    throw  'Minimum temp reached.';
  }
  else if (this._minTemp > (this._temp - number)) {
    throw 'Minimum temp exceeded';
  }
  else {
    this._temp -= number;
  }
};
Thermostat.prototype.powerModeOn = function () {
  this._maxTemp = 25;
};
Thermostat.prototype.powerModeOff = function () {
  this._maxTemp = 32;
};
