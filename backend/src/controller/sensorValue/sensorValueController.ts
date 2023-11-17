import getSensorValueUseCase from "../../domain/use_case/sensorValue/get";

export default function sensorController(
    DbRepository: any,
    DbRepositoryImpl: any
) {
    const repository = DbRepository(DbRepositoryImpl());

    const getValueSensor = (req: any, res: any, next: any) => {
        try {
            const sensorId: number = parseInt(req.query.sensorId);
            getSensorValueUseCase(sensorId, repository)
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
        getValueSensor
    };
}
