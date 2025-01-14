import { NextResponse } from 'next/server';

interface FormData {
  email: string;
  name?: string;
  organization?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const data: FormData = (await request.json()) as FormData;

    // Log the email data for debugging
    console.log('Debug Email Data:', {
      to: process.env.DEBUG_EMAIL_TO || 'debug@example.com',
      subject: `New Contact Form Submission from ${data.name}`,
      body: `
        Name: ${data.name}
        Email: ${data.email}
        Organization: ${data.organization}
        Message: ${data.message}
      `,
    });

    // In a production environment, you would send the actual email here
    // using a service like SendGrid, AWS SES, or similar
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 },
    );
  }
}
