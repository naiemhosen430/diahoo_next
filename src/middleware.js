import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "/signup";
  const cookieStore = cookies();
  const userCooki = cookieStore.get("user")?.value || null;
  const cookiObjext = JSON.parse(userCooki)

  const accessToken = userCooki && cookiObjext?.token ? cookiObjext?.token : null;

  if (isPublicPath && accessToken) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }

  if (!isPublicPath && !accessToken) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/dashboard", "/signup", "/"],
};
