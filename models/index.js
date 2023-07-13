const User = require('./User');
const Book = require('./Book');
const History = require('./History');

User.hasMany(Book, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Book.belongsTo(User, {
  foreignKey: 'user_id'
});

User.belongsToMany(Book, {
  // Define the third table needed to store the foreign keys
  through: {
    model: History,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'users'
})

Book.belongsToMany(User, {
  // Define the third table needed to store the foreign keys
  through: {
    model: History,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'books'
});



module.exports = { User, Book, History };
