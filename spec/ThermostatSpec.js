describe("Theromostat", function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe("temperature", function(){

    it('has an initial temperature of 20 degrees', function(){
      expect(thermostat.currentTemperature()).toEqual(20);
    });
    it('has a minimum temperature of 10', function(){
      expect(thermostat.minTemperature).toEqual(10);
    });

  });

  describe("can change the temperature", function(){

    it("by increasing it", function(){
      thermostat.increaseTemperature(5);
      expect(thermostat.temperature).toEqual(25);
    });

    it("by decreasing it", function(){
      thermostat.decreaseTemperature(5);
      expect(thermostat.temperature).toEqual(15);
    });

    it("but can not go below 10 degrees", function(){
      expect(function () {thermostat.decreaseTemperature(11);}).toThrowError("Exceeds minimum temperature of 10");
    });

    it("but can not go above max temperature when Power Saving mode is on", function(){
      thermostat.changePowerSavingMode('ON')
      expect(function () {thermostat.increaseTemperature(6);}).toThrowError("Exceeds maximum temperature");
    });

    it("but can not go above max temperature when Power Saving mode is off", function(){
      thermostat.changePowerSavingMode('OFF')
      expect(function () {thermostat.increaseTemperature(13);}).toThrowError("Exceeds maximum temperature");
    });

  });

  describe("has a Power Saving mode", function(){
    it("and is ON by default", function(){
      expect(thermostat.isPowerSavingOn()).toEqual(true);
    });
    it("and returns true if its ON", function(){
      thermostat.changePowerSavingMode('ON');
      expect(thermostat.isPowerSavingOn()).toEqual(true);
    });
    it("and returns false if its OFF", function(){
      thermostat.changePowerSavingMode('OFF');
      expect(thermostat.isPowerSavingOn()).toEqual(false);
    });
  });

  describe("has a reset button", function(){
    it("and returns the temperature to 20 degrees", function(){
      thermostat.increaseTemperature(4);
      thermostat.resetThermostat();
      expect(thermostat.temperature).toEqual(20);
    });
  });
});
