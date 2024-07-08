const nodemailer = require("nodemailer");
const cors = require("cors");
const express = require("express");
const serverless = require("serverless-http");
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

app.post("/api/send-email", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  const mailOptions = {
    from: email,
    to: "twidletwix7n7@gmail.com",
    subject: `Contact form submission from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ success: false, error: 'Failed to send email' });
    }
    console.log("Email sent: " + info.response);
    res.status(200).json({ success: true });
  });
});

module.exports = app;
module.exports.handler = serverless(app);
