const mongoose = require('mongoose');
require('dotenv').config();


exports.connectDB = async () => {
    const databaseUrl = process.env.DATABASE_URL;

    if (!databaseUrl) {
        throw new Error('DATABASE_URL is missing in environment variables');
    }

    try {
        await mongoose.connect(databaseUrl);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed');
        if (error.name === 'MongooseServerSelectionError') {
            console.error('Error: Could not connect to MongoDB. Please ensure your MongoDB service is running (run `net start MongoDB` in terminal) or that your connection string is correct.');
        } else {
            console.error(error.message);
        }
        throw error;
    }
};

