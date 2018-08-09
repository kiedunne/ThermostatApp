describe("Theromostat", function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe("initial temperature", function(){

    it('has an initial temperature of 20 degrees', function(){
      expect(thermostat.currentTemperature()).toEqual(20);
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
  });

});
