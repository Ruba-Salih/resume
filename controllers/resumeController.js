const { Resume, Template } = require("../models");

// GET /api/resumes
exports.getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.findAll({
      where: { userId: req.user.id }
    });
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch resumes" });
  }
};

// GET /api/resumes/:id
exports.getResumeById = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id
      }
    });

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch resume" });
  }
};

// POST /api/resumes
exports.createResume = async (req, res) => {
  try {
    const { title, templateId, data } = req.body;

    if (!title || !templateId || !data) {
      return res.status(400).json({ message: "Missing fields" });
    }

  
    const template = await Template.findByPk(templateId);
    if (!template || !template.isActive) {
      return res.status(400).json({ message: "Invalid template" });
    }

    const resume = await Resume.create({
      title,
      data,
      userId: req.user.id,
      templateId
    });

    await template.increment("usageCount");

    res.status(201).json(resume);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create resume" });
  }
};

// PUT /api/resumes/:id
exports.updateResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id
      }
    });

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    // whitelist allowed fields
    const allowedFields = ["title", "data"];
    const updates = Object.fromEntries(
      Object.entries(req.body).filter(([key]) =>
        allowedFields.includes(key)
      )
    );

    await resume.update(updates);
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: "Failed to update resume" });
  }
};

// DELETE /api/resumes/:id
exports.deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id
      }
    });

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    await resume.destroy();
    res.json({ message: "Resume deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete resume" });
  }
};
