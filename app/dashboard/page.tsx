"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect unauthenticated users
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold mb-4">
        Welcome, {session?.user?.email}!
      </h1>

      <p className="text-gray-700 mb-6">
        This is your dashboard. You can see your profile info and perform user actions here.
      </p>

      <button
        onClick={() => signOut({ callbackUrl: "/auth/signin" })}
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
      >
        Sign Out
      </button>
    </div>
  );
}
