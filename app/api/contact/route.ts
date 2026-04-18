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

    // Forward submission to Tally in the background (fire-and-forget).
    // Tally's hidden submission endpoint accepts URL-encoded POST data.
    const tallyPayload = new URLSearchParams({
      'Full Name': name ?? '',
      Company: company ?? '',
      'Work Email': email ?? '',
      'Phone Number': phone ?? '',
      Message: message ?? '',
    });

    fetch('https://tally.so/r/dW2byN', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: tallyPayload.toString(),
    }).catch(() => {
      // Silently swallow — Tally submission is best-effort.
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
