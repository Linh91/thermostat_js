$( document ).ready(function() {

  var thermostat = new Thermostat();

  updateTempDisplay();

  $('#temp-up').click(function() {
    thermostat.up();
    updateTempDisplay();
    $('body').attr('id', thermostat.energyUsage());
  });

  $('#temp-down').click(function() {
    thermostat.down();
    updateTempDisplay();
    $('body').attr('id', thermostat.energyUsage());
  });

  $('#temp-reset').click(function() {
    thermostat.resetTemp();
    updateTempDisplay();
  });

  $('#temp-reset').click(function() {
    thermostat.resetTemp();
    updateTempDisplay();
  });

  $('#psm-on').click(function() {
    thermostat.powerModeOn();
    $('#pm-status').text('on')
  });

  $('#psm-off').click(function() {
    thermostat.powerModeOff();
    $('#pm-status').text('off')
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=a9425ba885c0ee1329824a322456ee93&units=metric', function(data){
    $('')
    $('#city').text(data.name + ' ' +data.main.temp + '°C');
  });

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=a9425ba885c0ee1329824a322456ee93&units=metric', function(data){
      $('#city').text(data.name + ' ' +data.main.temp + '°C');
    });

  })

  function updateTempDisplay() {
    $('#temperature').text(thermostat.displayTemperature() + '°C');
  }
});
