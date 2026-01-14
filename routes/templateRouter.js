const express = require("express");
const router = express.Router();

const templateController = require("../controllers/templateController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

// public
router.get("/", templateController.getAllTemplates);
router.get("/:id", templateController.getTemplateById);

// admin only
router.post("/", auth, role("admin"), templateController.createTemplate);
router.put("/:id", auth, role("admin"), templateController.updateTemplate);
router.delete("/:id", auth, role("admin"), templateController.deleteTemplate);

module.exports = router;
