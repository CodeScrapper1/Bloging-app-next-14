"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();
  const { status } = useSession();

  if (status === "loading") {
    return <div>Loading</div>;
  }
  if (status == "authenticated") {
    router.push("/");
  }
  return (
    <div className="grid place-content-center h-[80vh]">
      <div className="flex flex-col justify-center gap-5 items-center mt-16 h-[50vh] w-[500px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.08)] rounded-lg bg-slate-100">
        <h1 className=" text-center text-amber-700 font-bold text-4xl">
          Login
        </h1>
        <div
          className="py-2 px-6 rounded cursor-pointer flex justify-center items-center gap-2 bg-white border-[1px] border-blue-800 text-black font-medium"
          onClick={() => signIn("google")}
        >
          <img
            src="https://pbs.twimg.com/profile_images/1605297940242669568/q8-vPggS_400x400.jpg"
            alt=""
            className="h-10"
          />
          <span>Sign in with Google</span>
        </div>
        <Link
          href="/"
          className="text-center text-xs text-blue-800 cursor-pointer underline"
        >
          Go to home page
        </Link>
      </div>
    </div>
  );
};

export default Login;
