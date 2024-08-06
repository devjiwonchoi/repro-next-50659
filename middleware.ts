import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.method === 'POST') {
    // You can commenting out this line to see normal behaviour
    return NextResponse.json({ status: 401 })
  }
}

export const config = {
  matcher: '/',
}
