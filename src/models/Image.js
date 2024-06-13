const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Image = sequelize.define('image', {
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },

    hotelId: {
      type: DataTypes.STRING,
      allowNull: false
    },
});

module.exports = Image;