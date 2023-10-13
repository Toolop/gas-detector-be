import getGrafikUseCase from "../../domain/use_case/grafik/grafikUseCase";

export default function sensorController(
    DbRepository: any,
    DbRepositoryImpl: any
) {
    const dbRepository = DbRepository(DbRepositoryImpl());

    const getGrafikSensor = (req: any, res: any, next: any) => {
        try {
            const sensorId = parseInt(req.query.sensorId);
            const getDateQuery = req.query.getDateQuery;
            getGrafikUseCase(
                sensorId,
                getDateQuery,
                dbRepository
            )
                .then((grafik: any) => {
                    res.status(200);
                    res.json(grafik);
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
        getGrafikSensor,
    };
}
