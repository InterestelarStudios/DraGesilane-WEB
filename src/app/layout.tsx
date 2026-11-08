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
  title: "Gesilane Maurício | Psicoterapia Infantojuvenil, ABA e Mediação Escolar",
  description:
    "Psicoterapia infantojuvenil (crianças e adolescentes), Assistente Terapêutica em ABA e Mediadora Escolar. CRP 20/14363. Atendimento presencial e online para ajudar crianças e jovens no desenvolvimento emocional e cognitivo.",
  keywords: [
    "Gesilane Maurício",
    "Psicoterapia Infantojuvenil",
    "Psicologia Infantil Manaus",
    "Psicóloga para adolescentes",
    "Terapia ABA Manaus",
    "Mediação Escolar",
    "Atendimento presencial e online",
    "CRP 20/14363"
  ],
  authors: [{ name: "Gesilane Maurício" }],
  openGraph: {
    title: "Gesilane Maurício | Psicoterapia Infantojuvenil",
    description: "Cuidar das emoções faz parte de cada fase do crescimento. Psicoterapia infantojuvenil presencial e online.",
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
