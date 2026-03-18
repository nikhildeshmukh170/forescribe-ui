"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function LoginModal() {
  const Icon = {
    google: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_10_464)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.74125 11C4.74125 10.2855 4.85985 9.60042 5.07177 8.95795L1.36443 6.127C0.641863 7.59395 0.234863 9.24705 0.234863 11C0.234863 12.7516 0.641519 14.4035 1.36288 15.8696L5.06816 13.0331C4.8583 12.3936 4.74125 11.711 4.74125 11Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.2503 4.50003C12.8025 4.50003 14.2045 5.05003 15.3061 5.94997L18.5105 2.75C16.5578 1.04998 14.0543 0 11.2503 0C6.89709 0 3.15571 2.48944 1.36426 6.127L5.07143 8.95795C5.92565 6.36505 8.3606 4.50003 11.2503 4.50003Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.2503 17.5C8.36077 17.5 5.92582 15.635 5.0716 13.0421L1.36426 15.8725C3.15571 19.5106 6.89709 22 11.2503 22C13.9371 22 16.5023 21.0459 18.4275 19.2584L14.9085 16.538C13.9156 17.1634 12.6652 17.5 11.2503 17.5Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.7653 11C21.7653 10.35 21.6651 9.64992 21.5149 9.00006H11.2505V13.25H17.1589C16.8634 14.6991 16.0594 15.813 14.9087 16.538L18.4276 19.2584C20.4499 17.3815 21.7653 14.5855 21.7653 11Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_10_464">
            <rect width="22" height="22" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    microsoft: (
      <svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.56641 8.46554H18.009V0.564548C18.009 0.252797 17.7569 0 17.4461 0H9.56641V8.46554Z"
          fill="white"
        />
        <path
          d="M8.44267 8.46554V0H0.562963C0.252118 0 0 0.252797 0 0.564548V8.46554H8.44267Z"
          fill="white"
        />
        <path
          d="M8.44267 9.59424H0V17.4953C0 17.8067 0.252118 18.0597 0.562963 18.0597H8.44267V9.59424Z"
          fill="white"
        />
        <path
          d="M9.56641 9.59424V18.0597H17.4461C17.7569 18.0597 18.009 17.8067 18.009 17.4953V9.59424H9.56641Z"
          fill="white"
        />
      </svg>
    ),
  };

  const [active, setActive] = useState<"microsoft" | "google">("google");
  const [loading, setLoading] = useState<"microsoft" | "google" | "email" | null>(null);
  const [showEmailForm, setShowEmailForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<{ email: string; password: string }>({
    mode: "onBlur",
  });

  const router = useRouter();

  const handleEmailSubmit = async (data: { email: string; password: string }) => {
    if (loading) return;

    setLoading("email");
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Email login data:", data);
    router.push("/");
  };

  const handleClick = (type: "microsoft" | "google") => {
    if (loading) return;
    setActive(type);
    setLoading(type);
    setTimeout(() => {
      router.push("/");
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex max-w-lg translate-y-[10%] flex-col xl:max-w-md 2xl:max-w-lg"
    >
      <div className="rounded-3xl pointer-events-auto mb-5 flex flex-col items-center gap-7 bg-black/20 px-8 pt-9 pb-11 text-white backdrop-blur-md sm:px-16 xl:gap-6 xl:px-10 2xl:gap-7 2xl:px-16">
        <div className="flex flex-col items-center gap-4 xl:gap-3 2xl:gap-4">
          <Image
            src="/logo.gif"
            alt="logo"
            width={0}
            height={0}
            sizes="60vw"
            unoptimized
            style={{ width: "60px", height: "auto" }}
          />
          <p className="text-[22px] font-semibold xl:text-[20px] 2xl:text-[22px]">
            Welcome to Forescribe
          </p>
        </div>
        <div className="flex w-full flex-col gap-5">
          <div className="flex flex-col gap-3">
            <Button
              text="Continue with Google"
              icon={Icon.google}
              isActive={active === "google"}
              isLoading={loading === "google"}
              onClick={() => handleClick("google")}
              disabled={!!loading}
            />

            <Button
              text="Continue with Microsoft"
              icon={Icon.microsoft}
              isActive={active === "microsoft"}
              isLoading={loading === "microsoft"}
              onClick={() => handleClick("microsoft")}
              disabled={!!loading}
            />

            {!showEmailForm && (
              <button
                type="button"
                onClick={() => setShowEmailForm(true)}
                className="rounded-lg border border-gray-700 bg-white/5 px-4 py-4 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Sign in with email
              </button>
            )}
          </div>

          {showEmailForm && (
            <motion.form
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit(handleEmailSubmit)}
              className="flex flex-col gap-3"
            >
              <div>
                <label htmlFor="email" className="block text-sm text-white mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-lg border border-gray-700 bg-black/60 px-3 py-2 text-white outline-none focus:border-purple-500"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-300">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm text-white mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full rounded-lg border border-gray-700 bg-black/60 px-3 py-2 text-white outline-none focus:border-purple-500"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 characters" },
                  })}
                />
                {errors.password && (
                  <p className="mt-1 text-xs text-red-300">{errors.password.message}</p>
                )}
              </div>

              <div className="flex gap-2 items-center justify-center">
                <button
                  type="submit"
                  className="rounded-lg bg-purple-600 px-4 py-2 font-medium font-sans text-white text-[14px] transition hover:bg-[#4A4A4A] disabled:opacity-60 cursor-pointer"
                  disabled={isSubmitting || !!loading}
                >
                  {isSubmitting || loading === "email" ? "Signing in..." : "Sign-in"}
                </button>

                <button
                  type="button"
                  onClick={() => setShowEmailForm(false)}
                  className="rounded-lg border border-gray-700 bg-white/5 px-4 py-2 font-medium font-sans text-[14px] text-gray-200 hover:bg-white/10 cursor-pointer transition"
                >
                  Cancel
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </motion.div>
  );
}
