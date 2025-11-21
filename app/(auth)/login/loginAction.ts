"use server";

import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/supabaseServer";

/**
 * Server Action usado por useFormState.
 * Assinatura: (formData: FormData)
 */
export async function loginAction(formData: FormData) {
  const supabase = createSupabaseServerClient();

  const email = (formData.get("email") || "").toString().trim();
  const password = (formData.get("password") || "").toString();

  if (!email || !password) {
    return { error: "Preencha todos os campos." };
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: "Credenciais inválidas. Tente novamente." };
  }

  // Login OK → redireciona
  redirect("/dashboard");
}
