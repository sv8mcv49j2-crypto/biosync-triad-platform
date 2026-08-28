export const config = { runtime: 'edge' };

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { name, email, signupPath } = (await req.json()) as {
      name: string;
      email: string;
      signupPath: string;
    };

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const resendKey = process.env.RESEND_API_KEY || 're_fcCEQneh_GxdVykSL8BwnawnYbZXN58kE';
            if (!resendKey) {
              console.error('RESEND_API_KEY not set');
              return new Response(JSON.stringify({ error: 'Email service not configured' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
              });
            }

    const timestamp = new Date().toISOString();
    const body = `Name: ${name || 'N/A'}
Email: ${email}
Path: ${signupPath || 'N/A'}
Time: ${timestamp}`;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: 'BioSync Triad <notify@biosync-triad.com>',
        to: ['eccm4u-aebec74e@ctomail.io'],
        subject: `New BioSync Signup: ${name || email}`,
        text: body,
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error('Resend API error:', res.status, errBody);
      return new Response(JSON.stringify({ error: 'Failed to send notification' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('Notify handler error:', err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}