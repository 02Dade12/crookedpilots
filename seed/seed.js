const sequelize = require('../config/connection');
const { User, Contacts } = require('../model');

const contactsData = require('./contactsData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Contacts.bulkCreate(contactsData);

    process.exit(0);
};
seedDatabase();