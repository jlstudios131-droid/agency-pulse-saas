import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabaseServer";

export default async function DashboardPage() {
  const supabase = createSupabaseServerClient();

  // Verificar utilizador autenticado (SSR)
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <div className="min-h-screen p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">
        Welcome back, {user.email}
      </h1>

      <div className="p-4 border rounded bg-gray-50">
        <p className="text-sm text-gray-700">
          <b>Status:</b> Logged in successfully.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white border rounded-xl shadow">
          <p className="text-sm text-gray-500">Example Card</p>
          <p className="text-xl font-semibold mt-2">Content</p>
        </div>
        <div className="p-6 bg-white border rounded-xl shadow">
          <p className="text-sm text-gray-500">Example Card</p>
          <p className="text-xl font-semibold mt-2">Content</p>
        </div>
        <div className="p-6 bg-white border rounded-xl shadow">
          <p className="text-sm text-gray-500">Example Card</p>
          <p className="text-xl font-semibold mt-2">Content</p>
        </div>
      </div>
    </div>
  );
            }
