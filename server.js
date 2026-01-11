const sequelize = require("./config/database");
require("./models");

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });

    console.log("✅ Database synced");
  } catch (err) {
    console.error(err);
  }
})();
