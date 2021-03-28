const { User } = require('../models');

const userData = [{
        username: 'Justin775',
        password: 'lol52590'

    },
    {
        username: 'Savoy730',
        password: 'lol73094'
    },
    {
        username: 'August547',
        password: 'lol81221'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;