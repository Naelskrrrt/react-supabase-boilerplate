"use client";

import { Button } from "@/components/ui/button";
import { KeyRound } from "lucide-react";
import React from "react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import supabaseBrowser from "@/lib/supabase/browser";

function AuthPage() {
  const handleLoginWithOAuth = (provider: "github" | "google") => {
    const supabase = supabaseBrowser();
    supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: location.origin + "auth/callback",
      },
    });
  };

  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <div className="w-96 rounded-md border p-5 space-y-5 bg-slate-900">
        <div className=" flex items-center gap-2 ">
          <KeyRound />
          <h1 className="text-2xl font-bold">Next + Supabase</h1>
        </div>
        <p className="text-sm text-gray-300"> Register/SignIn Today 👇</p>
        <div className="flex flex-col gap-5">
          <Button
            className="flex gap-2 w-full"
            variant="outline"
            onClick={() => handleLoginWithOAuth("github")}
          >
            <FaGithub /> Github
          </Button>
          <Button
            className="w-full flex gap-2"
            variant="outline"
            onClick={() => handleLoginWithOAuth("google")}
          >
            <FcGoogle /> Google
          </Button>
        </div>
        <div className="glow-box -z-10"></div>
      </div>
    </div>
  );
}

export default AuthPage;
