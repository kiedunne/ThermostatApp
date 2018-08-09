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
  });


});
