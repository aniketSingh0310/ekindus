// /api/send/route.ts
import { EmailTemplate } from '@/app/components/shared/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_UVZ9LiKV_HccYxfgZ9GocSTM6Rgaw9uj6');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name } = body;

    const { data, error } = await resend.emails.send({
      from: 'AniketAdmin<info@ekindus.com>',
      to: ['aniketfcb10@gmail.com'],
      subject: 'New Mail From Resend',
      react: EmailTemplate({ firstName: name }),  // Use dynamic data here
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
