const { Template } = require("../models");

/**
 * GET /api/templates
 * Return all active templates
 */
exports.getAllTemplates = async (req, res) => {
  try {
    const templates = await Template.findAll({
      where: { isActive: true },
      order: [["usageCount", "DESC"]]
    });

    res.status(200).json(templates);
  } catch (error) {
    console.error("Error fetching templates:", error);
    res.status(500).json({ message: "Failed to fetch templates" });
  }
};
