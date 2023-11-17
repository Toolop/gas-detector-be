export const Base_URL = "http://localhost:8080/api/v1"

export const user ={
  get: Base_URL + "/user/1",
}

export const room = {
  get: Base_URL + "/rooms?userId=",
  post: Base_URL + "/rooms",
  put: Base_URL + "/rooms",
  delete: Base_URL + "/rooms",
}

export const sensor = {
  get: Base_URL + "/sensors?roomId=",
  detail: Base_URL + "/sensors/",
  post: Base_URL + "/sensors",
  put: Base_URL + "/sensors",
  delete: Base_URL + "/sensors",
}

export const brokerSensor = {
  get: Base_URL + "/sensor/values?sensorId=",
}

export const condition = {
  get: Base_URL + "/sensor/conditions/",
  post: Base_URL + "/sensor/conditions",
  put: Base_URL + "/sensor/conditions/",
  delete: Base_URL + "/sensor/conditions/",
}