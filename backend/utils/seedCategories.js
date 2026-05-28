const mongoose = require('mongoose');
const Category = require('../models/category');
require('dotenv').config();

const categories = [
    {
        name: "Web Development",
        description: "Master the art of web development! Learn how to build engaging, user-friendly websites and applications using a variety of technologies and frameworks. Dive into HTML, CSS, JavaScript, and more. Whether you're a beginner or seasoned developer, this course empowers you to create innovative web solutions from scratch."
    },
    {
        name: "Android Development",
        description: "Kotline and Swift are Famous Programming Language"
    },
    {
        name: "Cloud development",
        description: "This is Cloud course"
    },
    {
        name: "DevOps",
        description: "DevOps is a set of practices that combine software development (Dev) and IT operations to shorten the software development lifecycle and deliver high-quality software."
    },
    {
        name: "Data Engineering",
        description: "Learn the fundamentals of database design, management, and optimization. Dive into SQL, NoSQL."
    },
    {
        name: "Data science",
        description: "Explore data patterns, machine learning models, and statistical analysis to derive insights from complex datasets."
    },
    {
        name: "Algorithms",
        description: "Master complex problem-solving techniques and data structures to build efficient and scalable software systems."
    },
];

const seedCategories = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Connected to MongoDB for seeding...");

        for (const data of categories) {
            const existing = await Category.findOne({ name: data.name });
            if (!existing) {
                await Category.create(data);
                console.log(`Created category: ${data.name}`);
            } else {
                console.log(`Category already exists: ${data.name}`);
            }
        }

        console.log("Seeding completed successfully!");
        process.exit(0);
    } catch (error) {
        console.error("Error during seeding:", error);
        process.exit(1);
    }
};

seedCategories();
