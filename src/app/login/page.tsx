"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Section } from "@/components/dev/ui/Section";
import { GlowButton } from "@/components/dev/ui/GlowButton";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const result = await signIn("credentials", {
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Contraseña incorrecta");
      setIsLoading(false);
    } else {
      router.push("/admin");
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <Section>
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Admin</h1>
            <p className="text-gray-400">Ingresa tu contraseña</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                className="w-full"
                required
              />
            </div>

            {error && <p className="text-red-400 text-sm text-center">{error}</p>}

            <GlowButton type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Ingresando..." : "Ingresar"}
            </GlowButton>
          </form>

          <p className="mt-6 text-center text-gray-500 text-sm">
            <a href="/" className="hover:text-[#00B4D8] transition-colors">
              ← Volver al inicio
            </a>
          </p>
        </div>
      </Section>
    </main>
  );
}
