"use client";

import { useFormState, useFormStatus } from "react-dom";
import { resetPasswordAction } from "./resetPasswordAction";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const initialState = {
  error: "",
  success: false,
};

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setEmail(searchParams.get("email"));
  }, [searchParams]);

  const [state, formAction] = useFormState(resetPasswordAction, initialState);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form
        action={formAction}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow border"
      >
        <h1 className="text-xl font-semibold mb-4">Choose a new password</h1>

        {state.error && (
          <p className="text-red-600 text-sm mb-3">{state.error}</p>
        )}

        {state.success && (
          <p className="text-green-600 text-sm mb-3">
            Password successfully updated! You may now log in.
          </p>
        )}

        <input type="hidden" name="email" value={email ?? ""} />

        <label className="text-sm font-medium">New Password</label>
        <input
          name="password"
          type="password"
          required
          className="w-full border p-3 rounded mb-6"
          placeholder="••••••••"
        />

        <SubmitButton />
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-black text-white p-3 rounded disabled:opacity-40"
    >
      {pending ? "Updating..." : "Reset Password"}
    </button>
  );
                              }
