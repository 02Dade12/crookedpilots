const User = require('./User');
const Contacts = require('./Contacts');

User.hasMany(Contacts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Contacts.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Contacts };