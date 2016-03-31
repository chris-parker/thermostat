function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
  this.MAX_POWER_SAVE_MODE = 25;
  this.MAX_POWER_SAVE_MODE_OFF = 32;
}

Thermostat.prototype.getTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.increase = function() {
  if (this.isMaximum()) {
    return;
  }
  this.temperature += 1;
  };

Thermostat.prototype.decrease = function() {
  if (this.isMinimum()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimum = function() {
  this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.isMaximum = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_POWER_SAVE_MODE_OFF;
  }
  return this.temperature === this.MAX_POWER_SAVE_MODE;
};
