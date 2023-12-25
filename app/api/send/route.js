import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();   
    const { email, subject, message , OTP } = body;
    const data = await resend.emails.send({
      from: 'Acme <onboarding@loveai.guru>',
      to: email,
      subject: subject,
      react: message,
    });
    console.log("Hello");
    console.log(data);
    return NextResponse.json( data );
  } catch (error) {
    return NextResponse.json({error});
  }
}