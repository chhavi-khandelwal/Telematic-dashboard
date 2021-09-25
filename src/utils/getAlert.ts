import { ALERT } from 'constants/enum';
import { MachineConfig } from 'store/machine/machine.types';

export const setAlert = (mc: MachineConfig) => {
  const idleHours = mc.cumulativeIdleHours.hour;
  const operatingHours = mc.cumulativeOperatingHours.hour;
  if (operatingHours / idleHours < 3) {
    mc.alert = ALERT.IDLE;
    return mc;
  }
  const fuelRemaining = mc.fuelRemaining.percent;

  if (fuelRemaining < 5) {
    mc.alert = ALERT.FUEL_LIMIT;
    return mc;
  }

  if (idleHours < 5 || operatingHours < 5) {
    mc.alert = ALERT.WEEKEND_OFF;
    return mc;
  }
  const engineStatus = mc.engineStatus.running;

  if (!engineStatus) {
    mc.alert = ALERT.ENGINE_FAILED;
    return mc;
  }
  return mc;
};
