import { Action } from 'redux';
import { isType } from 'typescript-fsa';
import { data } from './data';
import * as actions from './machine.actions';
import { State } from './machine.types';

export const INITIAL_STATE: State = {
  config: [],
  machines: data,
  alertedMachines: [],
};

export const machineReducer = (state = INITIAL_STATE, action: Action) => {
  if (isType(action, actions.updateAlertedMachines)) {
    return {
      ...state,
      alertedMachines: [...action.payload],
    };
  }

  if (isType(action, actions.removeAlertedMachines)) {
    return {
      ...state,
      alertedMachines: [],
    };
  }

  if (isType(action, actions.addAlertedMachines)) {
    return {
      ...state,
      alertedMachines: [...state.alertedMachines, ...action.payload],
    };
  }

  if (isType(action, actions.updateMachines)) {
    return {
      ...state,
      machines: [
        ...state.machines.map((machine) => {
          if (machine.id === action.payload[0].id) {
            return action.payload[0];
          }
          return machine;
        }),
      ],
    };
  }

  return state;
};
