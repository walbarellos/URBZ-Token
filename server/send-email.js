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

        // Caminho da imagem
        const bannerPath = path.join(__dirname, "assets", "PerdizesToken.png");

        // 📩 1. E-mail para admin (você)
        await transporter.sendMail({
            from: process.env.MAIL_FROM,
            to: process.env.MAIL_USER,
            subject: "Novo cadastro URBZToken",
            html: `<p>Novo e-mail cadastrado: <strong>${email}</strong></p>`,
        });

        // 📩 2. E-mail para o usuário
        const htmlUser = `
        <div style="font-family: 'Segoe UI', Roboto, sans-serif; background-color: #0f0f0f; color: #ffffff; padding: 30px; border-radius: 8px; max-width: 600px; margin: auto;">
        <div style="text-align: center;">
        <img src="cid:bannerimage" alt="URBZToken" style="width: 100%; max-width: 500px; border-radius: 10px; margin-bottom: 30px;" />
        </div>

        <h2 style="color: #facc15; text-align: center;">Bem-vindo à URBZToken</h2>

        <p style="font-size: 16px; line-height: 1.6; margin-top: 20px;">
        Prezado(a) investidor(a),
        </p>

        <p style="font-size: 16px; line-height: 1.6;">
        Agradecemos por se cadastrar em nossa plataforma. A partir de agora, você fará parte da nossa comunidade exclusiva de investidores que acreditam na transformação do mercado imobiliário através da <strong>tokenização segura e fracionada de imóveis reais</strong>.
        </p>

        <p style="font-size: 16px; line-height: 1.6;">
        Em breve, você receberá atualizações sobre novas oportunidades, pré-vendas, lançamentos e eventos.
        </p>

        <div style="text-align: center; margin: 30px 0;">
        <a href="https://urbztoken.com" target="_blank" style="background-color: #facc15; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">
        Acessar Plataforma
        </a>
        </div>

        <p style="font-size: 14px; color: #cccccc; text-align: center; margin-top: 40px;">
        URBZToken | Transformando imóveis em ativos digitais
        </p>
        </div>
        `;


        await transporter.sendMail({
            from: process.env.MAIL_FROM,
            to: email,
            subject: "Bem-vindo à URBZToken",
            html: htmlUser,
            attachments: [
                {
                    filename: "PerdizesToken.png",
                    path: bannerPath,
                    cid: "bannerimage", // Referência usada no src="cid:bannerimage"
                },
            ],
        });

        return res.status(200).json({ message: "E-mails enviados com sucesso" });
    } catch (err) {
        console.error("Erro no envio:", err);
        return res.status(500).json({ message: "Erro ao enviar o e-mail" });
    }
}
