const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/user');

async function checkUsers() {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Connected to DB");

        const userCount = await User.countDocuments();
        console.log(`Total Users: ${userCount}`);

        const users = await User.find({}, { firstName: true, lastName: true, email: true, accountType: true });
        users.forEach(user => {
            console.log(`User: ${user.firstName} ${user.lastName}, Email: ${user.email}, Role: ${user.accountType}`);
        });

        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

checkUsers();
