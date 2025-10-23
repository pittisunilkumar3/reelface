// Test script to verify email API
const apiEndpoint = 'https://ai.alviongs.com/webhook/f90a9911-c08a-499e-b901-d353f382f807';

async function testEmail() {
  console.log('🧪 Testing Email API...\n');
  console.log('📍 API Endpoint:', apiEndpoint);
  console.log('⏰ Test Time:', new Date().toLocaleString());
  console.log('─'.repeat(80));

  // Test 1: Admin Email
  console.log('\n📧 Test 1: Sending email to thereelface@gmail.com');
  const adminPayload = {
    sendmail: 'thereelface@gmail.com',
    subject: 'Test Email - ReelFace Contact Form',
    message: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background: linear-gradient(to right, #FF1493, #000000); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Test Email - Contact Form</h1>
        </div>
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <p>This is a test email from ReelFace contact form.</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>From:</strong> Test User</p>
          <p><strong>Email:</strong> test@example.com</p>
          <p><strong>Message:</strong> Testing the email functionality.</p>
        </div>
      </div>
    `
  };

  console.log('📤 Payload:', JSON.stringify({ sendmail: adminPayload.sendmail, subject: adminPayload.subject }, null, 2));

  try {
    console.log('🚀 Sending request...');
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(adminPayload)
    });

    console.log('📥 Response Status:', response.status);
    console.log('📋 Response Headers:', Object.fromEntries(response.headers));

    let result;
    try {
      result = await response.json();
      console.log('📧 Response Body (JSON):', JSON.stringify(result, null, 2));
    } catch (jsonError) {
      const textResult = await response.text();
      console.log('📄 Response Body (Text):', textResult);
      console.log('⚠️  Warning: Response is not valid JSON');
    }

    if (response.ok || response.status === 200) {
      console.log('\n✅ SUCCESS! Email sent to thereelface@gmail.com');
      console.log('📬 Please check:');
      console.log('   1. Inbox at thereelface@gmail.com');
      console.log('   2. SPAM/JUNK folder');
      console.log('   3. Promotions tab (if using Gmail)');
      console.log('   4. All Mail folder');
      console.log('\n⏰ Note: Emails may take 1-2 minutes to arrive');
    } else {
      console.log('\n❌ FAILED! API returned error status:', response.status);
    }
  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    console.error('Stack:', error.stack);
  }

  console.log('\n' + '─'.repeat(80));

  // Test 2: Client Email
  console.log('\n📧 Test 2: Sending confirmation to pittisunilkumar3@gmail.com');
  const clientPayload = {
    sendmail: 'pittisunilkumar3@gmail.com',
    subject: 'Thank you for contacting ReelFace!',
    message: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background: linear-gradient(to right, #FF1493, #000000); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
        </div>
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <p>Dear Test User,</p>
          <p>Thank you for contacting ReelFace! This is a test confirmation email.</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          <p>Best regards,<br>The ReelFace Team</p>
          <p style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #f3f4f6; color: #9ca3af; font-size: 12px;">
            Email: thereelface@gmail.com | Phone: +91 9505613553
          </p>
        </div>
      </div>
    `
  };

  console.log('📤 Payload:', JSON.stringify({ sendmail: clientPayload.sendmail, subject: clientPayload.subject }, null, 2));

  try {
    console.log('🚀 Sending request...');
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientPayload)
    });

    console.log('📥 Response Status:', response.status);

    let result;
    try {
      result = await response.json();
      console.log('📧 Response Body (JSON):', JSON.stringify(result, null, 2));
    } catch (jsonError) {
      const textResult = await response.text();
      console.log('📄 Response Body (Text):', textResult);
      console.log('⚠️  Warning: Response is not valid JSON');
    }

    if (response.ok || response.status === 200) {
      console.log('\n✅ SUCCESS! Confirmation sent to pittisunilkumar3@gmail.com');
      console.log('📬 Please check the email inbox and spam folder');
    } else {
      console.log('\n❌ FAILED! API returned error status:', response.status);
    }
  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    console.error('Stack:', error.stack);
  }

  console.log('\n' + '─'.repeat(80));
  console.log('\n🏁 Test Complete!');
  console.log('📝 Summary:');
  console.log('   - Admin email should arrive at: thereelface@gmail.com');
  console.log('   - Client email should arrive at: pittisunilkumar3@gmail.com');
  console.log('   - Check SPAM folders if emails don\'t appear in inbox');
  console.log('   - Wait 1-2 minutes for email delivery');
}

testEmail();
