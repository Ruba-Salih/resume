require("dotenv").config();

const sequelize = require("./config/database");
const { Template } = require("./models");

async function seedTemplates() {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected");

    await sequelize.sync(); // ensure tables exist

    const templates = [
      {
        name: "Modern Blue",
        slug: "modern-blue",
        layoutConfig: {
          font: "Inter",
          sectionsOrder: ["header", "summary", "experience", "skills"],
          colors: { primary: "#1e90ff" }
        },
        usageCount: 0
      },
      {
        name: "Clean Gray",
        slug: "clean-gray",
        layoutConfig: {
          font: "Roboto",
          sectionsOrder: ["header", "experience", "skills", "education"],
          colors: { primary: "#444444" }
        },
        usageCount: 0
      }
    ];

    for (const template of templates) {
      await Template.findOrCreate({
        where: { slug: template.slug },
        defaults: template
      });
    }

    console.log("🌱 Templates seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
}

seedTemplates();
