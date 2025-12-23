# Email Setup Instructions

## Step 1: Create .env file in backend directory

Create a file named `.env` in the `backend` directory with the following content:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/devops-learning-hub
NODE_ENV=development

# Email Configuration (Gmail)
EMAIL_USER=ashishrajdevops@gmail.com
EMAIL_PASSWORD=rsuy ntrp enkf qmli
```

**Important:** Remove the spaces from the password. Gmail app passwords should be entered without spaces:
```
EMAIL_PASSWORD=rsuyntrpenkfqmli
```

## Step 2: Install Dependencies

```bash
cd backend
npm install
```

## Step 3: Test Email Configuration

Run the test script to verify email is working:

```bash
cd backend
node test-email.js
```

If successful, you should see:
- ✅ SMTP connection verified successfully!
- ✅ Test email sent successfully!
- Check your inbox at ashishrajdevops@gmail.com

## Step 4: Start the Backend Server

```bash
cd backend
npm run dev
```

The server should start on `http://localhost:5000`

## Step 5: Test the Contact Form

1. Start the frontend (if not already running):
   ```bash
   cd frontend
   npm run dev
   ```

2. Navigate to `http://localhost:3000`

3. Fill out the contact form and submit

4. Check `ashishrajdevops@gmail.com` for the email

## Troubleshooting

### Error: "Invalid login" or "EAUTH"
- Make sure the password has no spaces: `rsuyntrpenkfqmli`
- Verify it's a Gmail App Password, not your regular password
- Ensure 2-Step Verification is enabled on your Google account

### Error: "ECONNECTION"
- Check your internet connection
- Verify firewall isn't blocking SMTP (port 587/465)

### Email not received
- Check spam folder
- Wait a few minutes (Gmail can have delays)
- Verify the email address is correct

## Note

The `.env` file is in `.gitignore` and won't be committed to git, keeping your password secure.

