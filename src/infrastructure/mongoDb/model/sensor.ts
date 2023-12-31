const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sensorSchema = new Schema(
    {
        value: Number,
        sensorId: Number,
    },
    { timestamps: true }
);

module.exports = mongoose.model("sensor", sensorSchema);