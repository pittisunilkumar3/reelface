/**
 * Email service using custom SMTP API
 * No third-party services - uses your own API endpoint
 * Sends emails to both admin (thereelface@gmail.com) and client (auto-reply)
 */

export interface EmailData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

interface EmailResponse {
  success: boolean;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<EmailResponse> => {
  try {
    const apiEndpoint = 'https://ai.alviongs.com/webhook/f90a9911-c08a-499e-b901-d353f382f807';

    // 1. Send form data to admin (thereelface@gmail.com)
    const adminEmailPayload = {
      sendmail: 'thereelface@gmail.com',
      subject: `New Contact Form Submission: ${data.subject}`,
      message: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background: linear-gradient(to right, #FF1493, #000000); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>

          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #FF1493; margin-bottom: 20px;">Contact Details</h2>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <strong style="color: #374151;">Name:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;">
                  ${data.name}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <strong style="color: #374151;">Email:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <a href="mailto:${data.email}" style="color: #FF1493; text-decoration: none;">${data.email}</a>
                </td>
              </tr>
              ${data.company ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <strong style="color: #374151;">Company:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;">
                  ${data.company}
                </td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <strong style="color: #374151;">Subject:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;">
                  ${data.subject}
                </td>
              </tr>
            </table>

            <div style="margin-top: 20px; padding: 20px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #FF1493;">
              <h3 style="color: #374151; margin: 0 0 10px 0;">Message</h3>
              <p style="color: #6b7280; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.message}</p>
            </div>

            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #f3f4f6; text-align: center; color: #9ca3af; font-size: 12px;">
              <p>Sent from ReelFace Contact Form</p>
              <p>Time: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `
    };

    console.log('🚀 Sending admin email to thereelface@gmail.com...');
    console.log('📤 Admin payload:', JSON.stringify({ sendmail: adminEmailPayload.sendmail, subject: adminEmailPayload.subject }));

    const adminResponse = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(adminEmailPayload)
    });

    console.log('📥 Admin response status:', adminResponse.status);

    let adminResult: any;
    try {
      adminResult = await adminResponse.json();
      console.log('📧 Admin email API response:', adminResult);
    } catch (jsonError) {
      console.error('❌ Failed to parse admin response as JSON:', jsonError);
      const textResponse = await adminResponse.text();
      console.log('📄 Admin response text:', textResponse);
      throw new Error('Invalid API response format');
    }

    // Check if the response indicates success
    // The API might return different success indicators
    if (!adminResponse.ok && adminResponse.status !== 200) {
      throw new Error(adminResult?.message || `Failed to send admin email (Status: ${adminResponse.status})`);
    }

    // 2. Send confirmation email to client
    const clientEmailPayload = {
      sendmail: data.email,
      subject: 'Thank you for contacting ReelFace!',
      message: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background: linear-gradient(to right, #FF1493, #000000); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
          </div>

          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Dear ${data.name},
            </p>

            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Thank you for contacting ReelFace! We've received your message and our team will get back to you as soon as possible.
            </p>

            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #FF1493; margin: 20px 0;">
              <h3 style="color: #374151; margin: 0 0 10px 0; font-size: 16px;">Your Message Summary</h3>
              <p style="color: #6b7280; margin: 5px 0;"><strong>Subject:</strong> ${data.subject}</p>
              ${data.company ? `<p style="color: #6b7280; margin: 5px 0;"><strong>Company:</strong> ${data.company}</p>` : ''}
            </div>

            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              In the meantime, feel free to explore our services or follow us on social media for the latest updates.
            </p>

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://reelface.com" style="background: linear-gradient(to right, #FF1493, #000000); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
                Visit Our Website
              </a>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #f3f4f6; text-align: center;">
              <p style="color: #9ca3af; font-size: 12px; margin: 5px 0;">Best regards,</p>
              <p style="color: #6b7280; font-size: 14px; margin: 5px 0; font-weight: bold;">The ReelFace Team</p>
              <p style="color: #9ca3af; font-size: 12px; margin: 15px 0 5px 0;">
                Email: <a href="mailto:thereelface@gmail.com" style="color: #FF1493; text-decoration: none;">thereelface@gmail.com</a>
              </p>
              <p style="color: #9ca3af; font-size: 12px; margin: 5px 0;">
                Phone: <a href="tel:+919505613553" style="color: #FF1493; text-decoration: none;">+91 9505613553</a>
              </p>
            </div>
          </div>
        </div>
      `
    };

    console.log('🚀 Sending client confirmation email to:', data.email);
    console.log('📤 Client payload:', JSON.stringify({ sendmail: clientEmailPayload.sendmail, subject: clientEmailPayload.subject }));

    const clientResponse = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientEmailPayload)
    });

    console.log('📥 Client response status:', clientResponse.status);

    let clientResult: any;
    try {
      clientResult = await clientResponse.json();
      console.log('📧 Client email API response:', clientResult);
    } catch (jsonError) {
      console.error('❌ Failed to parse client response as JSON:', jsonError);
      const textResponse = await clientResponse.text();
      console.log('📄 Client response text:', textResponse);
      // Don't throw error for client email - it's not critical
      console.warn('⚠️ Client confirmation email failed, but admin email was sent');
    }

    if (!clientResponse.ok && clientResponse.status !== 200) {
      console.warn('⚠️ Client confirmation email failed, but admin email was sent');
    }

    console.log('✅ Emails sent successfully!');
    console.log('📧 Admin email sent to: thereelface@gmail.com');
    console.log('📧 Client confirmation sent to:', data.email);

    return {
      success: true,
      message: 'Email sent successfully!'
    };

  } catch (error) {
    console.error('❌ Email send error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send email. Please try again.'
    };
  }
};
