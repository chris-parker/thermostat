describe('thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('can increase the temperature', function() {
    thermostat.increase();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it('can decrease the temperature', function() {
    thermostat.decrease();
    expect(thermostat.getTemperature()).toEqual(19);
  });

  it('has a minimum temperature of 10 degrees', function() {
    for (var i = 0; i < 9; i++) {
      thermostat.decrease();
    }
    expect(thermostat.getTemperature()).toBeGreaterThan(9);
  });

  it('has a power saving mode', function() {
    expect(thermostat.isPowerSavingModeOn()).toBeTruthy();
  });

  it('has max temp of 25 when in power saving mode', function() {
    for (var i = 0; i < 8; i++) {
      thermostat.increase();
    }
    expect(thermostat.getTemperature()).toEqual(25);
  })

  it('has max temp of 32 when not in power saving mode', function() {
    thermostat.switchPowerSavingModeOff();
    for (var i = 0; i < 15; i++) {
      thermostat.increase();
    }
    expect(thermostat.getTemperature()).toEqual(32);
  });

});
