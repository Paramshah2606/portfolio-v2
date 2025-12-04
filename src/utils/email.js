const nodemailer = require('nodemailer');

// Notification email template (to you)
export const notificationTemplate = (name, email, message) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
      padding: 20px;
      line-height: 1.6;
    }
    .email-wrapper {
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
    }
    .header {
      background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
      padding: 40px 30px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .header::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
      animation: pulse 15s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 0.5; }
      50% { transform: scale(1.1); opacity: 0.8; }
    }
    .header-content {
      position: relative;
      z-index: 1;
    }
    .icon {
      width: 60px;
      height: 60px;
      background: rgba(255,255,255,0.2);
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 15px;
      backdrop-filter: blur(10px);
    }
    .icon svg {
      width: 30px;
      height: 30px;
      fill: white;
    }
    .header h1 {
      color: #ffffff;
      font-size: 26px;
      font-weight: 700;
      letter-spacing: -0.5px;
      margin: 0;
    }
    .header p {
      color: rgba(255,255,255,0.9);
      font-size: 14px;
      margin-top: 8px;
    }
    .content {
      padding: 40px 30px;
      background: #ffffff;
    }
    .badge {
      display: inline-block;
      background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
      color: #991b1b;
      padding: 6px 16px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 20px;
    }
    .section-title {
      color: #1f2937;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .info-card {
      background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
      border-radius: 12px;
      padding: 24px;
      margin: 20px 0;
      border-left: 4px solid #dc2626;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .info-row {
      display: flex;
      padding: 12px 0;
      border-bottom: 1px solid #e5e7eb;
    }
    .info-row:last-child {
      border-bottom: none;
    }
    .info-label {
      font-weight: 600;
      color: #dc2626;
      min-width: 80px;
      font-size: 14px;
    }
    .info-value {
      color: #374151;
      flex: 1;
      font-size: 14px;
      word-break: break-word;
    }
    .message-content {
      background: #ffffff;
      padding: 16px;
      border-radius: 8px;
      border: 1px solid #e5e7eb;
      margin-top: 8px;
      white-space: pre-wrap;
      color: #1f2937;
      line-height: 1.6;
    }
    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
      color: white;
      padding: 14px 32px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      margin-top: 20px;
      box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(220, 38, 38, 0.4);
    }
    .footer {
      background: #1f2937;
      padding: 30px;
      text-align: center;
      color: #9ca3af;
      font-size: 13px;
    }
    .footer-links {
      margin-top: 15px;
    }
    .footer-links a {
      color: #f87171;
      text-decoration: none;
      margin: 0 10px;
      font-weight: 500;
    }
    .footer-links a:hover {
      color: #dc2626;
      text-decoration: underline;
    }
    .divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, #e5e7eb, transparent);
      margin: 30px 0;
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="header">
      <div class="header-content">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        </div>
        <h1>New Contact Submission</h1>
        <p>You've received a new message from your portfolio</p>
      </div>
    </div>
    
    <div class="content">
      <span class="badge">New Message</span>
      
      <h2 class="section-title">
        📋 Contact Details
      </h2>
      
      <div class="info-card">
        <div class="info-row">
          <div class="info-label">From:</div>
          <div class="info-value">${name}</div>
        </div>
        <div class="info-row">
          <div class="info-label">Email:</div>
          <div class="info-value"><a href="mailto:${email}" style="color: #dc2626; text-decoration: none;">${email}</a></div>
        </div>
        <div class="info-row">
          <div class="info-label">Message:</div>
          <div class="info-value">
            <div class="message-content">${message}</div>
          </div>
        </div>
      </div>
      
      <div class="divider"></div>
      
      <p style="color: #6b7280; font-size: 14px;">
        💡 <strong>Quick Tip:</strong> Reply promptly to maintain engagement and build strong client relationships.
      </p>
      
      <a href="mailto:${email}" class="cta-button">Reply Now</a>
    </div>
    
    <div class="footer">
      <p>© ${new Date().getFullYear()} Your Portfolio. All rights reserved.</p>
      <div class="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </div>
</body>
</html>
`;

// Confirmation email template (to user)
export const confirmationTemplate = (name, email, message) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
      padding: 20px;
      line-height: 1.6;
    }
    .email-wrapper {
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
    }
    .header {
      background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
      padding: 40px 30px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .header::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
      animation: pulse 15s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 0.5; }
      50% { transform: scale(1.1); opacity: 0.8; }
    }
    .header-content {
      position: relative;
      z-index: 1;
    }
    .icon {
      width: 60px;
      height: 60px;
      background: rgba(255,255,255,0.2);
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 15px;
      backdrop-filter: blur(10px);
    }
    .icon svg {
      width: 30px;
      height: 30px;
      fill: white;
    }
    .header h1 {
      color: #ffffff;
      font-size: 26px;
      font-weight: 700;
      letter-spacing: -0.5px;
      margin: 0;
    }
    .header p {
      color: rgba(255,255,255,0.9);
      font-size: 14px;
      margin-top: 8px;
    }
    .content {
      padding: 40px 30px;
      background: #ffffff;
    }
    .greeting {
      color: #1f2937;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .message-box {
      background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
      border-left: 4px solid #10b981;
      padding: 20px;
      border-radius: 12px;
      margin: 25px 0;
      box-shadow: 0 2px 8px rgba(16, 185, 129, 0.1);
    }
    .message-box p {
      color: #065f46;
      font-size: 15px;
      margin: 8px 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .section-title {
      color: #1f2937;
      font-size: 18px;
      font-weight: 700;
      margin: 30px 0 15px 0;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .info-card {
      background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
      border-radius: 12px;
      padding: 24px;
      margin: 20px 0;
      border-left: 4px solid #dc2626;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .info-row {
      display: flex;
      padding: 12px 0;
      border-bottom: 1px solid #e5e7eb;
    }
    .info-row:last-child {
      border-bottom: none;
    }
    .info-label {
      font-weight: 600;
      color: #dc2626;
      min-width: 80px;
      font-size: 14px;
    }
    .info-value {
      color: #374151;
      flex: 1;
      font-size: 14px;
      word-break: break-word;
    }
    .message-content {
      background: #ffffff;
      padding: 16px;
      border-radius: 8px;
      border: 1px solid #e5e7eb;
      margin-top: 8px;
      white-space: pre-wrap;
      color: #1f2937;
      line-height: 1.6;
    }
    .timeline {
      background: #fef3c7;
      border-left: 4px solid #f59e0b;
      padding: 16px 20px;
      border-radius: 8px;
      margin: 20px 0;
      color: #92400e;
      font-size: 14px;
    }
    .timeline strong {
      color: #78350f;
    }
    .footer {
      background: #1f2937;
      padding: 30px;
      text-align: center;
      color: #9ca3af;
      font-size: 13px;
    }
    .footer-links {
      margin-top: 15px;
    }
    .footer-links a {
      color: #f87171;
      text-decoration: none;
      margin: 0 10px;
      font-weight: 500;
    }
    .footer-links a:hover {
      color: #dc2626;
      text-decoration: underline;
    }
    .divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, #e5e7eb, transparent);
      margin: 30px 0;
    }
    p {
      color: #4b5563;
      margin: 12px 0;
      font-size: 15px;
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="header">
      <div class="header-content">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
        </div>
        <h1>Message Received!</h1>
        <p>Thank you for reaching out</p>
      </div>
    </div>
    
    <div class="content">
      <h2 class="greeting">Hi ${name}! 👋</h2>
      
      <div class="message-box">
        <p>✅ Your message has been successfully received</p>
        <p>🚀 I'll review it and get back to you shortly</p>
        <p>📧 Check your inbox for my response</p>
      </div>
      
      <p>I appreciate you taking the time to contact me. Your message is important, and I'll make sure to respond as soon as possible.</p>
      
      <div class="timeline">
        ⏱️ <strong>Expected Response Time:</strong> Within 24-48 hours (usually much sooner!)
      </div>
      
      <h3 class="section-title">📝 Your Submission Details</h3>
      
      <div class="info-card">
        <div class="info-row">
          <div class="info-label">Name:</div>
          <div class="info-value">${name}</div>
        </div>
        <div class="info-row">
          <div class="info-label">Email:</div>
          <div class="info-value">${email}</div>
        </div>
        <div class="info-row">
          <div class="info-label">Message:</div>
          <div class="info-value">
            <div class="message-content">${message}</div>
          </div>
        </div>
      </div>
      
      <div class="divider"></div>
      
      <p style="font-size: 14px; color: #6b7280;">
        <strong>Need immediate assistance?</strong> Feel free to reply directly to this email, and I'll prioritize your request.
      </p>
    </div>
    
    <div class="footer">
      <p>© ${new Date().getFullYear()} Your Portfolio. All rights reserved.</p>
      <div class="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </div>
</body>
</html>
`;
// sendMail function (send notification + confirmation)
export const sendMail = async ({ name, email, message }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.mailer_email,
        pass: process.env.mailer_password,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Send notification to your email
    await transporter.sendMail({
      from: process.env.from_email,
      to: process.env.mailer_email, // your email to get notifications
      subject: `New Contact Form Submission from ${name}`,
      html: notificationTemplate(name, email, message),
    });

    // Send confirmation to user
    await transporter.sendMail({
      from: process.env.from_email,
      to: email,
      subject: `Thanks for contacting me, ${name}`,
      html: confirmationTemplate(name, email, message),
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending emails:", error);
    return { success: false, error };
  }
};
