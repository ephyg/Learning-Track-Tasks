import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { ProtectedRoutes } from "./utils/constants/constants";

export default async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const isLoggedIn = !!token;
  const pathname = request.nextUrl.pathname;
  if (!isLoggedIn) {
    if (ProtectedRoutes.includes(pathname)) {
      return NextResponse.redirect(new URL("/auth/signIn", request.nextUrl));
    }
  }
  if (isLoggedIn) {
    if (pathname.startsWith("/auth")) {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
  }
  if (pathname === "/auth") {
    return NextResponse.redirect(new URL("/auth/signIn", request.nextUrl));
  }
  return NextResponse.next();
}

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
