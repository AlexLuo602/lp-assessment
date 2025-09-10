import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ message: "Thanks for submitting. We will be in touch if we'd like to proceed further." });
}