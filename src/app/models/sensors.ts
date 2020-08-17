export interface sensor {
  _id: string;
  name: string;
  location: { longitude: number; latitude: number };
  active: boolean;
  minValue: number;
  maxValue: number;
}

export interface sensorBody {
  name: string;
  location: { longitude: number; latitude: number };
  active: boolean;
  minValue: number;
  maxValue: number;
}
