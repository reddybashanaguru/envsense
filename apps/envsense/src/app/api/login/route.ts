import { NextResponse } from 'next/server';
import { serialize } from 'cookie';


export async function POST(request: Request) {
  const { email, username, password } = await request.json();

  // Call to your backend for authentication
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, username, password }),
  });

  if (response.ok) {
    const data = await response.json();
    // Set the JWT token in an HTTP-only, Secure cookie
    const cookie = serialize('auth_token', data, {
      httpOnly: true, // Can't access via JavaScript
      secure: process.env.NODE_ENV === 'production', // Set secure in production
      sameSite: 'strict', // Prevents CSRF
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week expiry
    });

    const res = NextResponse.json({ message: 'Logged in successfully' });
    res.headers.set('Set-Cookie', cookie); // Attach the cookie to the response
    return res;
  } else {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }
}
