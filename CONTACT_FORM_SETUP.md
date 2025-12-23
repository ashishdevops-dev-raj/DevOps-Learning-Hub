# Contact Form Setup Guide

## Overview
The contact form on the home page sends emails to `ashishrajdevops@gmail.com` with the subject "DevOps Learning Hub - Contact Form".

## Backend Setup

### 1. Install Dependencies
```bash
cd backend
npm install
```

This will install `nodemailer` which is required for sending emails.

### 2. Configure Gmail App Password

Since Gmail requires app-specific passwords for SMTP, you need to:

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (enable it if not already enabled)
3. Go to **App passwords**: https://myaccount.google.com/apppasswords
4. Select **Mail** and **Other (Custom name)**
5. Enter "DevOps Learning Hub" as the name
6. Click **Generate**
7. Copy the 16-character password (you'll use this in the `.env` file)

### 3. Create `.env` File

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/devops-learning-hub
NODE_ENV=development

# Email Configuration (Gmail)
EMAIL_USER=ashishrajdevops@gmail.com
EMAIL_PASSWORD=your-16-character-app-password-here
```

Replace `your-16-character-app-password-here` with the app password you generated.

### 4. Start the Backend Server

```bash
cd backend
npm run dev
```

The server should start on `http://localhost:5000`

## Frontend Setup

### 1. Configure API URL

The frontend is already configured to use `http://localhost:5000` by default. If your backend is running on a different URL, update `frontend/next.config.js`:

```javascript
env: {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://your-backend-url:5000',
}
```

Or set it as an environment variable in `frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 2. Start the Frontend

```bash
cd frontend
npm run dev
```

## Testing

1. Navigate to `http://localhost:3000` (or your frontend URL)
2. Scroll to the "Get In Touch" section
3. Fill out the contact form:
   - Name
   - Email
   - Subject
   - Message
4. Click "Send Message"
5. You should see a success message
6. Check `ashishrajdevops@gmail.com` for the email

## Email Format

The email will be sent with:
- **To:** ashishrajdevops@gmail.com
- **From:** ashishrajdevops@gmail.com
- **Subject:** DevOps Learning Hub - Contact Form
- **Reply-To:** The sender's email address
- **Content:** HTML formatted with the form details

## Troubleshooting

### Email Not Sending

1. **Check Gmail App Password**: Make sure you're using the correct 16-character app password, not your regular Gmail password.

2. **Check Environment Variables**: Verify that `EMAIL_USER` and `EMAIL_PASSWORD` are set correctly in `backend/.env`.

3. **Check Backend Logs**: Look for error messages in the backend console.

4. **Test SMTP Connection**: You can test the email configuration by checking the backend logs when submitting the form.

### Common Errors

- **"Invalid login"**: Wrong app password or email address
- **"Connection timeout"**: Check your internet connection or firewall settings
- **"Network error"**: Frontend can't reach backend - check API URL configuration

## Production Deployment

For production, make sure to:

1. Set environment variables in your hosting platform (Netlify, Vercel, etc.)
2. Use a production email service (SendGrid, AWS SES, etc.) instead of Gmail SMTP for better reliability
3. Add rate limiting to prevent spam
4. Add CAPTCHA to the form
5. Use HTTPS for secure communication

## Alternative Email Services

If you prefer not to use Gmail SMTP, you can modify `backend/server.js` to use other services:

- **SendGrid**: More reliable for production
- **AWS SES**: Cost-effective for high volume
- **Mailgun**: Developer-friendly API
- **Nodemailer with custom SMTP**: Works with any SMTP server

