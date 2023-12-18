"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();
  return (
    <div className="flex justify-between items-center h-28">
      <Link href="/" className="">
        <img src="/logo.png" alt="" className="h-16 cursor-pointer" />
      </Link>
      <div className="text-md flex items-center gap-5">
        <Link href="/" className="hidden sm:block">
          Home
        </Link>
        <Link href="/contact" className="hidden sm:block">
          Contact
        </Link>
        <Link href="/about" className="hidden sm:block">
          About
        </Link>
        {status !== "authenticated" ? (
          <Link href="/login" className="hidden sm:block">
            Login
          </Link>
        ) : (
          <>
            <Link href="/dashboard" className="hidden sm:block">
              Dashboard
            </Link>
            <span className="hidden sm:block cursor-pointer" onClick={signOut}>
              Logout
            </span>
          </>
        )}
        <div
          className="w-5 h-4 flex sm:hidden flex-col justify-between cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="w-full h-0.5 bg-black"></div>
          <div className="w-full h-0.5 bg-black"></div>
          <div className="w-full h-0.5 bg-black"></div>
        </div>
        {open && (
          <div className="absolute top-20 left-0 bg-white h-screen flex justify-center items-center w-full flex-col text-black gap-10 text-xl z-50">
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            {status !== "authenticated" ? (
              <Link href="/login">Login</Link>
            ) : (
              <>
                <Link href="/dashboard">Dashboard</Link>
                <span onClick={signOut}>Logout</span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
