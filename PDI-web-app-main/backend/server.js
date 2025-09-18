import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import authRoutes from "./routes/auth.js";
import inspectionRoutes from "./routes/inspections.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use("/api/auth", authRoutes);
app.use("/api/inspections", inspectionRoutes);

app.get("/api/health", (req, res) => {
  res.json({ message: "PDC Pro API is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
