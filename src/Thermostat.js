var Thermostat = function(){
  this.temperature = 20;
  this.minTemperature = 10;
  this.maxTemperature = 25;
}

Thermostat.prototype.currentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.increaseTemperature = function(value = 1){
  if ((this.temperature + value) > this.maxTemperature ) {throw Error("Exceeds maximum temperature")};
  this.temperature = this.temperature + value;
};

Thermostat.prototype.decreaseTemperature = function(value = 1){
  if ((this.temperature - value) < this.minTemperature) {throw Error("Exceeds minimum temperature of 10");}
  this.temperature = this.temperature - value;
};

Thermostat.prototype.isPowerSavingOn = function(){
  if (this.maxTemperature == 25) {return true;}
  else { return false;}
};

Thermostat.prototype.changePowerSavingMode = function(button){
  if (button === 'ON') { this.maxTemperature = 25 }
  if (button === 'OFF') { this.maxTemperature = 32 }
};

Thermostat.prototype.resetThermostat = function(){
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function(){
  if (this.temperature > 25) {return 'high-usage'}
  if (this.temperature < 18) {return 'low-usage'}
  else {return "medium-usage"}
};
