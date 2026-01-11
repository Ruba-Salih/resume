const User = require("./User");
const Resume = require("./Resume");
const Template = require("./Template");

// Relationships
User.hasMany(Resume, { foreignKey: "userId" });
Resume.belongsTo(User, { foreignKey: "userId" });

Template.hasMany(Resume, { foreignKey: "templateId" });
Resume.belongsTo(Template, { foreignKey: "templateId" });

module.exports = {
  User,
  Resume,
  Template
};
