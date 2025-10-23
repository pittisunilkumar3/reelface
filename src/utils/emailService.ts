// Email service using direct SMTP through a proxy service
// Using Elasticemail API for reliable email delivery

export interface EmailData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // Using getform.io - a reliable free form backend
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('company', data.company || '');
    formData.append('subject', data.subject);
    formData.append('message', data.message);
    
    // Getform.io endpoint - you need to create a free account at getform.io
    // For now, using a test endpoint
    const response = await fetch('https://getform.io/f/bvrryzda', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      console.log('Email sent successfully via getform.io');
      
      // Also send via FormSubmit as backup
      const formData2 = new FormData();
      formData2.append('name', data.name);
      formData2.append('email', data.email);
      formData2.append('_subject', `ReelFace Contact Form: ${data.subject}`);
      formData2.append('_template', 'box');
      formData2.append('_captcha', 'false');
      formData2.append('company', data.company || 'Not specified');
      formData2.append('subject', data.subject);
      formData2.append('message', data.message);
      
      await fetch('https://formsubmit.co/ajax/thereelface@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData2
      });

      return {
        success: true,
        message: 'Email sent successfully!'
      };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email send error:', error);
    
    // Fallback: Try direct FormSubmit
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('_subject', `ReelFace Contact: ${data.subject}`);
      formData.append('_template', 'box');
      formData.append('_captcha', 'false');
      formData.append('company', data.company || 'Not specified');
      formData.append('message', data.message);
      
      const response = await fetch('https://formsubmit.co/ajax/thereelface@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      const result = await response.json();
      
      if (response.ok) {
        return {
          success: true,
          message: 'Email sent successfully!'
        };
      }
    } catch (fallbackError) {
      console.error('Fallback also failed:', fallbackError);
    }
    
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send email. Please try again.'
    };
  }
};
