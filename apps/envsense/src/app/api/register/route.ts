import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST(request: Request) {
    const { email, password } = await request.json();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
        const data = await response.json();

        // Set the JWT token in an HTTP-only, Secure cookie
        const cookie = serialize('auth_token', data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge: 60 * 60 * 24 * 7,
        });

        const res = NextResponse.json({ message: 'Registration successful' });
        res.headers.set('Set-Cookie', cookie);
        return res;
    } else {
        return NextResponse.json({ message: 'Registration failed' }, { status: 400 });
    }
}
