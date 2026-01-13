const { Resume, Template } = require("../models");

// GET /api/resumes
exports.getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.findAll();
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch resumes" });
  }
};

// GET /api/resumes/:id
exports.getResumeById = async (req, res) => {
  try {
    const resume = await Resume.findByPk(req.params.id);
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
    const userId = req.user.id;

    if (!title || !templateId || !data) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const resume = await Resume.create({
      title,
      data,
      userId,
      templateId
    });

    await Template.increment("usageCount", {
      where: { id: templateId }
    });

    res.status(201).json(resume);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create resume" });
  }
};

// PUT /api/resumes/:id
exports.updateResume = async (req, res) => {
  try {
    const resume = await Resume.findByPk(req.params.id);
    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    await resume.update(req.body);
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: "Failed to update resume" });
  }
};

// DELETE /api/resumes/:id
exports.deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findByPk(req.params.id);
    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    await resume.destroy();
    res.json({ message: "Resume deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete resume" });
  }
};
