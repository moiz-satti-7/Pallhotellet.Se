// /app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { firstName, lastName, email, phone, company, orgNr, message } = body;

  // Set up Nodemailer transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Fetch from environment variable
      pass: process.env.EMAIL_PASS, // Fetch from environment variable
    },
  });

  // Define the email options, using environment variable for recipient
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender's email address
    to: process.env.EMAIL_RECIPIENT, // Fetch recipient from environment variable
    subject: "Kontakt från sidan Pallhotellet.se",
    html: `
          <p><strong>Förnamn:</strong> ${firstName}</p>
<p><strong>Efternamn:</strong> ${lastName}</p>
<p><strong>E-post:</strong> ${email}</p>
<p><strong>Telefon:</strong> ${phone}</p>
<p><strong>Företag:</strong> ${company}</p>
<p><strong>Organisationsnummer:</strong> ${orgNr}</p>
<p><strong>Meddelande:</strong> ${message}</p>

        `,
  };

  // Attempt to send the email
  try {
    await transporter.sendMail(mailOptions);
    return new NextResponse(
      JSON.stringify({ message: "Tack för ditt mail, vi kontaktar dig inom kort!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    // Provide a more detailed error response
    return new NextResponse(
      JSON.stringify({
        message: "Failed to send email",
        error: error.message || "Unknown error",
      }),
      { status: 500 }
    );
  }
}
