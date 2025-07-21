import Image from "next/image";

export default function VerificationPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="flex flex-col items-center gap-6 p-8 rounded-xl shadow-xl bg-white/90 dark:bg-black/70 max-w-lg w-full mt-16">
        <div className="w-24 h-24 mb-2 flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Toppay Logo"
            width={96}
            height={96}
            priority
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-5xl">🎉</span>
          <h2 className="text-2xl font-bold text-green-700 dark:text-green-300 text-center">
            Verification Complete!
          </h2>
          <p className="text-center text-gray-700 dark:text-gray-200 text-lg max-w-md">
            Your identity has been successfully verified.
            <br />
            Thank you for using Toppay.
          </p>
        </div>
      </div>
      <footer className="mt-16 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Toppay. All rights reserved.
      </footer>
    </div>
  );
}
