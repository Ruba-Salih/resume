const express = require("express");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

const resumeController = require("../controllers/resumeController");

router.get("/", auth, resumeController.getAllResumes);
router.get("/recent", auth, resumeController.getRecentResumes);
router.get("/:id", auth, resumeController.getResumeById);
router.post("/", auth, resumeController.createResume);
router.put("/:id", auth, resumeController.updateResume);
router.delete("/:id", auth, resumeController.deleteResume);

module.exports = router;
