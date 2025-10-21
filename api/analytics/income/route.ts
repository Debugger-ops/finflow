import { NextResponse } from 'next/server';
import { connectDB } from '../../../libs/mongoConnect';
import { Transaction } from '../../../models/Transaction';
import { requireAuth } from '../../../middleware/auth.middleware';

export async function GET(req: Request) {
  const payload = requireAuth(req);
  if (!payload) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await connectDB();
  const userId = (payload as any).id;

  const income = await Transaction.aggregate([
    { $match: { user: userId, type: 'income' } },
    { $group: { _id: '$category', total: { $sum: '$amount' } } },
    { $sort: { total: -1 } },
  ]);

  return NextResponse.json({ income });
}
