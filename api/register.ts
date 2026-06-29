import { createClient } from '@libsql/client';

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, password, signupPath } = req.body;

  if (!email || !name) {
    return res.status(400).json({ message: 'Name and email are required' });
  }

  try {
    // Insert user into database
    await client.execute({
      sql: "INSERT INTO users (name, email, password, signup_path, status, subscription_tier) VALUES (?, ?, ?, ?, ?, ?)",
      args: [name, email, password, signupPath, 'Pending', signupPath === 'b2c' ? 'Standard' : 'Clinical']
    });

    console.log(`New user registered: ${email} (${signupPath})`);

    // ALERT: New user signup
    console.log(`ALERT (to aroland@eccm4u.com): New user signup: ${name} (${email}) - Path: ${signupPath}`);
    // Note: In production, call your email service (e.g. MailerSend) here using API key.

    return res.status(200).json({ message: 'User registered successfully' });
  } catch (err: any) {
    console.error('Registration failed:', err);
    return res.status(500).json({ message: 'Registration failed', error: err.message });
  }
}
