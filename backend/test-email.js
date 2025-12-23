// Test script to verify email configuration
const nodemailer = require('nodemailer');
require('dotenv').config();

async function testEmail() {
  try {
    console.log('Testing email configuration...');
    console.log('EMAIL_USER:', process.env.EMAIL_USER || 'ashishrajdevops@gmail.com');
    console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? '***' + process.env.EMAIL_PASSWORD.slice(-4) : 'NOT SET');

    if (!process.env.EMAIL_PASSWORD) {
      console.error('❌ ERROR: EMAIL_PASSWORD is not set in .env file');
      console.log('\nPlease create a .env file in the backend directory with:');
      console.log('EMAIL_USER=ashishrajdevops@gmail.com');
      console.log('EMAIL_PASSWORD=your-app-password-here');
      process.exit(1);
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'ashishrajdevops@gmail.com',
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Verify connection
    console.log('\nVerifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully!');

    // Send test email
    console.log('\nSending test email...');
    const mailOptions = {
      from: process.env.EMAIL_USER || 'ashishrajdevops@gmail.com',
      to: 'ashishrajdevops@gmail.com',
      subject: 'DevOps Learning Hub - Test Email',
      html: `
        <h2>Test Email from DevOps Learning Hub</h2>
        <p>This is a test email to verify the email configuration is working correctly.</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        <hr>
        <p><small>If you received this email, your configuration is working!</small></p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('\n📧 Check your inbox at ashishrajdevops@gmail.com');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.code === 'EAUTH') {
      console.error('\nAuthentication failed. Please check:');
      console.error('1. EMAIL_USER is correct');
      console.error('2. EMAIL_PASSWORD is a valid Gmail App Password (16 characters)');
      console.error('3. 2-Step Verification is enabled on your Google account');
    } else if (error.code === 'ECONNECTION') {
      console.error('\nConnection failed. Please check your internet connection.');
    }
    process.exit(1);
  }
}

testEmail();

