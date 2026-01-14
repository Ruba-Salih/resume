const { User } = require("../models");

// GET /api/users 
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "name", "email", "role"]
    });

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

// GET /api/users/:id 
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id,{
         attributes: ["id", "name", "email", "role"]
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch user" });
  }
};

// POST /api/User (admin)
exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role  } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const exists = await User.findOne({ where: { email } });
    if (exists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const user = await User.create({
      name,
      email,
      passwordHash,
      role: role || "user"
    });

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed to create user" });
  }
};

// PUT /api/users/:id (admin)
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const allowedFields = ["name", "email", "role"];
    const updates = Object.fromEntries(
      Object.entries(req.body).filter(([key]) =>
        allowedFields.includes(key)
      )
    );

    await user.update(updates);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed to update User" });
  }
};

// DELETE /api/users/:id (admin)
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.update({ isActive: false });

    res.json({ message: "User disabled" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete user" });
  }
};


/* ======================
   USER SELF ACTIONS
====================== */

// GET /api/users/me
exports.getMe = async (req, res) => {
  const user = await User.findByPk(req.user.id, {
    attributes: ["id", "name", "email", "role"]
  });

  res.json(user);
};

// PUT /api/users/me
exports.updateMe = async (req, res) => {
  const user = await User.findByPk(req.user.id);

  const allowed = ["name", "email"];
  const updates = Object.fromEntries(
    Object.entries(req.body).filter(([k]) => allowed.includes(k))
  );

  await user.update(updates);
  res.json({ message: "Profile updated" });
};
