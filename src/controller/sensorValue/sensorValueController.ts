import addSensorValueUseCase from "../../domain/use_case/sensorValue/add";

export default function sensorController(
    DbRepository: any,
    DbRepositoryImpl: any
) {
    const dbRepository = DbRepository(DbRepositoryImpl());

    const addValueSensor = (req: any, res: any, next: any) => {
        try {
            const value = 0;
            const sensorId = 1;
            addSensorValueUseCase(value, sensorId, DbRepository)
                .then((room: any) => {
                    res.status(201);
                    res.json(room);
                })
                .catch((err: any) => {
                    res.status(400);
                    res.send(`${err}`);
                });
        } catch (err) {
            res.status(400);
            res.send(`${err}`);
        }
    };

    return {
        addValueSensor
    };
}
