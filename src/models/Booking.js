const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Booking = sequelize.define('booking', {
    userId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hotelId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    checkIn: {
      type: DataTypes.STRING,
      allowNull: false
    },
    checkOut: {
      type: DataTypes.STRING,
      allowNull: false
  },

});

module.exports = Booking;