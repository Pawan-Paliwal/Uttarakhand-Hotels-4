const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000; // Use environment variable for port or default to 5000

// Serve static files from the frontend/dist directory
app.use(express.static(path.join(__dirname, 'frontend/dist')));

// Handle other routes and serve index.html for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist/index.html'));
});

app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json()); // Parse JSON bodies

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

app.post("/send-email", (req, res) => {
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
