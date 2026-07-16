import { env } from "./env";
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const con = await mongoose.connect(env.MONGO_URI);
        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
export default connectDB;