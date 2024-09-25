import { JsonDB, Config } from 'node-json-db';
import axios from 'axios';

// Function to send email using Brevo's transactional email API
const sendEmail = async (body) => {
  try {
    const response = await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: { name: 'Aniket', email: 'aniket@ekindus.com' }, // Replace with your email
        to: [{ email: 'info@ekindus.com', name: 'Ek.indUs Admin' }], // Replace with the recipient's email
        subject: 'New Form Submission',
        htmlContent: `
          <h3>New Form Submission</h3>
          <p><strong>Full Name:</strong> ${body.fullName}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Phone:</strong> ${body.phone}</p>
          <p><strong>Country:</strong> ${body.country}</p>
          <p><strong>Description:</strong> ${body.description || 'N/A'}</p>
        `,
        textContent: `You have a new form submission from ${body.fullName}.`,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY, // Store API Key in environment variable
        },
      }
    );

    console.log('Email sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending email:', error.response?.data || error.message);
  }
};

export async function POST(req) {
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
    console.error('Error processing form submission:', error);
    return new Response(JSON.stringify({ message: 'Failed to submit form' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
