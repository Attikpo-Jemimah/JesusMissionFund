"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/About" },
    { name: "Partner With Us", href: "/donate" },
    { name: "Support A Missionary", href: "/missionaries" },
    { name: "Donate", href: "/donate" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/60 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 h-18 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/JMF_Logo-Green_NoBG.png" alt="Logo" className="h-20 w-20" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} className="hover:text-green-700">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth Section */}
        <div className="hidden md:flex items-center space-x-4">
          {status === "authenticated" ? (
            <>
              <Link href="/dashboard" className="text-green-700 font-medium">
                Dashboard
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/signin">Sign In</Link>
              <Link href="/auth/signup" className="px-4 py-2 bg-green-600 text-white rounded">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
