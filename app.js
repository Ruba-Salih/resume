const express = require("express");

const templateRoutes = require("./routes/templateRouter");
const resumeRouteres = require("./routes/resumeRouter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api/auth", authRoutes);

app.use("/api/templates", templateRoutes);

app.use("/api/resumes", resumeRouteres);

app.get("/", (req, res) => {
  res.send("Resume Builder API is running");
});

module.exports = app;
