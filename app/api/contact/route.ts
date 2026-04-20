import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, company, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
    }

    const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
        <h2 style="color: #7c3aed; margin-bottom: 24px;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; width: 140px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">Company</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${company || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #7c3aed;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${phone || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; vertical-align: top;">Message</td>
            <td style="padding: 10px 0; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
      </div>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'DealSpark Contact <onboarding@resend.dev>',
        to: ['luke@dealspark.io'],
        reply_to: email,
        subject: `New enquiry from ${name}${company ? ` — ${company}` : ''}`,
        html,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
