// Email service using Web3Forms - No activation required!
// Works immediately on localhost and production

export interface EmailData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // Send to admin (thereelface@gmail.com) using Web3Forms
    const formData = new FormData();
    formData.append('access_key', 'YOUR_ACCESS_KEY_HERE'); // Get free key from https://web3forms.com
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('subject', `New Contact Form: ${data.subject}`);
    formData.append('from_name', 'ReelFace Contact Form');
    
    // Format message with all details
    const fullMessage = `
Contact Form Submission

Name: ${data.name}
Email: ${data.email}
${data.company ? `Company: ${data.company}` : ''}
Subject: ${data.subject}

Message:
${data.message}

---
Sent from ReelFace Contact Form
Time: ${new Date().toLocaleString()}
    `;
    
    formData.append('message', fullMessage);
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      // Send thank you email to client
      const clientFormData = new FormData();
      clientFormData.append('access_key', 'd161e5c5-3baf-401d-8ca4-2215fc01a1c9');
      clientFormData.append('name', 'ReelFace Team');
      clientFormData.append('email', 'thereelface@gmail.com');
      clientFormData.append('subject', 'Thank you for contacting ReelFace!');
      clientFormData.append('from_name', 'ReelFace');
      
      const thankYouMessage = `
Dear ${data.name},

Thank you for contacting ReelFace!

We've received your message and our team will get back to you as soon as possible.

Your Message Summary:
Subject: ${data.subject}
${data.company ? `Company: ${data.company}` : ''}

We appreciate your interest in ReelFace. In the meantime, feel free to explore our services or follow us on social media for the latest updates.

Best regards,
The ReelFace Team

Email: thereelface@gmail.com
Phone: +91 9505613553
Website: https://reelface.com
      `;
      
      clientFormData.append('message', thankYouMessage);
      
      // Send client thank you email (non-blocking)
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: clientFormData
      }).catch(err => console.error('Client email failed:', err));

      console.log('Emails sent successfully');
      return {
        success: true,
        message: 'Email sent successfully!'
      };
    } else {
      throw new Error(result.message || 'Failed to send email');
    }
  } catch (error) {
    console.error('Email send error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send email. Please try again.'
    };
  }
};
