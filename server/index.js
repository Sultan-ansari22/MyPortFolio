import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio_db';

// Middleware
app.use(cors());
app.use(express.json());

// 1. MongoDB Connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('🍃 MongoDB connected successfully!'))
  .catch((err) => console.log('MongoDB connection note:', err.message));

// 2. Mongoose Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

// 3. Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 4. Routes

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Portfolio backend is working!' });
});

// POST: Save message to MongoDB + Send Luxury Email Alert
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields.' });
    }

    // A. Save to MongoDB
    const newMessage = new Contact({ name, email, subject, message });
    await newMessage.save();
    console.log('📬 Saved message to MongoDB from:', name);

    // 📅 👉 HERE IS THE DATE FORMAT (Clean date only, no time numbers)
    const formattedDate = new Date().toLocaleDateString('en-IN', {
      timeZone: 'Asia/Kolkata',
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    // B. Send Email Notification to Your Gmail
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const mailOptions = {
        from: `"Sultan Ansari Portfolio" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
        replyTo: email,
        subject: `💼 New Inquiry from ${name}: "${subject || 'Portfolio Message'}"`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 24px 12px; background-color: #060609; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
            
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #0f0f18; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; overflow: hidden; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);">
              
              <!-- Luxury Top Gradient Bar -->
              <tr>
                <td height="4" style="background: linear-gradient(90deg, #8A63F8 0%, #5A8CFF 50%, #00FF88 100%);"></td>
              </tr>

              <!-- Header -->
              <tr>
                <td style="padding: 32px 32px 20px 32px;">
                  <span style="display: inline-block; padding: 4px 12px; background: rgba(138, 99, 248, 0.12); border: 1px solid rgba(138, 99, 248, 0.3); border-radius: 9999px; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; color: #a78bfa; text-transform: uppercase;">
                    ✦ Client Inquiry
                  </span>
                  <h1 style="margin: 14px 0 6px 0; font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">
                    Sultan Ansari <span style="color: #8A63F8;">.</span>
                  </h1>
                  <p style="margin: 0; font-size: 13px; color: #888899; font-weight: 500;">
                    📅 ${formattedDate}
                  </p>
                </td>
              </tr>

              <!-- Divider -->
              <tr>
                <td style="padding: 0 32px;">
                  <div style="height: 1px; background-color: rgba(255, 255, 255, 0.06);"></div>
                </td>
              </tr>

              <!-- Sender Metadata Grid -->
              <tr>
                <td style="padding: 24px 32px;">
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 14px; padding: 16px;">
                    <tr>
                      <td style="padding: 6px 12px; font-size: 12px; color: #71717a; text-transform: uppercase; font-weight: 600; width: 80px;">Date</td>
                      <td style="padding: 6px 12px; font-size: 14px; color: #e4e4e7; font-weight: 500;">${formattedDate}</td>
                    </tr>
                    <tr>
                      <td style="padding: 6px 12px; font-size: 12px; color: #71717a; text-transform: uppercase; font-weight: 600; width: 80px;">Client</td>
                      <td style="padding: 6px 12px; font-size: 15px; color: #ffffff; font-weight: 600;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 6px 12px; font-size: 12px; color: #71717a; text-transform: uppercase; font-weight: 600;">Email</td>
                      <td style="padding: 6px 12px; font-size: 14px; color: #5A8CFF; font-weight: 500;">
                        <a href="mailto:${email}" style="color: #5A8CFF; text-decoration: none;">${email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 6px 12px; font-size: 12px; color: #71717a; text-transform: uppercase; font-weight: 600;">Subject</td>
                      <td style="padding: 6px 12px; font-size: 14px; color: #e4e4e7; font-weight: 500;">${subject}</td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Message Body -->
              <tr>
                <td style="padding: 0 32px 28px 32px;">
                  <p style="margin: 0 0 10px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #a1a1aa;">
                    Message Content
                  </p>
                  <div style="background: rgba(18, 18, 28, 0.7); border-left: 3px solid #8A63F8; border-radius: 0 12px 12px 0; padding: 18px 20px; font-size: 15px; line-height: 1.6; color: #d4d4d8;">
                    ${message.replace(/\n/g, '<br>')}
                  </div>
                </td>
              </tr>

              <!-- Action CTA: Direct Reply -->
              <tr>
                <td align="center" style="padding: 0 32px 32px 32px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td align="center">
                        <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display: inline-block; width: 100%; box-sizing: border-box; text-align: center; background: linear-gradient(135deg, #8A63F8 0%, #5C43FA 100%); color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; padding: 14px 24px; border-radius: 12px; box-shadow: 0 8px 20px rgba(138, 99, 248, 0.35);">
                          Reply to ${name} Directly &rarr;
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding: 20px 32px; background-color: #09090f; border-top: 1px solid rgba(255, 255, 255, 0.05); text-align: center;">
                  <p style="margin: 0; font-size: 12px; color: #52525b;">
                    🔒 Verified Inquiry &bull; Saved into MongoDB &bull; Sultan Ansari Full-Stack
                  </p>
                </td>
              </tr>

            </table>

          </body>
          </html>
        `,
      };

      transporter.sendMail(mailOptions, (mailErr, info) => {
        if (mailErr) {
          console.error('Nodemailer error (check App Password):', mailErr.message);
        } else {
          console.log('📧 Luxury email notification sent:', info.response);
        }
      });
    }

    res.status(201).json({
      success: true,
      message: 'Your message has been sent and saved successfully!',
    });
  } catch (error) {
    console.error('Error handling contact submission:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
});

// GET: Fetch all messages
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: messages.length, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE: Delete a message by ID
app.delete('/api/messages/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'Message deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});