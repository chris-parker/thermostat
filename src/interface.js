$( document ).ready(function() {
  thermostat = new Thermostat();
  updateTemperature();

  var params = { "appid":"6e22721b5b6b35d9917593df89de104a", "q":"Tokyo", "units":"metric" }

  function updateTemperature() {
    $( '#display' ).html(thermostat.getTemperature());
    $( '#display' ).attr('class', thermostat.energyUsage());
    $( '#display' ).addClass( "display" );
  }

  $( '#up' ).on('click', function() {
    thermostat.increase();
    updateTemperature();
  });

  $( '#down' ).on('click', function() {
    thermostat.decrease();
    updateTemperature();
  });

  $( '#PSMon' ).on('click', function() {
    thermostat.switchPowerSavingModeOn();
    updateTemperature();
    $( '#confirmation' ).html('PSM is on');
  });

  $( '#PSMoff' ).on('click', function() {
    thermostat.switchPowerSavingModeOff();
    $( '#confirmation' ).html('PSM is off');
  });

  $( '#reset' ).on('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
    $( '#confirmation' ).html('PSM is on');
  });

  function updateWeather() {
    $.get("http://api.openweathermap.org/data/2.5/weather", params, function( data ) {
    $( '#cityname' ).html(data.name);
    $( '#temperature' ).html(data.main.temp + "ºC");
  });

}

  $( '#submit' ).on('click', function() {
    var cityname = $( '#cityinput' ).val();
    params.q = cityname;
    updateWeather();
  });

});
