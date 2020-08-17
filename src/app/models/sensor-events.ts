export interface sensorEvent {
  _id: string;
  sensorId: string;
  value: number;
}

export interface sensorEventBody {
  sensorId: string;
  value: number;
}
