# ReelFace - Contact Form Email Setup

## Email Configuration

The contact form is now configured to send emails using your SMTP credentials to **Thereelface@gmail.com**.

### SMTP Settings Used:
- **Host**: sveats.cyberdetox.in
- **Port**: 465
- **Encryption**: SSL
- **Username**: info@sveats.cyberdetox.in
- **From Email**: info@sveats.cyberdetox.in
- **To Email**: Thereelface@gmail.com

## How to Run the Application

### Method 1: Run Both Frontend and Backend Together (Recommended)

```bash
npm run dev:all
```

This will start:
- Frontend (Vite): http://localhost:8080
- Backend API: http://localhost:3001

### Method 2: Run Separately

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
npm run server
```

## Features

### Contact Form Functionality:
1. ✅ User fills out the contact form
2. ✅ Form data is validated
3. ✅ Email is sent to **Thereelface@gmail.com** with formatted content
4. ✅ Auto-reply email is sent to the user confirming receipt
5. ✅ Success/error messages displayed to user

### Email Templates:
- **Admin Email**: Professional formatted email with all contact details
- **Auto-Reply**: Thank you email sent to the user with message summary

### Security:
- ✅ SMTP credentials stored in `.env` file
- ✅ `.env` added to `.gitignore` to prevent credential exposure
- ✅ Form validation using Zod schema
- ✅ CORS enabled for API security

## Testing the Contact Form

1. Start the application using `npm run dev:all`
2. Navigate to http://localhost:8080/contact
3. Click "Fill Out Form" or scroll to the contact form
4. Fill in all required fields:
   - Name
   - Email
   - Company (optional)
   - Subject
   - Message
5. Click "Send Message"
6. Check:
   - **Thereelface@gmail.com** for the contact submission
   - The user's email for the auto-reply

## Troubleshooting

### Email not sending?
1. Check if backend server is running on port 3001
2. Verify SMTP credentials in `.env` file
3. Check console for error messages
4. Ensure port 465 is not blocked by firewall

### CORS errors?
- Make sure backend server is running
- Check that API URL in ContactForm.tsx matches backend URL

### Form validation errors?
- Ensure all required fields are filled
- Email must be in valid format
- Message must be at least 10 characters

## Environment Variables

The `.env` file contains sensitive information. Never commit this file to version control.

Required variables in `.env`:
```
SMTP_HOST=sveats.cyberdetox.in
SMTP_PORT=465
SMTP_USER=info@sveats.cyberdetox.in
SMTP_PASSWORD=Neelarani@10
SMTP_FROM=info@sveats.cyberdetox.in
SMTP_TO=Thereelface@gmail.com
SMTP_ENCRYPTION=SSL
```

## Production Deployment

For production:
1. Set environment variables on your hosting platform
2. Update API endpoint in `ContactForm.tsx` from localhost to your production domain
3. Ensure SMTP server allows connections from your production server IP
4. Consider adding rate limiting to prevent spam

## Support

If you encounter any issues, check:
- Backend server logs
- Browser console for frontend errors
- SMTP server configuration
- Network/firewall settings
