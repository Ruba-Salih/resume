const express = require("express");
const router = express.Router();

const templateController = require("../controllers/templateController");

// GET /api/templates
router.get("/", templateController.getAllTemplates);

module.exports = router;
