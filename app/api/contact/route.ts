import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

// Create email transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, service, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    // Email to business owner
    const businessEmailContent = `
      <h2>New Enquiry from Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${message || 'No message provided'}</p>
      <hr />
      <p>This enquiry was submitted from your website contact form.</p>
    `;

    // Send email to business owner
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'hassanaftab666@gmail.com',
      subject: `New Enquiry from ${name}`,
      html: businessEmailContent,
    });

    // Confirmation email to customer
    const customerEmailContent = `
      <h2>Thank You for Your Enquiry!</h2>
      <p>Dear ${name},</p>
      <p>Thank you for reaching out to Aftab Brothers. We have received your enquiry and will get back to you within 24 hours.</p>
      <p><strong>Your Details:</strong></p>
      <p>Service: ${service || 'Not specified'}</p>
      <p>We look forward to helping you!</p>
      <hr />
      <p>Best regards,<br />Aftab Brothers Team</p>
    `;

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: phone.includes('@') ? phone : 'hassanaftab666@gmail.com',
      subject: 'We Received Your Enquiry - Aftab Brothers',
      html: customerEmailContent,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
