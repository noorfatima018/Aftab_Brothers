import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    // Form submissions are handled directly via FormSubmit.co on the client side.
    return NextResponse.json(
      { success: true, message: 'Enquiry received' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact route error:', error);
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 500 }
    );
  }
}
