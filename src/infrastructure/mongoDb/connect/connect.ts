import mongoose from 'mongoose';

const connectMongoose = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
    } catch (err) {
        console.log(err)
    }
}
export default connectMongoose;
