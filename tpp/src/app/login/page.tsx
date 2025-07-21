"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ identifier: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        router.push("/verification");
      } else {
        setError(data.error || "Login failed. Please try again.");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 dark:bg-black/70 p-8 rounded-xl shadow-xl flex flex-col gap-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-700 dark:text-indigo-300 mb-2">
          Login to Toppay
        </h2>
        <div className="w-full h-16 mb-2 flex gap-4 items-center justify-center">
          <Image
            src="/toppay.ico"
            alt="Toppay Logo"
            width={60}
            height={60}
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
        <input
          type="text"
          name="identifier"
          placeholder="Phone Number"
          value={form.identifier}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none bg-white dark:bg-gray-900 dark:text-white"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none bg-white dark:bg-gray-900 dark:text-white"
        />
        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login & Verify"}
        </button>
      </form>
    </div>
  );
}
