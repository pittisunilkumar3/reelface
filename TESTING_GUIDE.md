# Contact Form Testing Guide

## Quick Start - Test the Form Now!

### Method 1: Test with Node.js (Fastest)
```bash
node test-email.js
```
This will immediately send test emails to both:
- **Admin:** thereelface@gmail.com
- **Client:** pittisunilkumar3@gmail.com

**Expected Output:**
```
🧪 Testing Email API...
📍 API Endpoint: https://ai.alviongs.com/webhook/...
⏰ Test Time: [timestamp]
────────────────────────────────────────────────────────────────────────────────

📧 Test 1: Sending email to thereelface@gmail.com
📤 Payload: {...}
🚀 Sending request...
📥 Response Status: 200
📧 Response Body (JSON): {...}

✅ SUCCESS! Email sent to thereelface@gmail.com
📬 Please check:
   1. Inbox at thereelface@gmail.com
   2. SPAM/JUNK folder
   3. Promotions tab (if using Gmail)
   4. All Mail folder

⏰ Note: Emails may take 1-2 minutes to arrive
```

### Method 2: Test with React App
1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser** to the URL shown (usually http://localhost:5173)

3. **Navigate to the Contact page**

4. **Fill out the form** with test data:
   - Name: Test User
   - Email: your-email@example.com
   - Company: Test Company (optional)
   - Subject: Test Submission
   - Message: This is a test message

5. **Click "Send Message"**

6. **Check the browser console** (F12 → Console tab) for detailed logs

7. **Verify emails arrive** in both inboxes:
   - Admin email at thereelface@gmail.com
   - Confirmation email at the address you entered

### Method 3: Test with HTML File
1. **Open the test file** in your browser:
   ```
   test-form-integration.html
   ```
   Or from the public folder:
   ```
   public/test-form-integration.html
   ```

2. **Fill out the form** and submit

3. **Watch the real-time logs** on the page

4. **Check both email inboxes**

## What to Look For

### ✅ Success Indicators

#### In Browser Console:
```
🚀 Form submitted with values: {...}
📧 Calling sendEmail function...
📤 Email data: {...}
🚀 Sending admin email to thereelface@gmail.com...
📥 Admin response status: 200
📧 Admin email API response: {...}
🚀 Sending client confirmation email to: user@email.com
📥 Client response status: 200
✅ Emails sent successfully!
```

#### On Screen:
- Success message appears
- Green checkmark icon
- "Message Sent!" confirmation
- Toast notification (top-right corner)

#### In Email:
- **Admin receives:** Full form details with user's information
- **Client receives:** Thank you message with submission summary

### ❌ Error Indicators

#### In Browser Console:
```
❌ Email send error: [error message]
❌ Failed to parse admin response as JSON
❌ Failed to send admin email (Status: XXX)
```

#### On Screen:
- Red error alert box
- Error toast notification
- Form remains filled (not reset)

## Troubleshooting

### Problem: "Invalid API response format"
**Symptoms:** Console shows text response instead of JSON

**Solutions:**
1. Check if the API endpoint is correct
2. Verify the API is online and accessible
3. Look at the text response in console - it might contain an error message
4. Try the test-email.js script to see raw API response

### Problem: "Failed to send admin email (Status: 500)"
**Symptoms:** API returns 500 error

**Solutions:**
1. The API server might be experiencing issues
2. Check the API logs (if you have access)
3. Wait a few minutes and try again
4. Verify the payload format is correct

### Problem: CORS Error
**Symptoms:** Console shows "blocked by CORS policy"

**Solutions:**
1. This shouldn't happen with the current API, but if it does:
2. Use the test-email.js script (Node.js doesn't have CORS restrictions)
3. Or use the HTML test files (they handle CORS better)
4. Contact the API administrator to enable CORS

### Problem: Emails Not Arriving
**Symptoms:** Form submits successfully but no emails received

**Solutions:**
1. **Wait 1-2 minutes** - Email delivery can be delayed
2. **Check SPAM/Junk folders** - New senders often go to spam
3. **Check Promotions tab** (Gmail) - Automated emails often go here
4. **Check All Mail** (Gmail) - Email might be filtered
5. **Verify email addresses** - Make sure they're correct
6. **Check API response** - Does it say the email was sent?
7. **Try test-email.js** - This will show the raw API response

### Problem: Form Validation Errors
**Symptoms:** Can't submit the form

**Solutions:**
- **Name:** Must be at least 2 characters
- **Email:** Must be a valid email format
- **Subject:** Must be at least 5 characters
- **Message:** Must be at least 10 characters
- **Company:** Optional field

## Email Details

### Admin Email (thereelface@gmail.com)
**Subject:** New Contact Form Submission: [User's Subject]

**Contains:**
- User's name
- User's email (clickable)
- Company (if provided)
- Subject
- Full message
- Timestamp
- Styled with ReelFace branding

### Client Email (User's Email)
**Subject:** Thank you for contacting ReelFace!

**Contains:**
- Personalized greeting
- Confirmation message
- Summary of submission
- Call-to-action button
- Contact information
- Styled with ReelFace branding

## API Information

**Endpoint:** `https://ai.alviongs.com/webhook/f90a9911-c08a-499e-b901-d353f382f807`

**Method:** POST

**Headers:**
```json
{
  "Content-Type": "application/json"
}
```

**Payload:**
```json
{
  "sendmail": "recipient@email.com",
  "subject": "Email Subject",
  "message": "<html>HTML formatted email content</html>"
}
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

## Files Involved

### Core Files:
- `src/utils/emailService.ts` - Email sending logic
- `src/components/ContactForm.tsx` - Contact form component
- `src/pages/Contact.tsx` - Contact page

### Test Files:
- `test-email.js` - Node.js test script
- `test-form-integration.html` - Standalone HTML test
- `public/test-form-integration.html` - Public HTML test
- `public/test-email-api.html` - API test page

### Documentation:
- `FORM_FIX_SUMMARY.md` - Technical details of the fix
- `TESTING_GUIDE.md` - This file
- `EMAIL_SETUP.md` - Original email setup documentation

## Need Help?

If you're still experiencing issues:

1. **Run the test script** and share the console output:
   ```bash
   node test-email.js
   ```

2. **Check browser console** and share any error messages

3. **Verify API is accessible** by visiting it in a browser (you'll see an error page, but it confirms it's online)

4. **Contact the API administrator** if the API is returning errors

## Success Checklist

- [ ] Ran `node test-email.js` successfully
- [ ] Saw success messages in console
- [ ] Received admin email at thereelface@gmail.com
- [ ] Received client email at test address
- [ ] Tested via React app (npm run dev)
- [ ] Form submits without errors
- [ ] Both emails arrive with correct formatting
- [ ] No console errors

If all items are checked, the form is working correctly! 🎉

