"use client";

import { motion } from "framer-motion";
import CardGrid from "@/components/layout/CardGrid";
import LoginModal from "@/components/sections/LoginModal";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Link from "next/link";

export default function SignInPage() {
  return (
    <motion.main
      role="main"
      aria-label="Sign in page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex min-h-screen flex-col items-center justify-between bg-black"
    >
      <div className="absolute inset-0 flex h-screen w-full flex-row gap-2 overflow-hidden bg-black px-2">
        <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(126deg,rgba(0,0,0,0.50)_40.27%,rgba(139,61,255,0.50)_103.26%,rgba(139,61,255,0.50)_115.06%)]" />

        <div className="pointer-events-none absolute inset-0 z-30 pt-12 pl-4 sm:pl-14">
          <Link
            href="/"
            className="pointer-events-auto flex items-center md:justify-start justify-center gap-2 cursor-pointer"
            aria-label="Return to home"
          >
            <svg
              width="163"
              height="38"
              viewBox="0 0 163 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_10_425)">
                <path
                  d="M32.9606 12.8186H36.4193V15.4041H32.9606V27.8858H30.2705V15.4041H27.8761V12.8186H30.2705C30.2705 9.66841 31.3052 6.72629 35.4142 6.72629C35.828 6.72629 36.0645 6.72629 36.4193 6.78572V9.01461C36.2419 9.01461 35.9167 8.98489 35.7098 8.98489C33.2858 8.98489 32.9902 10.56 32.9606 12.8186Z"
                  fill="white"
                />
                <path
                  d="M53.7717 20.3671C53.7717 24.7059 50.4313 28.2722 45.9084 28.2722C41.3856 28.2722 38.0452 24.7059 38.0452 20.3671C38.0452 16.0282 41.3856 12.4619 45.9084 12.4619C50.4313 12.4619 53.7717 16.0282 53.7717 20.3671ZM51.0225 20.3671C51.0225 17.2763 48.8645 15.0177 45.9084 15.0177C42.9523 15.0177 40.8239 17.2763 40.8239 20.3671C40.8239 23.4578 42.9523 25.6867 45.9084 25.6867C48.8645 25.6867 51.0225 23.4281 51.0225 20.3671Z"
                  fill="white"
                />
                <path
                  d="M64.4137 12.4619V15.5229C59.9795 14.988 59.4178 18.3759 59.4178 21.1397V27.8858H56.7278V12.8186H59.4178V15.4338C60.4229 13.4129 62.4922 12.4619 64.4137 12.4619Z"
                  fill="white"
                />
                <path
                  d="M80.6723 21.5261H68.7591C69.173 23.9927 71.0058 25.6867 73.9323 25.6867C75.5582 25.6867 77.0363 25.0626 77.864 23.9927L80.0811 25.4192C78.7508 27.232 76.5633 28.2722 73.9323 28.2722C68.9661 28.2722 65.8917 24.7059 65.8917 20.3671C65.8917 16.0282 69.0843 12.4619 73.4889 12.4619C77.5684 12.4619 81.3818 15.9093 80.6723 21.5261ZM77.9527 19.208C77.5979 16.6522 76.0312 15.0177 73.4889 15.0177C70.9467 15.0177 69.173 16.7117 68.7591 19.208H77.9527Z"
                  fill="white"
                />
                <path
                  d="M94.3 23.3686C94.3 26.0433 92.4081 28.2722 88.4173 28.2722C85.4612 28.2722 82.9781 27.0834 82.3868 24.8248L85.0178 23.9333C85.2543 24.7059 86.0524 25.7758 88.4764 25.7758C90.4275 25.7758 91.5212 24.9734 91.5212 23.6361C91.5212 21.8827 89.0085 21.8827 86.9393 21.4072C84.1309 20.7831 82.9189 19.4161 82.9189 17.1872C82.9189 14.4234 85.1951 12.4619 88.4469 12.4619C90.8709 12.4619 93.0288 13.7101 93.5609 15.939L91.0482 16.6225C90.7822 15.7904 89.8954 14.8989 88.2104 14.8989C86.7323 14.8989 85.6386 15.731 85.6386 16.9791C85.6386 18.6731 87.7078 18.792 89.4224 19.1486C93.088 19.9213 94.3 21.11 94.3 23.3686Z"
                  fill="white"
                />
                <path
                  d="M108.43 23.2795L110.736 24.5276C109.376 26.7565 107.011 28.2722 104.085 28.2722C99.5618 28.2722 96.2214 24.7059 96.2214 20.3671C96.2214 16.0282 99.5618 12.4619 104.085 12.4619C107.011 12.4619 109.376 13.9776 110.736 16.1768L108.43 17.4546C107.543 15.9687 105.977 15.0177 104.085 15.0177C101.129 15.0177 98.9706 17.2763 98.9706 20.3671C98.9706 23.4578 101.129 25.6867 104.085 25.6867C105.977 25.6867 107.543 24.7654 108.43 23.2795Z"
                  fill="white"
                />
                <path
                  d="M120.935 12.4619V15.5229C116.5 14.988 115.939 18.3759 115.939 21.1397V27.8858H113.249V12.8186H115.939V15.4338C116.944 13.4129 119.013 12.4619 120.935 12.4619Z"
                  fill="white"
                />
                <path
                  d="M123.713 8.59855C123.713 7.76644 124.393 7.05319 125.25 7.05319C126.108 7.05319 126.788 7.76644 126.788 8.59855C126.788 9.43067 126.108 10.1439 125.25 10.1439C124.393 10.1439 123.713 9.46039 123.713 8.59855ZM123.891 12.8186H126.61V27.8858H123.891V12.8186Z"
                  fill="white"
                />
                <path
                  d="M146.061 20.3671C146.061 24.3196 143.253 28.2722 138.582 28.2722C135.981 28.2722 134.267 27.2023 133.143 25.7758V27.8858H130.453V7.08292H133.143V14.9286C134.267 13.5318 135.981 12.462 138.582 12.462C143.253 12.462 146.061 16.4145 146.061 20.3671ZM143.283 20.3671C143.283 17.3358 141.42 15.0177 138.316 15.0177C135.035 15.0177 133.143 17.3952 133.143 20.3671C133.143 23.3389 135.035 25.6867 138.316 25.6867C141.42 25.6867 143.283 23.3983 143.283 20.3671Z"
                  fill="white"
                />
                <path
                  d="M162.911 21.5261H150.998C151.412 23.9927 153.245 25.6867 156.171 25.6867C157.797 25.6867 159.275 25.0626 160.103 23.9927L162.32 25.4192C160.99 27.232 158.802 28.2722 156.171 28.2722C151.205 28.2722 148.131 24.7059 148.131 20.3671C148.131 16.0282 151.323 12.4619 155.728 12.4619C159.807 12.4619 163.621 15.9093 162.911 21.5261ZM160.192 19.208C159.837 16.6522 158.27 15.0177 155.728 15.0177C153.186 15.0177 151.412 16.7117 150.998 19.208H160.192Z"
                  fill="white"
                />
                <path
                  d="M0 10.8571L19.599 0V8.90563L0 19.8321V10.8571Z"
                  fill="#8B3DFF"
                />
                <path
                  d="M7.46911 38V28.7774L19.599 22.2492V13.3931L0 24.3196V33.8592L7.46911 38Z"
                  fill="#8B3DFF"
                />
              </g>
              <defs>
                <clipPath id="clip0_10_425">
                  <rect width="163" height="38" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
        <div className="pointer-events-none absolute inset-x-7 inset-y-0 z-40 flex flex-col items-center justify-center">
          <RevealOnScroll>
            <LoginModal />
          </RevealOnScroll>
          <RevealOnScroll className="mt-6">
            <p className="pointer-events-auto text-white font-normal text-[11px] max-w-112.5">
              By clicking “Continue with Google/Microsoft” above, you acknowledge
              that you have read and understood, and agree to Forescribe&apos;s <a href="/terms-condition" className="text-purple-600 hover:text-purple-500">Terms &
              Conditions</a> and <a href="/privacy-policy" className="text-purple-600 hover:text-purple-500">Privacy Policy.</a>
            </p>
          </RevealOnScroll>
        </div>
        <RevealOnScroll>
          <CardGrid />
        </RevealOnScroll>
      </div>
    </motion.main>
  );
}
