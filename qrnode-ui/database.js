const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './testdatabase' // Path to your SQLite database file
});

// Define the Staff model based on your dbstructure-testdatabase.txt
const Staff = sequelize.define('staff', {
  staff_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  full_name: { type: DataTypes.TEXT },
  phone_number: { type: DataTypes.TEXT },
  address: { type: DataTypes.TEXT },
  email: { type: DataTypes.TEXT, unique: true, allowNull: false },
  staff_type: { type: DataTypes.TEXT, allowNull: false },
  password: { type: DataTypes.TEXT, allowNull: false },
  username: { type: DataTypes.TEXT, unique: true, allowNull: false }
}, {
  tableName: 'staff',
  timestamps: false, // Assuming you don't have createdAt/updatedAt columns
});

module.exports = { sequelize, Staff };