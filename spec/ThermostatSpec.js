describe("Theromostat", function(){

  var thermostat;

  describe("initial temperature", function(){

    thermostat = new Thermostat();

    it('has an initial temperature of 20 degrees', function(){
      expect(thermostat.initialTemperature()).toEqual(20);
    });

  });

});
