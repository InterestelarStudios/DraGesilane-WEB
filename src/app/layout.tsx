import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dra. Gesilane Maurício | Psicóloga, Assistente Terapêutica ABA e Mediadora Escolar",
  description:
    "Atendimento psicológico clínico especializado, Assistência Terapêutica em ABA para TEA e Desenvolvimento Atípico, e Mediação Escolar Inclusiva com a Dra. Gesilane Maurício.",
  keywords: [
    "Psicóloga Gesilane Maurício",
    "Psicologia Infantil",
    "Assistente Terapêutica ABA",
    "Terapia ABA",
    "Mediadora Escolar",
    "Autismo TEA",
    "Educação Inclusiva",
    "Psicoterapia Clínica"
  ],
  authors: [{ name: "Dra. Gesilane Maurício" }],
  openGraph: {
    title: "Dra. Gesilane Maurício | Psicologia & Desenvolvimento Infantil",
    description: "Cuidado humanizado, ciência do comportamento e inclusão escolar.",
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
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased selection:bg-teal-100 selection:text-teal-900">
        {children}
      </body>
    </html>
  );
}
