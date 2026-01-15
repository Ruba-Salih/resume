const express = require("express");

const cors = require("cors"); 
const userRoutes = require("./routes/userRouter");
const authRoutes = require("./routes/authRouter");
const templateRoutes = require("./routes/templateRouter");
const resumeRouteres = require("./routes/resumeRouter");

const app = express();

app.use(cors({
  origin: "http://127.0.0.1:5173",
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api/users", userRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/templates", templateRoutes);

app.use("/api/resumes", resumeRouteres);

app.get("/", (req, res) => {
  res.send("Resume Builder API is running");
});

module.exports = app;
