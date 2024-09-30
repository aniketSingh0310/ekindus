import axios from 'axios';
import { NextResponse } from 'next/server';

// Function to send email using Brevo's transactional email API
const sendEmail = async (body) => {
  try {
    const response = await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: { name: 'Ek.indUS Admin', email: 'admin@ekindus.com' }, // Replace with your email
        to: [
          { email: 'info@ekindus.com', name: 'Ek.indUs Admin' }, 
          { email: 'getintouch@notyouridea.com', name: 'Not Your Idea-Ek.indUS' },
        ],
        subject: 'New Form Submission',
        htmlContent: `
          <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; line-height: 1.6;">
            <h2 style="color: #4CAF50;">New Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; font-weight: bold;">Full Name:</td>
                <td style="padding: 10px;">${body.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold;">Email:</td>
                <td style="padding: 10px;">${body.email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold;">Phone:</td>
                <td style="padding: 10px;">${body.phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold;">Country:</td>
                <td style="padding: 10px;">${body.country}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold;">Description:</td>
                <td style="padding: 10px;">${body.description || 'N/A'}</td>
              </tr>
            </table>
            <p style="font-size: 12px; color: #888;">This email was sent from your website.</p>
          </div>
        `,
        textContent: `You have a new form submission from ${body.fullName}.`,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY,
        },
      }
    );

    console.log('Email sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending email:', error.response?.data || error.message);
  }
};

// Function to verify reCAPTCHA token
const verifyRecaptcha = async (token) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY; 
  const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
    params: {
      secret: secretKey,
      response: token,
    },
  });
  return response.data.success;
};

export async function POST(req) {
  // Set CORS headers
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://www.ekindus.com', // Replace with your custom domain
    'Access-Control-Allow-Methods': 'POST, OPTIONS', // Allowed methods
    'Access-Control-Allow-Headers': 'Content-Type, Authorization', // Allowed headers
  };

  // Handle OPTIONS preflight request
  if (req.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 204,
      headers,
    });
  }

  console.log("Received request at /api/submit-form");

  try {
    const body = await req.json();

    // Verify the reCAPTCHA token
    const isHuman = await verifyRecaptcha(body.recaptcha);
    if (!isHuman) {
      return new NextResponse(JSON.stringify({ message: 'CAPTCHA verification failed.' }), {
        status: 400,
        headers,
      });
    }

    // Send email using Brevo
    await sendEmail(body);

    // Return a success response
    return new NextResponse(JSON.stringify({ message: 'Form submitted and email sent successfully' }), {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Error in POST /api/submit-form:", error);
    return new NextResponse(JSON.stringify({ message: 'Failed to submit form' }), {
      status: 500,
      headers,
    });
  }
}
