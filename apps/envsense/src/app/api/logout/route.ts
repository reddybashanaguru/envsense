import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST() {
    const cookie = serialize('auth_token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 0, // Expire the cookie immediately
    });

    const res = NextResponse.json({ message: 'Logged out successfully' });
    res.headers.set('Set-Cookie', cookie); // Attach expired cookie to the response
    return res;
}
