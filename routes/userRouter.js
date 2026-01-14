const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

/* Admin routes */
router.get("/", auth, role("admin"), userController.getAllUsers);
router.get("/:id", auth, role("admin"), userController.getUserById);
router.post("/", auth, role("admin"), userController.createUser);
router.put("/:id", auth, role("admin"), userController.updateUser);
router.delete("/:id", auth, role("admin"), userController.deleteUser);

/* User self routes */
router.get("/me/profile", auth, userController.getMe);
router.put("/me/profile", auth, userController.updateMe);

module.exports = router;
