"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Use NextAuth signIn with credentials
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError(res.error);
      } else {
        // Redirect to dashboard after successful login
        router.push("/dashboard");
      }
    } catch (err) {
      setError("Failed to login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSignIn}
      className="max-w-md mx-auto mt-20 p-6 border rounded-lg shadow-md bg-white"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full p-3 rounded text-white font-semibold transition-colors ${
          loading ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {loading ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
}
