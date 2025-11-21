"use server";

import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

/**
 * Supabase Server Client — versão compatível com o restante do projeto.
 * Usa cookies HttpOnly e é usado por Server Actions (loginAction, etc).
 */
export function createSupabaseServerClient() {
  const cookieStore = cookies();

  return createServerComponentClient({
    cookies: cookieStore,
  });
}
