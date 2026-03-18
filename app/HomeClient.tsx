"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function HomeClient() {
  const router = useRouter();
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem("forescribeFirstVisit");
    if (!visited) {
      localStorage.setItem("forescribeFirstVisit", "true");
      router.replace("/signin");
    } else {
      setHasChecked(true);
    }
  }, [router]);

  if (!hasChecked) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  return (
    <main
      role="main"
      aria-label="Forescribe AI"
      className="relative flex min-h-screen flex-col items-center justify-center bg-black"
    >
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-br from-black/50 via-purple-700/20 to-purple-700/50" />
      <section
        aria-labelledby="home-heading"
        className="relative z-20 flex max-w-lg flex-col items-center gap-4 px-4 text-center"
      >
        <Image
          src="/logo.gif"
          alt="Forescribe logo"
          width={60}
          height={60}
          priority
          unoptimized
        />
        <h1
          id="home-heading"
          className="mb-6 text-white text-3xl font-semibold"
        >
          Welcome to Forescribe
        </h1>
        <p className="text-gray-300 max-w-md text-center">
          Sign in to access Forescribe tools
        </p>
        <Button
          text="Go to Sign In"
          href="/signin"
          ariaLabel="Go to sign in page"
        />
      </section>
    </main>
  );
}
