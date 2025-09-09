import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/reserve", async (req, res) => {
  const { name, email, phone, date, time, guests, occasion, comments } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Restaurant Demo" <lorenzodrovandi17@gmail.com>`,
      to: "lorenzodrovandi17@gmail.com",
      subject: `Nueva reserva de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Fecha:</strong> ${date}</p>
        <p><strong>Hora:</strong> ${time}</p>
        <p><strong>Comensales:</strong> ${guests}</p>
        <p><strong>Ocasión:</strong> ${occasion}</p>
        <p><strong>Comentarios:</strong> ${comments}</p>
      `,
    });

    res.json({ message: "Reserva enviada correctamente" });
  } catch (err) {
    console.error("Error en envío:", err);
    res.status(500).json({ message: "Error enviando la reserva" });
  }
});

app.listen(3000, () => console.log("Servidor escuchando en puerto 3000"));
