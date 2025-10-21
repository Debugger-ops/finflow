import { NextResponse } from 'next/server';
import { connectDB } from '../../../libs/mongoConnect';
import { Transaction } from '../../../models/Transaction';
import { requireAuth } from '../../../middleware/auth.middleware';

export async function GET(req: Request) {
  const payload = requireAuth(req);
  if (!payload) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await connectDB();
  const userId = (payload as any).id;

  const totalIncome = await Transaction.aggregate([
    { $match: { user: userId, type: 'income' } },
    { $group: { _id: null, total: { $sum: '$amount' } } },
  ]);

  const totalExpense = await Transaction.aggregate([
    { $match: { user: userId, type: 'expense' } },
    { $group: { _id: null, total: { $sum: '$amount' } } },
  ]);

  const income = totalIncome[0]?.total || 0;
  const expense = totalExpense[0]?.total || 0;

  return NextResponse.json({
    income,
    expense,
    balance: income - expense,
  });
}
