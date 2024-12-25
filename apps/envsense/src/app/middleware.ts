// apps/envsense/src/middleware.ts

import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(request: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Optional: You can verify the token here if needed
  // For now, pass the token to the client by continuing the request

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/*', '/home/*'], // Apply middleware to these routes
};
