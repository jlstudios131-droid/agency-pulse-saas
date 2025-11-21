"use server";

import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/types/database";

/**
 * Supabase Server Client (PROD-READY)
 *
 * - Utiliza cookies HttpOnly (seguros)
 * - Funciona com RSC, SSR e Server Actions
 * - Mantém sessão automática
 * - Evita reautenticações manuais
 * - Não usa tokens no frontend → máxima segurança
 */
export function createSupabaseServerClient() {
  const cookieStore = cookies();

  return createServerComponentClient<Database>({
    cookies: cookieStore,
  });
}
