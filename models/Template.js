const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Template = sequelize.define(
  "Template",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    slug: {
      type: DataTypes.STRING,
      allowNull: false
    },

    layoutType: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "classic"
    },

    layoutConfig: {
      type: DataTypes.JSON,
      allowNull: false
    },

    usageCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },

    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["slug"]
      }
    ]
  }
);

module.exports = Template;
