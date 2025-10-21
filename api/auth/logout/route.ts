import { NextResponse } from 'next/server';


export async function POST() {
const res = NextResponse.json({ ok: true });
res.headers.set('Set-Cookie', `finflow_token=deleted; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`);
return res;
}