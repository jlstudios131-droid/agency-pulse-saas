"use server";

import { createSupabaseServerClient } from "@/lib/supabase/supabaseServer";

export async function resetPasswordAction(formData: FormData) {
  const supabase = createSupabaseServerClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Missing data", success: false };
  }

  const { error } = await supabase.auth.updateUser({
    email,
    password,
  });

  if (error) {
    return { error: error.message, success: false };
  }

  return { error: "", success: true };
            }
