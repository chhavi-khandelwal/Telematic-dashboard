export interface MachineConfig {
  id: number;
  equipmentHeader: EquipmentHeader;
  location: Location;
  cumulativeIdleHours: CumulativeHours;
  cumulativeOperatingHours: CumulativeHours;
  distance: Distance;
  engineStatus: EngineStatus;
  fuelUsed: FuelUsed;
  fuelRemaining: FuelRemaining;
}

export interface MachineConfig {
  alert?: string;
}

export interface FuelRemaining {
  percent: number;
}

export interface FuelUsed {
  fuelUnits: string;
  fuelConsumed: number;
}

export interface EngineStatus {
  running: boolean;
}

export interface CumulativeHours {
  hour: number;
}

export interface Distance {
  odometerUnits: string;
  odometer: number;
}

export interface Location {
  latitude: number;
  longitude: number;
  altitude: number;
  altitudeUnits: string;
}

export interface EquipmentHeader {
  OEMName: string;
  model: string;
  serialNumber: string;
  snapshotTime: string;
}

export interface State {
  alertedMachines: MachineConfig[];
  machines: MachineConfig[];
  config: MachineConfig[];
}
