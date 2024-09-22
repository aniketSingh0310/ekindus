import { JsonDB, Config } from 'node-json-db';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const body = await req.json();

        // Create a JSON DB instance
        const db = new JsonDB(new Config("formDatabase", true, false, '/'));

        // Store the form data in the JSON DB
        db.push("/forms[]", body, true);

        // Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.example.com', // Replace with your SMTP host (e.g., smtp.gmail.com for Gmail)
            port: 465, // Use port 465 for secure connections or 587 for TLS
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'your_email@example.com', // Replace with your SMTP email
                pass: 'your_email_password', // Replace with your SMTP email password or app password
            },
        });

        // Send an email
        const info = await transporter.sendMail({
            from: '"Your Name" <your_email@example.com>', // Replace with your name and email
            to: 'aniketfcb10@gmail.com', // The recipient email
            subject: 'New Form Submission', // Subject line
            text: `You have a new form submission from ${body.fullName}.`, // Plain text body
            html: `
          <h3>New Form Submission</h3>
          <p><strong>Full Name:</strong> ${body.fullName}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Phone:</strong> ${body.phone}</p>
          <p><strong>Country:</strong> ${body.country}</p>
          <p><strong>Description:</strong> ${body.description || 'N/A'}</p>
        `, // HTML body
        });

        console.log('Message sent: %s', info.messageId);

        // Return a success response
        return new Response(JSON.stringify({ message: 'Form submitted successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Error saving form data:', error);
        return res.status(500).json({ message: 'Failed to submit form' });
    }
}
