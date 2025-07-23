import nodemailer from "nodemailer";

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

        await transporter.sendMail({
            from: process.env.MAIL_FROM,
            to: process.env.MAIL_USER,
            subject: "Novo cadastro URBZToken",
            html: `<p>Novo e-mail cadastrado: <strong>${email}</strong></p>`,
        });

        return res.status(200).json({ message: "E-mail enviado com sucesso" });
    } catch (err) {
        console.error("Erro no envio:", err);
        return res.status(500).json({ message: "Erro ao enviar o e-mail" });
    }
}
