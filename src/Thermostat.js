var Thermostat = function(){
  this.temperature = 20;
  this.minTemperature = 10;
}

Thermostat.prototype.currentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.increaseTemperature = function(value){
  this.temperature = this.temperature + value;
};

Thermostat.prototype.decreaseTemperature = function(value){
  if ((this.temperature - value) < this.minTemperature) {throw Error("Exceeds minimum temperature of 10");}
  this.temperature = this.temperature - value;
};
