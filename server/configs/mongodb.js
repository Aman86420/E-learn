import mongoose from "mongoose";

// Connect to the MongoDB database
const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log('Database Connected'))

    // Ensure the database name is inserted correctly before query parameters
    const uriParts = process.env.MONGODB_URI.split('?');
    const connectionString = uriParts[0].endsWith('/') 
        ? `${uriParts[0]}lms` 
        : `${uriParts[0]}/lms`;
    const finalUri = uriParts.length > 1 ? `${connectionString}?${uriParts[1]}` : connectionString;

    await mongoose.connect(finalUri)

}

export default connectDB