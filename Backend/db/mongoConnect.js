import mongoose from "mongoose"

export const connectDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(`Error connection to MongoDB`, error.message)
    }
}