"use client";

import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import { loginAction } from "./loginAction";

const initialState = {
  error: "",
};

export default function LoginPage() {
  const [state, formAction] = useFormState(loginAction, initialState);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <form
        action={formAction}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border"
      >
        <h1 className="text-2xl font-bold mb-2 text-gray-900">
          Welcome back
        </h1>
        <p className="text-gray-600 mb-6 text-sm">
          Sign in to access your dashboard
        </p>

        {state.error && (
          <div className="mb-4 bg-red-50 text-red-700 text-sm p-3 rounded-lg border border-red-200">
            {state.error}
          </div>
        )}

        <div className="mb-4">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="mt-1 w-full border p-3 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-black/80 outline-none transition"
          />
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            name="password"
            type="password"
            required
            placeholder="••••••••"
            className="mt-1 w-full border p-3 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-black/80 outline-none transition"
          />
        </div>

        <SubmitButton />

        <p className="text-sm text-center text-gray-600 mt-6">
          <Link href="/auth/forgot-password" className="underline font-medium">
            Forgot password?
          </Link>
        </p>

        <p className="text-sm text-center text-gray-600 mt-3">
          Don’t have an account?{" "}
          <Link href="/auth/register" className="font-medium text-black underline">
            Create one
          </Link>
        </p>
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
      className="w-full bg-black text-white font-medium p-3 rounded-xl mt-2 disabled:opacity-40 transition"
    >
      {pending ? "Signing in..." : "Sign In"}
    </button>
  );
            }
