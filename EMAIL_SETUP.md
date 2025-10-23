# ReelFace Contact Form Email Setup

## Current Configuration

The contact form is configured to send emails using **FormSubmit.co** service:

- **Admin Email**: thereelface@gmail.com (receives all form submissions)
- **Client Email**: Auto-reply sent to the person who fills the form

## How It Works

1. User fills out the contact form
2. Form submission is sent to **thereelface@gmail.com**
3. Automatic "Thank You" email is sent to the client's email address
4. Both emails are delivered via FormSubmit.co

## Important: First-Time Activation Required

### Before the form works, you MUST activate FormSubmit.co:

1. **Fill out the form once** on your website (localhost or deployed version)
2. **Check thereelface@gmail.com inbox**
3. **Look for email from FormSubmit.co** with subject "Please activate your form"
4. **Click the activation link** in that email
5. After activation, all future form submissions will work automatically

### For Vercel Deployment:

The form will work on Vercel after activation. No additional configuration needed.

**Note**: If you don't receive the activation email:
- Check your spam/junk folder
- Make sure thereelface@gmail.com is correct
- Try submitting the form again

## Testing the Form

1. Go to your contact page: `/contact`
2. Scroll to "Get in Touch" form
3. Fill in all fields:
   - Name
   - Email
   - Company (optional)
   - Subject
   - Message
4. Click "Send Message"
5. Success message will appear
6. Check **thereelface@gmail.com** for the submission
7. Check the **client's email** for the auto-reply

## Email Content

### Admin Email (thereelface@gmail.com):
- Sender's name, email, company
- Subject and message
- Formatted in a nice box template

### Client Auto-Reply:
- Thank you message
- Summary of their submission
- ReelFace contact information
- Professional branded message

## Troubleshooting

### Form not sending on Vercel?
1. Make sure you activated FormSubmit (see above)
2. Check browser console for errors
3. Ensure CORS is not blocking the request
4. Try in incognito mode

### Not receiving emails?
1. Check spam/junk folder
2. Verify thereelface@gmail.com is correct
3. Make sure you clicked the activation link
4. Wait a few minutes (FormSubmit can have delays)

### Client not receiving auto-reply?
1. Check their spam folder
2. Verify they entered a valid email
3. FormSubmit auto-response takes 1-2 minutes

## Alternative: Using Your SMTP Credentials

If you want to use your actual SMTP credentials (sveats.cyberdetox.in), you'll need:
1. A backend server (Node.js/Express)
2. Serverless function (Vercel Functions, Netlify Functions)
3. Or a dedicated email service (SendGrid, Mailgun, etc.)

Current setup uses FormSubmit.co which is:
- ✅ Free
- ✅ No backend needed
- ✅ Works on static hosting (Vercel, Netlify)
- ✅ Auto-reply feature built-in
- ⚠️ Requires one-time activation

## Support

For issues or questions, contact: pittisunilkumar3@gmail.com
