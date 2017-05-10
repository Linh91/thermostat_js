function Thermostat(){
  this._temp = 20;
}
Thermostat.prototype.up = function(number) {
  (this._temp += number ) ;
};
