"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var bcrypt = require("bcrypt");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var createType, hashedPassword, userInsert, roomSensor, roomonuser, sensorInsert, conditionInsert;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.sensorType.createMany({
                        data: [
                            {
                                name: "environment",
                            },
                            {
                                name: "battery",
                            },
                            {
                                name: "gas",
                            },
                        ],
                    })];
                case 1:
                    createType = _a.sent();
                    return [4 /*yield*/, bcrypt.hash("sucofindo", 10)];
                case 2:
                    hashedPassword = _a.sent();
                    return [4 /*yield*/, prisma.user.createMany({
                            data: [
                                {
                                    username: "sucofindo",
                                    email: "sucofindo@gmail.com",
                                    name: "sucofindo",
                                    password: hashedPassword,
                                },
                            ],
                            skipDuplicates: true, // Skip 'Bobo'
                        })];
                case 3:
                    userInsert = _a.sent();
                    return [4 /*yield*/, prisma.room.createMany({
                            data: [{ name: "room 1" }],
                            skipDuplicates: true, // Skip 'Bobo'
                        })];
                case 4:
                    roomSensor = _a.sent();
                    return [4 /*yield*/, prisma.roomOnUser.createMany({
                            data: [{ roomId: 1, userId: 1 }],
                            skipDuplicates: false, // Skip 'Bobo'
                        })];
                case 5:
                    roomonuser = _a.sent();
                    return [4 /*yield*/, prisma.sensor.createMany({
                            data: [
                                {
                                    name: "Temperature",
                                    calibration: "x",
                                    roomId: 1,
                                    createdAt: "2023-10-16T22:35:48.854Z",
                                    updatedAt: "2023-10-16T22:35:48.854Z",
                                    sensorTypeId: 1,
                                },
                                {
                                    name: "Humidity",
                                    calibration: "x",
                                    roomId: 1,
                                    createdAt: "2023-10-16T22:36:07.703Z",
                                    updatedAt: "2023-10-16T22:36:07.703Z",
                                    sensorTypeId: 1,
                                },
                                {
                                    name: "Battery",
                                    calibration: "x",
                                    roomId: 1,
                                    createdAt: "2023-10-16T22:36:28.261Z",
                                    updatedAt: "2023-10-16T22:36:28.261Z",
                                    sensorTypeId: 2,
                                },
                                {
                                    name: "SO₂",
                                    calibration: "x",
                                    roomId: 1,
                                    createdAt: "2023-10-16T22:37:02.938Z",
                                    updatedAt: "2023-10-16T22:37:02.938Z",
                                    sensorTypeId: 3,
                                },
                                {
                                    name: "CO",
                                    calibration: "x",
                                    roomId: 1,
                                    createdAt: "2023-10-16T22:37:11.886Z",
                                    updatedAt: "2023-10-16T22:37:11.886Z",
                                    sensorTypeId: 3,
                                },
                                {
                                    name: "NO₂",
                                    calibration: "x",
                                    roomId: 1,
                                    createdAt: "2023-10-16T22:37:21.305Z",
                                    updatedAt: "2023-10-16T22:37:21.305Z",
                                    sensorTypeId: 3,
                                },
                                {
                                    name: "NH₃",
                                    calibration: "x",
                                    roomId: 1,
                                    createdAt: "2023-10-16T22:39:38.151Z",
                                    updatedAt: "2023-10-16T22:39:38.151Z",
                                    sensorTypeId: 3,
                                },
                                {
                                    name: "H₂S",
                                    calibration: "x",
                                    roomId: 1,
                                    createdAt: "2023-10-16T22:42:33.282Z",
                                    updatedAt: "2023-10-16T22:42:33.282Z",
                                    sensorTypeId: 3,
                                },
                                {
                                    name: "dust",
                                    calibration: "x",
                                    roomId: 1,
                                    createdAt: "2023-10-16T22:42:40.983Z",
                                    updatedAt: "2023-10-16T22:42:40.983Z",
                                    sensorTypeId: 3,
                                },
                            ],
                            skipDuplicates: false, // Skip 'Bobo'
                        })];
                case 6:
                    sensorInsert = _a.sent();
                    return [4 /*yield*/, prisma.condition.createMany({
                            data: [
                                {
                                    upperDanger: 50,
                                    upperWarning: 100,
                                    lowerDanger: 10,
                                    lowerWarning: 25,
                                    createdAt: "2023-10-16T22:43:06.761Z",
                                    updatedAt: "2023-10-17T09:29:58.504Z",
                                    sensorId: 1,
                                },
                                {
                                    upperDanger: 50,
                                    upperWarning: 100,
                                    lowerDanger: 10,
                                    lowerWarning: 20,
                                    createdAt: "2023-10-16T22:43:13.292Z",
                                    updatedAt: "2023-10-16T22:43:13.292Z",
                                    sensorId: 2,
                                },
                                {
                                    upperDanger: 50,
                                    upperWarning: 100,
                                    lowerDanger: 10,
                                    lowerWarning: 20,
                                    createdAt: "2023-10-16T22:43:17.329Z",
                                    updatedAt: "2023-10-16T22:43:17.329Z",
                                    sensorId: 3,
                                },
                                {
                                    upperDanger: 50,
                                    upperWarning: 100,
                                    lowerDanger: 10,
                                    lowerWarning: 20,
                                    createdAt: "2023-10-16T22:43:23.471Z",
                                    updatedAt: "2023-10-16T22:43:23.471Z",
                                    sensorId: 4,
                                },
                                {
                                    upperDanger: 50,
                                    upperWarning: 100,
                                    lowerDanger: 10,
                                    lowerWarning: 20,
                                    createdAt: "2023-10-16T22:43:27.009Z",
                                    updatedAt: "2023-10-16T22:43:27.009Z",
                                    sensorId: 5,
                                },
                                {
                                    upperDanger: 50,
                                    upperWarning: 100,
                                    lowerDanger: 10,
                                    lowerWarning: 20,
                                    createdAt: "2023-10-16T22:43:30.937Z",
                                    updatedAt: "2023-10-16T22:43:30.937Z",
                                    sensorId: 6,
                                },
                                {
                                    upperDanger: 50,
                                    upperWarning: 100,
                                    lowerDanger: 10,
                                    lowerWarning: 20,
                                    createdAt: "2023-10-16T22:43:35.326Z",
                                    updatedAt: "2023-10-16T22:43:35.326Z",
                                    sensorId: 7,
                                },
                                {
                                    upperDanger: 50,
                                    upperWarning: 100,
                                    lowerDanger: 10,
                                    lowerWarning: 20,
                                    createdAt: "2023-10-16T22:43:38.706Z",
                                    updatedAt: "2023-10-16T22:43:38.706Z",
                                    sensorId: 8,
                                },
                                {
                                    upperDanger: 50,
                                    upperWarning: 100,
                                    lowerDanger: 10,
                                    lowerWarning: 20,
                                    createdAt: "2023-10-16T22:43:42.208Z",
                                    updatedAt: "2023-10-16T22:43:42.208Z",
                                    sensorId: 9,
                                },
                            ],
                            skipDuplicates: false, // Skip 'Bobo'
                        })];
                case 7:
                    conditionInsert = _a.sent();
                    console.log({
                        createType: createType,
                        userInsert: userInsert,
                        roomSensor: roomSensor,
                        roomonuser: roomonuser,
                        sensorInsert: sensorInsert,
                        conditionInsert: conditionInsert,
                    });
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })
    .catch(function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
