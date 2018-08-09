$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').click(function (){
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('#temp-down').click(function (){
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('#reset').click(function (){
    thermostat.resetThermostat();
    updateTemperature();
  });

  $('#powersaver-on').click(function (){
    thermostat.changePowerSavingMode('ON');
    updateTemperature();
  });

  $('#powersaver-off').click(function (){
    thermostat.changePowerSavingMode('OFF');
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  };
});
