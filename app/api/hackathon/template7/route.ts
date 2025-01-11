import { NextResponse } from 'next/server';
import data from '@/data/rental-car-data.json';

export async function GET() {
  return NextResponse.json(data);
}
