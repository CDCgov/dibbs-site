import { NextResponse } from 'next/server';
import { z } from 'zod';

export async function POST(request: Request) {
  try {
    // Object must have correct shape
    const FormData = z.object({
      email: z.string().email().trim().nonempty(),
      name: z.string().trim().optional(),
      organization: z.string().trim().optional(),
      message: z.string().trim().optional(),
    });

    const data = await request.json();

    // Validate, throws an error if requirements are not met
    FormData.parse(data);

    type FormData = z.infer<typeof FormData>;
    const reqData: FormData = data;

    // Log the email data for debugging
    console.log('Debug Email Data:', {
      to: process.env.DEBUG_EMAIL_TO || 'debug@example.com',
      subject: `New Contact Form Submission from ${reqData.name}`,
      body: {
        name: reqData.name,
        email: reqData.email,
        organization: reqData.organization,
        message: reqData.message,
      },
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
