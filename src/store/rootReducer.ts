import { combineReducers } from 'redux';
import { machineReducer } from './machine/machine.reducer';

const rootReducer = combineReducers({
  machineApp: machineReducer,
});

export default rootReducer;
