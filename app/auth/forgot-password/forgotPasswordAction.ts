"use server";

import { createSupabaseServerClient } from "@/lib/supabase/supabaseServer";

export async function forgotPasswordAction(formData: FormData) {
  const supabase = createSupabaseServerClient();

  const email = formData.get("email") as string;

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/reset-password`,
  });

  if (error) {
    return { error: error.message, success: false };
  }

  return { error: "", success: true };
}
