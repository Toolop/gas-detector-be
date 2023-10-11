const sensor = require('../model/sensor');

export default function sensorValueRepository() {
    const add = async (sensorValueEntity: any) => {
        return await sensor.create(sensorValueEntity);
    };

    const findLastById = async (id: number) => {
        return await sensor
            .find({ sensorId: id })
            .sort({ createdAt: -1 })
            .limit(1);
    };


    return {
        add,
        findLastById,
    };
}
