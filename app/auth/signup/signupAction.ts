"use server";

import { createSupabaseServerClient } from "@/lib/supabase/supabaseServer";

export async function signupAction(formData: FormData) {
  const supabase = createSupabaseServerClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/verify`,
    },
  });

  if (error) {
    return { error: error.message, success: false };
  }

  return {
    error: "",
    success: true,
  };
    }
