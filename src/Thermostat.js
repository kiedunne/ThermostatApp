var Thermostat = function(){
  this.temperature = 20;
}

Thermostat.prototype.currentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.increaseTemperature = function(value){
  this.temperature = this.temperature + value;
};

Thermostat.prototype.decreaseTemperature = function(value){
  this.temperature = this.temperature - value;
};
