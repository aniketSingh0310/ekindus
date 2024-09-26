import { JsonDB, Config } from 'node-json-db';
import axios from 'axios';

// Function to send email using Brevo's transactional email API
const sendEmail = async (body) => {
  try {
    const response = await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: { name: 'Ek.indUS Admin', email: 'aniket@ekindus.com' }, // Replace with your email
        to:[{ email: 'info@ekindus.com', name: 'Ek.indUs Admin' }, 
          { email: 'getintouch@notyouridea.com', name: 'Not Your Idea-Ek.indUS' },],

         
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
    console.log('Brevo API Key:', process.env.BREVO_API_KEY);

    console.log('Email sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending email:', error.response?.data || error.message);
  }
};


export async function POST(req) {
  console.log("Received request at /api/submit-form");
  try {
    const body = await req.json();

    // Store the form data in a JSON DB
    const db = new JsonDB(new Config('formDatabase', true, false, '/'));
    db.push('/forms[]', body, true);

    // Send email using Brevo
    await sendEmail(body);

    // Return a success response
    return new Response(JSON.stringify({ message: 'Form submitted and email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error in POST /api/submit-form:", error);
    console.error('Error processing form submission:', error);
    return new Response(JSON.stringify({ message: 'Failed to submit form' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
