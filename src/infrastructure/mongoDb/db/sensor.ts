const sensor = require('../model/sensor');

export default function sensorValueRepository() {
    const monthStrings = [
        "",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const add = async (sensorValueEntity: any) => {
        return await sensor.insertMany(sensorValueEntity);
    };

    const findLastById = async (id: number) => {
        return await sensor
            .find({ sensorId: id })
            .sort({ createdAt: -1 })
            .limit(1);
    };

    const getGrafikByidDay = async (id: number) => {
        var start = new Date();
        start.setHours(0, 0, 0, 0);

        var end = new Date();
        end.setHours(23, 59, 59, 999);
        return await sensor.aggregate([
            {
                $match: {
                    $and: [
                        { sensorId: id },
                        { createdAt: { $gte: start, $lt: end } },
                    ],
                },
            },
            {
                $group: {
                    _id: {
                        year: { $year: "$createdAt" },
                        month: { $month: "$createdAt" },
                        day: { $dayOfMonth: "$createdAt" },
                        hour: { $hour: "$createdAt" },
                    },
                    data: { $avg: "$value" },
                },
            },
            {
                $project: {
                    label: "$_id.hour",
                    date: {
                        $concat: [
                            { $toString: "$_id.year" },
                            "/",
                            {
                                $cond: {
                                    if: {
                                        $lte: [{ $strLenCP: { $toString: "$_id.month" } }, 1],
                                    },
                                    then: { $concat: ["0", { $toString: "$_id.month" }] },
                                    else: { $toString: "$_id.month" },
                                },
                            },
                            "/",
                            {
                                $cond: {
                                    if: { $lte: [{ $strLenCP: { $toString: "$_id.day" } }, 1] },
                                    then: { $concat: ["0", { $toString: "$_id.day" }] },
                                    else: { $toString: "$_id.day" },
                                },
                            },
                            " ",
                            {
                                $cond: {
                                    if: {
                                        $lte: [{ $strLenCP: { $toString: "$_id.hour" } }, 1],
                                    },
                                    then: { $concat: ["0", { $toString: "$_id.hour" }] },
                                    else: { $toString: "$_id.hour" },
                                },
                            },
                        ],
                    },
                    data: { $round: ["$data", 2] },
                },
            },
            {
                $sort: { date: 1 },
            },
        ]);
    }

    const getGrafikByWeek = async (id: number) => {
        var date = new Date();
        const month = date.getMonth();
        const year = date.getFullYear();

        return await sensor.aggregate([
            {
                $match: {
                    $and: [
                        { id_sensor: id },
                        {
                            createdAt: {
                                $gte: new Date(year, month, 1),
                                $lt: new Date(year, month + 1, 0),
                            },
                        },
                        { status: "online" },
                    ],
                },
            },
            {
                $group: {
                    _id: {
                        year: { $year: "$createdAt" },
                        month: { $month: "$createdAt" },
                        day: { $dayOfMonth: "$createdAt" },
                    },
                    data: { $avg: "$value" },
                },
            },
            {
                $project: {
                    label: "$_id.day",
                    date: {
                        $concat: [
                            { $toString: "$_id.year" },
                            "/",
                            {
                                $cond: {
                                    if: {
                                        $lte: [{ $strLenCP: { $toString: "$_id.month" } }, 1],
                                    },
                                    then: { $concat: ["0", { $toString: "$_id.month" }] },
                                    else: { $toString: "$_id.month" },
                                },
                            },
                            "/",
                            {
                                $cond: {
                                    if: { $lte: [{ $strLenCP: { $toString: "$_id.day" } }, 1] },
                                    then: { $concat: ["0", { $toString: "$_id.day" }] },
                                    else: { $toString: "$_id.day" },
                                },
                            },
                        ],
                    },
                    data: { $round: ["$data", 2] },
                },
            },
            {
                $sort: { date: 1 },
            },
        ]);
    }
    const getGrafikByMonth = async (id: number) => {
        var date = new Date();
        const month = date.getMonth();
        const year = date.getFullYear();
        return await sensor.aggregate([
            {
                $match: {
                    $and: [
                        { sensorId: id },
                        {
                            createdAt: {
                                $gte: new Date(year, month, 1),
                                $lt: new Date(year, month + 1, 0),
                            },
                        },
                        { status: "online" },
                    ],
                },
            },
            {
                $group: {
                    _id: {
                        year: { $year: "$createdAt" },
                        month: { $month: "$createdAt" },
                        week: {
                            $cond: {
                                if: {
                                    $gte: [
                                        {
                                            $floor: { $divide: [{ $dayOfMonth: "$createdAt" }, 7] },
                                        },
                                        1,
                                    ],
                                },
                                then: {
                                    $floor: { $divide: [{ $dayOfMonth: "$createdAt" }, 7] },
                                },
                                else: 1,
                            },
                        },
                    },
                    data: { $avg: "$value" },
                },
            },
            {
                $project: {
                    label: {
                        $concat: [
                            { $toString: "$_id.month" },
                            " - ",
                            { $toString: "$_id.week" },
                        ],
                    },
                    date: {
                        $concat: [
                            "Minggu : ",
                            { $toString: "$_id.year" },
                            "/",
                            {
                                $cond: {
                                    if: {
                                        $lte: [{ $strLenCP: { $toString: "$_id.month" } }, 1],
                                    },
                                    then: { $concat: ["0", { $toString: "$_id.month" }] },
                                    else: { $toString: "$_id.month" },
                                },
                            },
                            "/",
                            { $toString: "$_id.week" },
                        ],
                    },
                    data: { $round: ["$data", 2] },
                },
            },
            {
                $sort: { date: 1 },
            },
        ]);
    }
    const getGrafikByYear = async (id: number) => {
        var date = new Date();
        const year = date.getFullYear();
        return await sensor.aggregate([
            {
                $match: {
                    $and: [
                        { sensorId: id },
                        {
                            createdAt: {
                                $gte: new Date(year, 1, 1),
                                $lt: new Date(year, 12, 0),
                            },
                        },
                        { status: "online" },
                    ],
                },
            },
            {
                $group: {
                    _id: {
                        year: { $year: "$createdAt" },
                        month: { $month: "$createdAt" },
                    },
                    data: { $avg: "$value" },
                },
            },
            {
                $project: {
                    label: {
                        $concat: [
                            {
                                $arrayElemAt: [monthStrings, "$_id.month"],
                            },
                        ],
                    },
                    date: {
                        $concat: [
                            { $toString: "$_id.year" },
                            "/",
                            { $toString: "$_id.month" },
                        ],
                    },
                    data: { $round: ["$data", 2] },
                    count: 1,
                },
            },
            {
                $sort: { date: 1 },
            },
        ]);
    }

    return {
        add,
        findLastById,
        getGrafikByidDay,
        getGrafikByWeek,
        getGrafikByMonth,
        getGrafikByYear,

    };
}
