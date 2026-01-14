const { Template } = require("../models");

// GET /api/templates 
exports.getAllTemplates = async (req, res) => {
  try {
    const templates = await Template.findAll({
      where: { isActive: true },
      order: [["usageCount", "DESC"]]
    });

    res.json(templates);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch templates" });
  }
};

// GET /api/templates/:id 
exports.getTemplateById = async (req, res) => {
  try {
    const template = await Template.findByPk(req.params.id);
    if (!template || !template.isActive) {
      return res.status(404).json({ message: "Template not found" });
    }
    res.json(template);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch template" });
  }
};

// POST /api/templates (admin)
exports.createTemplate = async (req, res) => {
  try {
    const { name, slug, layoutConfig } = req.body;

    if (!name || !slug || !layoutConfig) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const exists = await Template.findOne({ where: { slug } });
    if (exists) {
      return res.status(400).json({ message: "Slug already exists" });
    }

    const template = await Template.create({
      name,
      slug,
      layoutConfig,
      usageCount: 0,
      isActive: true
    });

    res.status(201).json(template);
  } catch (err) {
    res.status(500).json({ message: "Failed to create template" });
  }
};

// PUT /api/templates/:id (admin)
exports.updateTemplate = async (req, res) => {
  try {
    const template = await Template.findByPk(req.params.id);
    if (!template) {
      return res.status(404).json({ message: "Template not found" });
    }

    const allowedFields = ["name", "layoutConfig", "isActive"];
    const updates = Object.fromEntries(
      Object.entries(req.body).filter(([key]) =>
        allowedFields.includes(key)
      )
    );

    await template.update(updates);
    res.json(template);
  } catch (err) {
    res.status(500).json({ message: "Failed to update template" });
  }
};

// DELETE /api/templates/:id (admin)
exports.deleteTemplate = async (req, res) => {
  try {
    const template = await Template.findByPk(req.params.id);
    if (!template) {
      return res.status(404).json({ message: "Template not found" });
    }

    await template.update({ isActive: false });

    res.json({ message: "Template disabled" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete template" });
  }
};
