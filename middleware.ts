import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Supabase Auth cookies oficiais (HttpOnly)
// Estes cookies são criados automaticamente pelo Supabase com Auth Helpers
const ACCESS_TOKEN = "sb-access-token";
const REFRESH_TOKEN = "sb-refresh-token";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Ler cookies de autenticação
  const accessToken = req.cookies.get(ACCESS_TOKEN)?.value;
  const refreshToken = req.cookies.get(REFRESH_TOKEN)?.value;

  const isAuthenticated = Boolean(accessToken || refreshToken);

  // Rotas públicas relacionadas à autenticação
  const isAuthPage =
    pathname.startsWith("/auth/login") ||
    pathname.startsWith("/auth/signup") ||
    pathname.startsWith("/auth/forgot-password") ||
    pathname.startsWith("/auth/reset-password") ||
    pathname.startsWith("/auth/verify");

  // Rotas privadas (dashboard + qualquer subpágina)
  const isProtectedRoute = pathname.startsWith("/dashboard");

  // Usuário autenticado tentando entrar em login/signup → redirecionar
  if (isAuthenticated && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Usuário NÃO autenticado tentando entrar em rotas privadas → login
  if (!isAuthenticated && isProtectedRoute) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/auth/login",
    "/auth/signup",
    "/auth/forgot-password",
    "/auth/reset-password",
    "/auth/verify",
    "/dashboard/:path*",
  ],
};
