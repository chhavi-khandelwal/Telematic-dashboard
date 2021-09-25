import actionCreatorFactory from 'typescript-fsa';
import { MachineConfig } from './machine.types';

const actionCreator = actionCreatorFactory('APP');

export const updateAlertedMachines = actionCreator<MachineConfig[]>(
  'UPDATE_ALERTED_MACHINES'
);

export const updateMachines = actionCreator<MachineConfig[]>('UPDATE_MACHINES');
export const removeAlertedMachines = actionCreator('REMOVE_ALERTED_MACHINES');
export const addAlertedMachines = actionCreator<MachineConfig[]>(
  'ADD_ALERTED_MACHINES'
);
