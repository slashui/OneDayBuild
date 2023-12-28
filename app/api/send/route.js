import { EmailTemplate } from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {

    console.log("request:",request);
    const body = await request.json();   
    const {  email, subject, DataOTP  } = body;

    const data = await resend.emails.send({
      from: 'Acme <onboarding@loveai.guru>',
      to: email,
      subject: subject,
      react: EmailTemplate({DataOTP}),
    });

    return NextResponse.json( data );
  } catch (error) {
    return NextResponse.json({error});
  }
}