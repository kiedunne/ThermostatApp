$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=bf2af1e7a6110d131268a1c3bdb9606f&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })

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
