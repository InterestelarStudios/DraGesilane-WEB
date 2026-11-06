import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dra. Gesilane Maurício | Psicóloga Clínica, Terapeuta ABA e Mediadora Escolar",
  description:
    "Atendimento psicológico clínico especializado, Assistência Terapêutica em ABA e Mediação Escolar Inclusiva com a Dra. Gesilane Maurício (CRP 20/14363). Cuidado humanizado e baseado em evidências.",
  keywords: [
    "Dra. Gesilane Maurício",
    "Psicóloga Gesilane Maurício",
    "CRP 20/14363",
    "Psicologia Infantil Manaus",
    "Assistente Terapêutica ABA",
    "Mediação Escolar TEA",
    "Análise do Comportamento Aplicada",
    "Autismo Manaus"
  ],
  authors: [{ name: "Dra. Gesilane Maurício", url: "https://wa.me/5592981499397" }],
  openGraph: {
    title: "Dra. Gesilane Maurício | Psicologia & Desenvolvimento Humano",
    description: "Promovendo autonomia, comunicação e desenvolvimento saudável com base em afeto e ciência.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[#D2E2D9] selection:text-[#2D4A3E]">
        {children}
      </body>
    </html>
  );
}
