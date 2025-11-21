import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

/**
 * Premium Supabase Server Client
 * - Usado em Server Actions
 * - Usado em layouts e páginas server-side (RSC)
 * - Garante cookies HttpOnly automáticos
 * - Totalmente compatível com Vercel Edge e Node runtimes
 */
export function createSupabaseServerClient() {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          try {
            cookieStore.set(name, value, options);
          } catch {
            // Ignore: Server Actions não permitem escrever cookies
          }
        },
        remove(name: string, options: any) {
          try {
            cookieStore.set(name, "", { ...options, maxAge: 0 });
          } catch {
            // Ignore
          }
        },
      },
    }
  );
        }
