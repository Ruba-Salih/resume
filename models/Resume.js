const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Resume = sequelize.define("Resume", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false
  },

  data: {
    type: DataTypes.STRING,
    allowNull: false
  }

});

module.exports = Resume;
