import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sendEmail from "./send-email.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/send-email", sendEmail);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor de e-mail rodando em http://localhost:${PORT}`);
});
