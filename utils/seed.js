const { User, Thought, Reaction } = require('../models');
const connection = require('../config/connection');
const mongoose = require('mongoose');

const user = [
    {
        username: "Patrick",
        email: "po39dea@gmail.com",
        thought: [],
    },
];

console.log(connection);

connection.once('open', async () => {
    console.log('connected');

    await User.deleteMany({});

    await User.collection.insertMany(users);

    console.table(users);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});