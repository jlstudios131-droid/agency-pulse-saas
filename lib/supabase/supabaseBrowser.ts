"use client";

import { createClient } from "@supabase/supabase-js";
import { Database } from "@/lib/types/database";

/**
 * Supabase Browser Client (PROD-READY)
 *
 * - Usado apenas em componentes "use client"
 * - Nunca expõe chaves privadas
 * - Usa apenas a ANON KEY pública
 * - Compatível com autenticação, storage e queries
 */
export function createSupabaseBrowserClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "❌ Missing Supabase environment variables. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
    );
  }

  return createClient<Database>(supabaseUrl, supabaseAnonKey);
}
