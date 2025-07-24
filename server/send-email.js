import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function sendEmail(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Método não permitido" });
    }

    const { email } = req.body;

    if (!email || !email.includes("@")) {
        return res.status(400).json({ message: "E-mail inválido" });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: parseInt(process.env.MAIL_PORT, 10),
                                                       secure: process.env.MAIL_SECURE === "true",
                                                       auth: {
                                                           user: process.env.MAIL_USER,
                                                           pass: process.env.MAIL_PASS,
                                                       },
        });

        // Caminho para o banner (se quiser adicionar futuramente)
        const bannerPath = path.join(__dirname, "assets", "PerdizesToken.png");

        // 📨 Enviar email ao administrador
        await transporter.sendMail({
            from: process.env.MAIL_FROM,
            to: process.env.MAIL_USER,
            subject: "Novo cadastro URBZToken",
            html: `<p>Novo e-mail cadastrado: <strong>${email}</strong></p>`,
        });

        // 📨 Lê o HTML refinado do template
        const htmlUser = fs.readFileSync(
            path.join(__dirname, "emails", "welcome.html"),
                                         "utf8"
        );

        // 📨 Envia para o usuário
        await transporter.sendMail({
            from: process.env.MAIL_FROM,
            to: email,
            subject: "Bem-vindo à URBZToken",
            html: htmlUser,
            attachments: [
                {
                    filename: "PerdizesToken.png",
                    path: bannerPath,
                    cid: "bannerimage",
                },
            ],
        });

        return res.status(200).json({ message: "E-mails enviados com sucesso" });
    } catch (err) {
        console.error("Erro ao enviar e-mail:", err);
        return res.status(500).json({ message: "Erro ao enviar e-mail" });
    }
}
