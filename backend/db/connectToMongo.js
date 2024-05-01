import mongoose from 'mongoose'

const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo DB connection SUCCESSFUL")
    }
    catch (error) {
        console.log(`Error connection to MongoDB: ${error}`)
    }
}

export default connectToMongo