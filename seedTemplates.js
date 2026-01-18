require("dotenv").config();

const sequelize = require("./config/database");
const { Template } = require("./models");

async function seedTemplates() {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected");

    await sequelize.sync(); // dev-safe

    const templates = [
      {
        name: "Classic",
        slug: "classic",
        layoutType: "classic",
        layoutConfig: {
          font: "Inter",
          sectionsOrder: ["header", "skills", "experience", "education"],
          colors: { primary: "#0f172a", text: "#020617" }
        },
        usageCount: 0
      },
      {
        name: "Sidebar",
        slug: "sidebar",
        layoutType: "sidebar",
        layoutConfig: {
          font: "Inter",
          sectionsOrder: ["header", "skills", "education", "experience"],
          colors: { primary: "#334155", text: "#020617" }
        },
        usageCount: 0
      },
      {
        name: "Modern",
        slug: "modern",
        layoutType: "modern",
        layoutConfig: {
          font: "Poppins",
          sectionsOrder: ["header", "experience", "skills", "education"],
          colors: { primary: "#2563eb", text: "#020617" }
        },
        usageCount: 0
      },
      {
        name: "Minimal",
        slug: "minimal",
        layoutType: "minimal",
        layoutConfig: {
          font: "Roboto",
          sectionsOrder: ["header", "experience"],
          colors: { primary: "#020617", text: "#020617" }
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
