"use server";

import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/supabaseServer";

type LoginState = {
  error?: string;
};

export async function loginAction(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const supabase = createSupabaseServerClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // 🔐 Login seguro
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: "Credenciais inválidas. Tente novamente." };
  }

  // Sessão criada → redirecionar
  redirect("/dashboard");
}
