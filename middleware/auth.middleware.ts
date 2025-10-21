import { NextResponse } from 'next/server';
import { verifyToken } from '../libs/utils';


export function requireAuth(req: Request) {
const cookieHeader = req.headers.get('cookie') || '';
const matches = cookieHeader.match(/finflow_token=([^;]+)/);
const token = matches ? matches[1] : null;
if (!token) return null;
const payload = verifyToken(token as string);
return payload;
}