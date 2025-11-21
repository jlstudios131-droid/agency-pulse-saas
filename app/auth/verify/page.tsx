export default function VerifyPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow border text-center">
        <h1 className="text-xl font-semibold mb-4">Check your email</h1>

        <p className="text-gray-700 text-sm">
          We’ve sent you a verification link.  
          Please open your email and confirm your account to continue.
        </p>

        <p className="text-gray-600 text-xs mt-4">
          After verifying, you can close this page and sign in.
        </p>
      </div>
    </div>
  );
}
