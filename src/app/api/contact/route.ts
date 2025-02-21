import { NextResponse } from 'next/server';
import { z } from 'zod';
import * as mailer from '@sendgrid/mail';

mailer.setApiKey(process.env.SENDGRID_API_KEY!);

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

    const baseSubjectLine = 'Website Contact Form - ';
    const nameSubject = reqData.name ? `${reqData.name}, ` : '';
    const orgSubject = reqData.organization ? `${reqData.organization}, ` : '';

    const message: mailer.MailDataRequired = {
      to: process.env.SEND_TO_EMAIL!,
      from: process.env.SEND_FROM_EMAIL!, // This must be an authenticated SendGrid email
      replyTo: reqData.email, // Reply to the original email provided
      subject: baseSubjectLine + nameSubject + orgSubject + reqData.email,
      text: reqData.message ?? '[No message provided]',
    };

    console.log(message);

    await mailer.send(message);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 },
    );
  }
}
