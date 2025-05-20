import { NextResponse } from "next/server";

export async function middleware(request) {
  const isAuthenticated = false;
  if (!isAuthenticated) {
    // Redirect to the login page if not authenticated
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

// This middleware will only run on the /bookings route
export const config = {
  matcher: ["/bookings"],
};
