function Thermostat(){
  this._temp = 20;
  this._minTemp = 10;
  this._maxTemp = 25;
};

Thermostat.prototype.up = function(number = 1) {
  if (this._temp >= this._maxTemp) {
    throw 'Max temp reached';
  }
  else {
    (this._temp += number);
  }
};

Thermostat.prototype.down = function(number = 1) {
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

Thermostat.prototype.displayTemperature = function() {
  return this._temp;
};

Thermostat.prototype.powerModeOn = function () {
  this._maxTemp = 25;
};

Thermostat.prototype.powerModeOff = function () {
  this._maxTemp = 32;
};

Thermostat.prototype.resetTemp = function () {
  this._temp = 20;
};

Thermostat.prototype.energyUsage = function () {
  if (this._temp <= 18) {
    return 'low';
  }
  else if (this._temp <= 25){
    return 'medium';
  }
  else {
    return 'high'
  }
};
