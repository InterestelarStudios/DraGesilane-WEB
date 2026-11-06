"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  GraduationCap,
  Sparkles,
  MessageCircle,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Heart,
  Mail,
  Phone
} from "lucide-react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Contatos Oficiais
  const whatsappNumber = "5592981499397";
  const whatsappDisplay = "+55 (92) 98149-9397";
  const emailAddress = "psigeisenm13@gmail.com";
  
  const defaultWhatsAppMsg = encodeURIComponent(
    "Olá, Dra. Gesilane! Gostaria de informações sobre atendimento e agendamento."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${defaultWhatsAppMsg}`;
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent("Contato via Site - Atendimento Psicológico")}`;

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-slate-800 flex flex-col font-sans selection:bg-sky-100 selection:text-sky-900">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-sky-100/80">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="#inicio" className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-sm shadow-sm shadow-sky-500/20">
              G
            </span>
            <div className="leading-tight">
              <span className="text-base font-semibold tracking-tight text-slate-900 block">
                Dra. Gesilane Maurício
              </span>
              <span className="text-xs text-sky-700 font-medium">
                Psicóloga & Desenvolvimento Infantil
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600 font-medium">
            <Link href="#sobre" className="hover:text-sky-600 transition-colors">
              Sobre
            </Link>
            <Link href="#atuacao" className="hover:text-sky-600 transition-colors">
              Atuação
            </Link>
            <Link href="#metodo" className="hover:text-sky-600 transition-colors">
              Metodologia ABA
            </Link>
            <Link href="#duvidas" className="hover:text-sky-600 transition-colors">
              Dúvidas
            </Link>
          </nav>

          {/* Action */}
          <div className="hidden md:block">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold tracking-wide transition-all shadow-sm shadow-sky-500/25 hover:shadow-sky-500/35 active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Agendar Consulta</span>
            </a>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-sky-600"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-sky-100 px-6 py-6 space-y-4">
            <Link
              href="#sobre"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-slate-700 text-sm font-medium hover:text-sky-600"
            >
              Sobre
            </Link>
            <Link
              href="#atuacao"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-slate-700 text-sm font-medium hover:text-sky-600"
            >
              Atuação
            </Link>
            <Link
              href="#metodo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-slate-700 text-sm font-medium hover:text-sky-600"
            >
              Metodologia ABA
            </Link>
            <Link
              href="#duvidas"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-slate-700 text-sm font-medium hover:text-sky-600"
            >
              Dúvidas
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-sky-500 text-white text-xs font-semibold shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section id="inicio" className="pt-16 pb-20 md:pt-24 md:pb-28 relative overflow-hidden">
        {/* Soft friendly ambient glow */}
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-sky-100/70 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Texto Principal */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-800 text-xs font-medium border border-sky-200/80">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                Atendimento Clínico & Mediação Escolar
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 tracking-tight leading-[1.18]">
                Ciência, acolhimento e propósito no{" "}
                <span className="font-semibold text-sky-600">
                  desenvolvimento infantil.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                Sou a <strong>Dra. Gesilane Maurício</strong>, Psicóloga com atuação voltada à 
                <strong> Assistência Terapêutica em ABA</strong> e à <strong>Mediação Escolar</strong>. 
                Construo pontes seguras para que cada criança alcance autonomia, comunicação e confiança.
              </p>

              {/* Botões Amigáveis */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-medium text-sm transition-all shadow-md shadow-sky-500/20 hover:shadow-sky-500/35 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Entrar em contato</span>
                </a>
                <Link
                  href="#atuacao"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-slate-700 hover:text-sky-600 hover:bg-sky-50 transition-colors text-sm font-medium border border-slate-200/80 hover:border-sky-200"
                >
                  <span>Conhecer atuação</span>
                  <ArrowRight className="w-4 h-4 text-sky-500" />
                </Link>
              </div>
            </div>

            {/* Imagem com Borda Suave */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-lg shadow-sky-900/5 border-4 border-white bg-white">
                <Image
                  src="/images/gesilane-hero.jpg"
                  alt="Dra. Gesilane Maurício"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SOBRE MIM ================= */}
      <section id="sobre" className="py-20 bg-white border-y border-sky-100/70">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border-2 border-sky-100/60">
                <Image
                  src="/images/gesilane-about.jpg"
                  alt="Dra. Gesilane Maurício em atuação"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-7 space-y-6">
              <span className="text-xs uppercase font-semibold tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200/60">
                Sobre Minha Prática
              </span>
              <h2 className="text-3xl font-light text-slate-900 tracking-tight">
                Um olhar integral para a singularidade de cada criança.
              </h2>
              <div className="space-y-4 text-slate-600 text-base leading-relaxed font-normal">
                <p>
                  Acredito que o verdadeiro progresso acontece no equilíbrio entre a prática baseada em evidências científicas e o afeto sincero.
                </p>
                <p>
                  Minha trajetória combina a psicologia clínica com a vivência prática como <strong>Assistente Terapêutica (AT) em ABA</strong> e <strong>Mediadora Escolar</strong>, acompanhando crianças com Transtorno do Espectro Autista (TEA) e outras singularidades do desenvolvimento no seu dia a dia real: em casa, na clínica e na escola.
                </p>
              </div>

              {/* 3 Pilares com Toque Azul */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-sky-100">
                <div>
                  <p className="text-lg font-semibold text-sky-950">Ciência</p>
                  <p className="text-xs text-slate-500 mt-0.5">Protocolos com eficácia comprovada</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-sky-950">Afeto</p>
                  <p className="text-xs text-slate-500 mt-0.5">Vínculo e respeito ao tempo individual</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-sky-950">Inclusão</p>
                  <p className="text-xs text-slate-500 mt-0.5">Integração entre família e escola</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ÁREAS DE ATUAÇÃO ================= */}
      <section id="atuacao" className="py-24 bg-[#F7F9FC]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-xl mb-14">
            <span className="text-xs uppercase font-semibold tracking-wider text-sky-700 bg-sky-100/60 px-3 py-1 rounded-full">
              Especialidades
            </span>
            <h2 className="text-3xl font-light text-slate-900 tracking-tight mt-2">
              Áreas de Atuação
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Suporte estruturado para promover autonomia, comunicação funcional e convivência saudável.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-white border border-sky-100 shadow-sm flex flex-col justify-between hover:border-sky-300 hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                  Assistência Terapêutica em ABA
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Aplicação individualizada de programas comportamentais para desenvolvimento de linguagem, habilidades sociais e autonomia diária para indivíduos no espectro autista (TEA).
                </p>
              </div>
              <div className="pt-6">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-sky-600 hover:text-sky-800 inline-flex items-center gap-1"
                >
                  <span>Saber mais</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-white border border-sky-100 shadow-sm flex flex-col justify-between hover:border-sky-300 hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                  Mediação Escolar Inclusiva
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Acompanhamento focado na permanência produtiva do aluno na sala de aula, adaptação de rotinas pedagógicas e facilitação da interação com colegas e professores.
                </p>
              </div>
              <div className="pt-6">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-sky-600 hover:text-sky-800 inline-flex items-center gap-1"
                >
                  <span>Saber mais</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-white border border-sky-100 shadow-sm flex flex-col justify-between hover:border-sky-300 hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                  Psicologia & Suporte Familiar
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Escuta terapêutica acolhedora, regulação emocional, alinhamento de rotinas familiares e suporte parental para lidar com os desafios do desenvolvimento.
                </p>
              </div>
              <div className="pt-6">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-sky-600 hover:text-sky-800 inline-flex items-center gap-1"
                >
                  <span>Saber mais</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= METODOLOGIA (AZUL SERENO E CONFORTÁVEL) ================= */}
      <section id="metodo" className="py-20 bg-gradient-to-br from-sky-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 space-y-6 text-left">
              <span className="inline-block text-xs uppercase font-medium tracking-widest text-sky-300 bg-sky-800/50 px-3.5 py-1 rounded-full border border-sky-700/50">
                Abordagem Baseada em Evidências
              </span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
                Por que trabalhar com a metodologia ABA?
              </h2>
              <p className="text-sky-100/90 text-sm sm:text-base leading-relaxed font-light">
                A Análise do Comportamento Aplicada é o padrão ouro reconhecido mundialmente. Através de metas graduais, reforçamento positivo e acompanhamento de dados, transformamos desafios diários em conquistas reais de autonomia.
              </p>
              <div className="pt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-sky-50 text-sky-900 text-xs font-semibold transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-sky-600" />
                  <span>Tirar dúvidas sobre a metodologia</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-xs aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
                <Image
                  src="/images/gesilane-therapy.jpg"
                  alt="Dra. Gesilane Maurício em terapia"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section id="duvidas" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-semibold tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200/60">
              Esclarecimentos
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-slate-900 tracking-tight mt-2">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="divide-y divide-sky-100">
            {[
              {
                q: "Qual a função da Assistente Terapêutica (AT)?",
                a: "A AT atua diretamente nos ambientes naturais da criança (casa, escola e passeios), aplicando os treinos de habilidades comportamentais e sociais propostos no plano terapêutico.",
              },
              {
                q: "Como a mediação escolar contribui com a escola?",
                a: "O mediador facilita a inclusão prática, auxiliando nas adaptações de atividades, no manejo de sobrecargas sensoriais e fortalecendo os laços com colegas e educadores.",
              },
              {
                q: "Como solicitar um orçamento ou consulta?",
                a: "Basta clicar nos botões de WhatsApp espalhados pela página para conversar diretamente e agendar um alinhamento inicial.",
              },
            ].map((faq, i) => (
              <div key={i} className="py-4">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left flex justify-between items-center py-2 text-slate-800 font-medium text-sm hover:text-sky-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180 text-sky-600" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <p className="pt-2 pb-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA FINAL / CONTATO ================= */}
      <section className="py-20 bg-[#F7F9FC] border-t border-sky-100">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-7">
          <span className="text-xs uppercase font-semibold tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200/60">
            Fale Diretamente Comigo
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-slate-900 tracking-tight">
            Pronto para dar o próximo passo no desenvolvimento?
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Entre em contato para agendar uma consulta, tirar dúvidas sobre mediação escolar ou solicitar uma proposta terapêutica.
          </p>

          {/* Cards de Contato Direto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-2">
            {/* WhatsApp Card */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white border border-sky-100 shadow-xs hover:border-sky-300 hover:shadow-md transition-all group flex flex-col items-center gap-2"
            >
              <div className="w-10 h-10 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">WhatsApp</p>
              <p className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                {whatsappDisplay}
              </p>
              <span className="text-[11px] text-sky-600 font-medium">Clique para conversar →</span>
            </a>

            {/* Email Card */}
            <a
              href={mailtoLink}
              className="p-5 rounded-2xl bg-white border border-sky-100 shadow-xs hover:border-sky-300 hover:shadow-md transition-all group flex flex-col items-center gap-2"
            >
              <div className="w-10 h-10 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">E-mail</p>
              <p className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors break-all">
                {emailAddress}
              </p>
              <span className="text-[11px] text-sky-600 font-medium">Clique para enviar e-mail →</span>
            </a>
          </div>

          <div className="pt-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold transition-all shadow-md shadow-sky-500/20 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Iniciar conversa no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-8 bg-white border-t border-sky-100 text-slate-500 text-xs">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div>
            <p className="text-slate-700 font-semibold">
              Dra. Gesilane Maurício • Psicóloga
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              WhatsApp: {whatsappDisplay} | E-mail: {emailAddress}
            </p>
          </div>
          <p className="text-slate-400">© 2026 Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* ================= WHATSAPP FLUTUANTE AMIGÁVEL ================= */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contato via WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-sky-500 hover:bg-sky-600 text-white flex items-center justify-center shadow-lg shadow-sky-500/30 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </div>
  );
}
