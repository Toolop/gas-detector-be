import mongoose from 'mongoose';
import config from "../../../config/config";

const connectMongoose = async () => {
    try {
        await mongoose.connect(config.mongodb);
    } catch (err) {
        console.log(err)
    }
}
export default connectMongoose;
