const condition = (upperDanger: number,
    upperWarning: number,
    lowerDanger: number,
    lowerWarning: number,
    sensorId: number) => {
    return {
        upperDanger,
        upperWarning,
        lowerDanger,
        lowerWarning,
        sensorId,
    };
};

export default condition;
