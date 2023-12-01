export const Base_URL = "https://sucofindo.agriciatech.com/backend/api/v1";

export const login = {
  post: Base_URL + "/login",
};
export const user = {
  get: Base_URL + "/user",
};
export const room = {
  detail: Base_URL + "/rooms/",
  get: Base_URL + "/rooms?userId=",
  post: Base_URL + "/rooms",
  put: Base_URL + "/rooms",
  delete: Base_URL + "/rooms",
};

export const sensor = {
  get: Base_URL + "/sensors?roomId=",
  detail: Base_URL + "/sensors/",
  post: Base_URL + "/sensors",
  put: Base_URL + "/sensors",
  delete: Base_URL + "/sensors",
};

export const brokerSensor = {
  get: Base_URL + "/sensor/values?sensorId=",
};

export const condition = {
  get: Base_URL + "/sensor/conditions/",
  post: Base_URL + "/sensor/conditions",
  put: Base_URL + "/sensor/conditions/",
  delete: Base_URL + "/sensor/conditions/",
};

export const grafik = {
  get: Base_URL + "/sensor/grafik?sensorId=",
};
