import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="flex flex-col items-center gap-8 p-8 rounded-xl shadow-xl bg-white/80 dark:bg-black/60 max-w-lg w-full mt-16">
        {/* Logo placeholder */}
        <div className="w-24 h-24 mb-2 flex gap-4 items-center justify-center">
          <Image
            src="/toppay.ico"
            alt="Toppay Logo"
            width={96}
            height={96}
            priority
            className="bg-white"
          />
          <Image
            src="/logo.png"
            alt="Toppay Logo"
            width={96}
            height={96}
            priority
            className="bg-white"
          />
        </div>
        <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 text-center">
          Welcome to Toppay
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-200 text-lg max-w-md">
          Securely verify your identity. Login with your email or phone number
          to get started.
        </p>
        <Link
          href="/login"
          className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition font-semibold text-lg"
        >
          Login to Verify
        </Link>
      </div>
      <footer className="mt-16 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Toppay. All rights reserved.
      </footer>
    </div>
  );
}
