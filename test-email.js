// Test script to verify email API
const apiEndpoint = 'https://ai.alviongs.com/webhook/f90a9911-c08a-499e-b901-d353f382f807';

async function testEmail() {
  console.log('🧪 Testing Email API...\n');
  
  // Test 1: Admin Email
  console.log('📧 Test 1: Sending email to thereelface@gmail.com');
  const adminPayload = {
    sendmail: 'thereelface@gmail.com',
    subject: 'Test Email - ReelFace Contact Form',
    message: `
      <h1 style="color: #FF1493;">Test Email</h1>
      <p>This is a test email from ReelFace contact form.</p>
      <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>From:</strong> Test User</p>
      <p><strong>Email:</strong> test@example.com</p>
      <p><strong>Message:</strong> Testing the email functionality.</p>
    `
  };

  console.log('Payload:', JSON.stringify(adminPayload, null, 2));
  
  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(adminPayload)
    });

    console.log('Response Status:', response.status);
    console.log('Response Headers:', Object.fromEntries(response.headers));
    
    const result = await response.json();
    console.log('Response Body:', JSON.stringify(result, null, 2));
    
    if (response.ok) {
      console.log('\n✅ SUCCESS! Email sent to thereelface@gmail.com');
      console.log('📬 Please check:');
      console.log('   1. Inbox at thereelface@gmail.com');
      console.log('   2. SPAM/JUNK folder');
      console.log('   3. Promotions tab (if using Gmail)');
      console.log('   4. All Mail folder');
      console.log('\n⏰ Note: Emails may take 1-2 minutes to arrive');
    } else {
      console.log('\n❌ FAILED! API returned error');
    }
  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
  }

  // Test 2: Client Email
  console.log('\n\n📧 Test 2: Sending confirmation to pittisunilkumar3@gmail.com');
  const clientPayload = {
    sendmail: 'pittisunilkumar3@gmail.com',
    subject: 'Thank you for contacting ReelFace!',
    message: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h1 style="color: #FF1493;">Thank You!</h1>
        <p>Dear Test User,</p>
        <p>This is a confirmation email from ReelFace.</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        <p>Best regards,<br>The ReelFace Team</p>
      </div>
    `
  };

  console.log('Payload:', JSON.stringify(clientPayload, null, 2));
  
  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientPayload)
    });

    console.log('Response Status:', response.status);
    const result = await response.json();
    console.log('Response Body:', JSON.stringify(result, null, 2));
    
    if (response.ok) {
      console.log('\n✅ SUCCESS! Confirmation sent to pittisunilkumar3@gmail.com');
      console.log('📬 Please check the email inbox and spam folder');
    } else {
      console.log('\n❌ FAILED! API returned error');
    }
  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
  }
}

testEmail();
