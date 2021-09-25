import { createSelector } from 'reselect';
import { State } from './machine.types';

export const machineState = (state: { machineApp: State }) => {
  return state && state.machineApp;
};

export const getMachineConfig = createSelector(
  machineState,
  (machine) => machine.config
);

export const getMachines = createSelector(
  machineState,
  (machine) => machine.machines
);

export const getAlertedMachines = createSelector(
  machineState,
  (machine) => machine.alertedMachines
);
