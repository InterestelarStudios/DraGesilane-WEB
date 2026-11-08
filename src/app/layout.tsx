import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Gesilane Maurício | Psicóloga infantil, ABA e Mediação Escolar",
  description:
    "Psicóloga infantil para crianças, Assistente Terapêutica em ABA e Mediadora Escolar. CRP 20/14363. Atendimento presencial e online. Psicoterapia e acompanhamento comportamental para ajudar seu filho a compreender emoções e desenvolver autonomia.",
  keywords: [
    "Gesilane Maurício",
    "Gesilane Maurício Psicóloga",
    "Psicóloga infantil Manaus",
    "Psicóloga infantil online",
    "Atendimento presencial e online",
    "CRP 20/14363",
    "Terapia ABA",
    "Assistente Terapêutica",
    "Mediação Escolar",
    "Autismo Infantil"
  ],
  authors: [{ name: "Gesilane Maurício" }],
  openGraph: {
    title: "Gesilane Maurício | Psicóloga infantil",
    description: "Cuidar das emoções também faz parte da infância. Atendimento presencial e online especializado em desenvolvimento e ABA.",
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
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[#E9F0E6] selection:text-[#4C6349]">
        {children}
      </body>
    </html>
  );
}
