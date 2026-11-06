"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Mail,
  ChevronRight,
  Sparkles,
  Brain,
  GraduationCap,
  HeartHandshake,
  CheckCircle2,
  Compass,
  ArrowRight,
  Smile,
  Users
} from "lucide-react";

export default function Home() {
  const crp = "CRP 20/14363";
  const whatsappNumber = "5592981499397";
  const whatsappDisplay = "(92) 98149-9397";
  const emailAddress = "psigeisenm13@gmail.com";

  const defaultWhatsAppMsg = encodeURIComponent(
    "Olá, Dra. Gesilane! Gostaria de mais informações sobre atendimentos e agendamento de consulta/avaliação."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${defaultWhatsAppMsg}`;
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    "Contato via Site - Dra. Gesilane Maurício"
  )}`;

  return (
    <div className="w-full bg-[#FFFFFF] text-[#242E28] overflow-x-hidden font-sans">
      {/* ═══ 1. HERO - VERDE BOTÂNICO ACOLHEDOR COM TOQUES QUENTES ═══ */}
      <section className="relative bg-gradient-to-b from-[#F2F7F4] via-[#FBF9F5] to-[#FFFFFF] pt-8 md:pt-16 pb-14 md:pb-20 overflow-hidden border-b border-[#E2ECE5]">
        {/* Soft background ambient glow */}
        <div className="absolute top-0 right-10 w-[480px] h-[480px] bg-[#3D6454]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[420px] h-[420px] bg-[#2D4A3E]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1080px] mx-auto px-6 md:px-10">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-14">
            
            {/* Lado Esquerdo: Textos Autorais */}
            <div className="flex-1 text-center md:text-left space-y-5">
              {/* Badge de Registro */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D2E2D9] shadow-xs text-xs md:text-sm font-semibold tracking-wide text-[#2D4A3E]">
                <span className="w-2 h-2 rounded-full bg-[#3D6454]"></span>
                <span>Psicóloga Clínica & Comportamental</span>
                <span className="text-stone-300">•</span>
                <span className="text-[#C08A3E] font-bold">{crp}</span>
              </div>

              {/* Título com Personalidade Própria */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.35rem] font-normal leading-[1.15] text-[#1E342B]">
                Construindo caminhos seguros para a autonomia e o florescer de cada indivíduo.
              </h1>

              {/* Divisor Delicado em Verde */}
              <div className="flex items-center justify-center md:justify-start gap-3 py-1">
                <span className="w-14 h-[1.5px] bg-gradient-to-r from-transparent to-[#3D6454]" />
                <Sparkles className="w-4 h-4 text-[#3D6454]" />
                <span className="w-14 h-[1.5px] bg-gradient-to-r from-[#3D6454] to-transparent" />
              </div>

              {/* Descrição Autoral */}
              <p className="text-[#526359] text-base md:text-lg leading-relaxed max-w-[500px]">
                Sou a <strong>Dra. Gesilane Maurício</strong>. Uno a ciência da <strong>Análise do Comportamento Aplicada (ABA)</strong> e a <strong>Mediação Escolar</strong> à sensibilidade clínica, criando pontes sólidas entre família, escola e indivíduo.
              </p>

              {/* Botão de Agendamento em Verde */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#2D4A3E] hover:bg-[#1E342B] text-white text-sm md:text-base font-semibold shadow-lg shadow-[#2D4A3E]/20 transition-all duration-200 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-[#E8F0EC]" />
                  <span>Agendar Consulta / Avaliação</span>
                  <ChevronRight className="w-4 h-4 nudge" />
                </a>

                <Link
                  href="#atuacao"
                  className="text-xs sm:text-sm font-semibold text-[#3D6454] hover:text-[#1E342B] underline underline-offset-4"
                >
                  Conhecer áreas de atuação ↓
                </Link>
              </div>
            </div>

            {/* Lado Direito: Foto com Arco */}
            <div className="w-full max-w-[340px] sm:max-w-[380px] md:max-w-[430px] flex-shrink-0">
              <div className="relative aspect-[4/5] arch-media overflow-hidden shadow-2xl border-4 border-white bg-white">
                <Image
                  src="/images/gesilane-hero.jpg"
                  alt="Dra. Gesilane Maurício - Psicóloga CRP 20/14363"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 2. CANAIS DIRETOS DE ATENDIMENTO ═══ */}
      <section className="bg-white py-12 border-b border-[#E2ECE5]">
        <div className="max-w-[540px] mx-auto px-6 space-y-3.5">
          {/* Card WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 p-5 md:p-6 rounded-[24px] bg-gradient-to-br from-[#2D4A3E] to-[#3D6454] text-white shadow-xl shadow-[#2D4A3E]/15 transition-transform hover:-translate-y-0.5 active:scale-98 overflow-hidden"
          >
            <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm text-white flex items-center justify-center shrink-0 border border-white/20">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="font-display text-xl font-semibold leading-tight">Atendimento via WhatsApp</p>
              <p className="text-xs text-white/80 mt-0.5">{whatsappDisplay} • Mensagens e Agendamentos</p>
            </div>
            <ChevronRight className="w-5 h-5 text-emerald-200 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Card E-mail */}
          <a
            href={mailtoLink}
            className="flex items-center gap-4 p-4 md:p-5 rounded-full bg-[#F4F7F4] border border-[#D2E2D9] text-[#242E28] hover:border-[#3D6454] hover:bg-white hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-[#E8F0EC] text-[#2D4A3E] flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#242E28] leading-tight">Contato por E-mail</p>
              <p className="text-xs text-[#526359] truncate mt-0.5">{emailAddress}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-[#3D6454] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* ═══ 3. QUANDO BUSCAR APOIO PROFISSIONAL? ═══ */}
      <section className="py-20 md:py-24 bg-[#F4F7F4]" id="sinais">
        <div className="max-w-[840px] mx-auto px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#3D6454] bg-[#E8F0EC] px-3.5 py-1 rounded-full border border-[#D2E2D9]">
              Compreensão e Diagnóstico
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1E342B] font-normal max-w-xl mx-auto">
              Sinais e comportamentos que merecem um olhar atento e especializado.
            </h2>
            <p className="text-[#526359] text-sm md:text-base max-w-lg mx-auto">
              Cada manifestação comportamental carrega um significado. Identificar as causas precocemente transforma a jornada da criança:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {[
              "Dificuldade na regulação e desajustes emocionais intensos diante de 'nãos'",
              "Atrasos significativos na aquisição da linguagem, fala ou comunicação alternativa",
              "Dificuldades de socialização e interação espontânea com pares da mesma idade",
              "Sensibilidade auditiva, tátil ou seletividade alimentar severa",
              "Desafios de permanência e engajamento em atividades escolares estruturadas",
              "Comportamentos rígidos, repetitivos ou resistência a pequenas mudanças na rotina",
              "Dificuldades motoras finas, coordenação ou autonomia no autocuidado diário",
              "Necessidade de apoio individualizado (mediação) dentro da sala de aula",
            ].map((sinal, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#E2ECE5] shadow-xs"
              >
                <div className="w-6 h-6 rounded-full bg-[#E8F0EC] text-[#2D4A3E] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 stroke-[2.2]" />
                </div>
                <p className="text-sm text-[#242E28] leading-relaxed">{sinal}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-white border border-[#D2E2D9] text-center max-w-2xl mx-auto shadow-xs">
            <p className="font-display italic text-lg sm:text-xl text-[#2D4A3E] leading-relaxed">
              “O acolhimento correto substitui a incerteza pelo conhecimento prático. Saber como agir é o maior presente que você pode oferecer ao desenvolvimento do seu filho.”
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 4. ÁREAS DE ATUAÇÃO INTEGRADA ═══ */}
      <section className="py-20 md:py-24 bg-white border-y border-[#E2ECE5]" id="atuacao">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="text-center space-y-3 mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#3D6454]">
              Especialidades Clínicas & Práticas
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1E342B] font-normal">
              Apoio completo para cada ambiente da vida da criança.
            </h2>
            <p className="text-[#526359] text-sm md:text-base max-w-md mx-auto">
              Intervenções integradas que alinham evidências científicas e sensibilidade humana:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Assistência Terapêutica em ABA",
                desc: "Aplicação intensiva de protocolos comportamentais com foco no aprendizado de habilidades funcionais, comunicação e independência para pessoas com TEA.",
                icon: <Brain className="w-6 h-6 text-[#2D4A3E]" />,
              },
              {
                title: "Mediação Escolar Especializada",
                desc: "Atuação direta em ambiente escolar para adaptar comandos pedagógicos, prevenir sobrecargas e facilitar a socialização real com colegas.",
                icon: <GraduationCap className="w-6 h-6 text-[#2D4A3E]" />,
              },
              {
                title: "Manejo Comportamental & Crises",
                desc: "Estratégias estruturadas baseadas em reforçamento positivo para compreender funções comportamentais e reduzir comportamentos disruptivos.",
                icon: <Sparkles className="w-6 h-6 text-[#2D4A3E]" />,
              },
              {
                title: "Comunicação Funcional & PECS",
                desc: "Estímulo de repertório verbal, comunicação aumentativa e alternativa para que a criança consiga expressar seus desejos com tranquilidade.",
                icon: <Smile className="w-6 h-6 text-[#2D4A3E]" />,
              },
              {
                title: "Orientação e Parceria Familiar",
                desc: "Capacitação contínua de pais e cuidadores para que as estratégias aplicadas na terapia continuem funcionando de maneira fluida no lar.",
                icon: <HeartHandshake className="w-6 h-6 text-[#2D4A3E]" />,
              },
              {
                title: "Treino de Autonomia (AVDs)",
                desc: "Desenvolvimento de competências para atividades de vida diária: alimentação independente, desfralde, higiene e rotina escolar.",
                icon: <Compass className="w-6 h-6 text-[#2D4A3E]" />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#F4F7F4] border border-[#E2ECE5] shadow-xs flex flex-col justify-between hover:border-[#3D6454] hover:bg-white hover:shadow-md transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#E8F0EC] flex items-center justify-center mb-4 border border-[#D2E2D9]">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[#1E342B] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#526359] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. POR QUE INTERVIR CEDO? (BLOCO DE ESCLARECIMENTO) ═══ */}
      <section className="py-16 md:py-20 bg-[#F2F7F4]">
        <div className="max-w-[720px] mx-auto px-6">
          <div className="p-8 sm:p-12 rounded-[32px] bg-white border border-[#D2E2D9] text-center space-y-5 shadow-sm">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#C08A3E] bg-[#FAF4EB] px-3.5 py-1 rounded-full border border-[#C08A3E]/30">
              A Importância do Tempo
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1E342B] font-normal leading-tight">
              A neuroplasticidade infantil torna o momento presente o melhor para agir.
            </h2>
            <p className="text-[#526359] text-sm sm:text-base leading-relaxed">
              O cérebro da criança está em constante formação. Quanto mais cedo são oferecidos estímulos direcionados e compreendidas as particularidades do desenvolvimento, maiores são os ganhos de qualidade de vida, autonomia e bem-estar para o futuro.
            </p>
            <div className="pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#2D4A3E] hover:bg-[#1E342B] text-white text-sm font-semibold shadow-md transition-all"
              >
                <span>Falar diretamente no WhatsApp</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6. O PROCESSO DE ACOMPANHAMENTO COMPORTAMENTAL ═══ */}
      <section className="py-20 md:py-24 bg-white" id="metodologia">
        <div className="max-w-[720px] mx-auto px-6">
          <div className="text-center space-y-3 mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#3D6454]">
              Metodologia de Atendimento
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1E342B] font-normal">
              Como estruturamos o percurso terapêutico
            </h2>
          </div>

          <div className="relative border-l-2 border-[#3D6454]/30 ml-5 sm:ml-6 space-y-10 pl-6 sm:pl-8">
            {[
              {
                num: "01",
                title: "Anamnese e Avaliação Comportamental",
                desc: "Mapeamento das habilidades atuais, preferências da criança, histórico do desenvolvimento e queixas principais trazidas pela família.",
              },
              {
                num: "02",
                title: "Construção do Plano Individualizado (PTI)",
                desc: "Definição de metas claras e mensuráveis para comunicação, socialização, redução de comportamentos desafiadores e rotina.",
              },
              {
                num: "03",
                title: "Intervenção Prática e Naturalística",
                desc: "Aplicação dos treinos comportamentais através de brincadeiras estruturadas e reforço positivo em ambiente clínico, domiciliar ou escolar.",
              },
              {
                num: "04",
                title: "Acompanhamento de Dados e Orientação Parental",
                desc: "Revisão periódica do progresso com base em registros claros, ajustando os objetivos e alinhando práticas com pais e professores.",
              },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-[35px] sm:-left-[43px] top-0 w-8 h-8 rounded-full bg-white border-2 border-[#2D4A3E] text-[#2D4A3E] font-display font-bold text-xs flex items-center justify-center shadow-xs">
                  {step.num}
                </span>
                <h3 className="font-display text-xl font-semibold text-[#1E342B] mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-[#526359] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. GALERIA DE RECURSOS E MATERIAIS TERAPÊUTICOS ═══ */}
      <section className="py-20 md:py-24 bg-[#F4F7F4] border-y border-[#E2ECE5]" id="recursos">
        <div className="max-w-[1020px] mx-auto px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#3D6454]">
              Ambiente de Estímulo & Recursos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1E342B] font-normal">
              A ciência aplicada de forma leve, envolvente e acolhedora
            </h2>
            <p className="text-[#526359] text-sm md:text-base max-w-lg mx-auto">
              Cada material é selecionado com intencionalidade clínica para estimular o foco, a comunicação espontânea e a sensação de segurança:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-sm border border-[#D2E2D9] bg-white">
                <Image
                  src="/images/atendimento-ludico-1.jpeg"
                  alt="Brinquedos pedagógicos e blocos de encaixe estruturados"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-center font-medium text-[#2D4A3E]">
                Blocos de raciocínio lógico e emparelhamento
              </p>
            </div>

            <div className="space-y-2">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-sm border border-[#D2E2D9] bg-white">
                <Image
                  src="/images/recurso-aba.jpeg"
                  alt="Recursos de coordenação motora fina e treino viso-motor"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-center font-medium text-[#2D4A3E]">
                Coordenação motora fina e atenção compartilhada
              </p>
            </div>

            <div className="space-y-2">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-sm border border-[#D2E2D9] bg-white">
                <Image
                  src="/images/recurso-jogos.jpeg"
                  alt="Jogos para compreensão de regras e interação social"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-center font-medium text-[#2D4A3E]">
                Jogos sociais, turnos de espera e cooperação
              </p>
            </div>

            <div className="space-y-2">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-sm border border-[#D2E2D9] bg-white">
                <Image
                  src="/images/atendimento-ludico-2.jpeg"
                  alt="Espaço preparado para acolhimento e escuta qualificada"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-center font-medium text-[#2D4A3E]">
                Espaço adaptado para acolhimento e regulação
              </p>
            </div>

            <div className="space-y-2">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-sm border border-[#D2E2D9] bg-white">
                <Image
                  src="/images/recurso-desenho.jpeg"
                  alt="Materiais para expressão criativa e organização de pensamentos"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-center font-medium text-[#2D4A3E]">
                Expressão criativa e compreensão de emoções
              </p>
            </div>

            <div className="space-y-2">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-sm border border-[#D2E2D9] bg-white">
                <Image
                  src="/images/recurso-sensorial.jpeg"
                  alt="Materiais sensoriais para autorregulação e calma"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-center font-medium text-[#2D4A3E]">
                Estímulos sensoriais para modulação do humor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 8. CONHEÇA A PSICÓLOGA (SOBRE MIM DETALHADO) ═══ */}
      <section className="py-20 md:py-24 bg-white" id="sobre">
        <div className="max-w-[940px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Foto Editorial em Arco */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] arch-media overflow-hidden shadow-xl border-4 border-white bg-white">
                <Image
                  src="/images/gesilane-about.jpg"
                  alt="Dra. Gesilane Maurício - Psicóloga CRP 20/14363"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Texto Biográfico */}
            <div className="md:col-span-7 space-y-5">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#3D6454]">
                Trajetória e Propósito
              </span>

              <div>
                <h2 className="font-display text-3xl sm:text-4xl text-[#1E342B] font-normal leading-tight">
                  Dra. Gesilane Maurício
                </h2>
                <p className="text-xs font-bold uppercase tracking-widest text-[#C08A3E] mt-1">
                  Psicóloga Clínica • {crp}
                </p>
              </div>

              <div className="space-y-3.5 text-[#526359] text-sm sm:text-base leading-relaxed">
                <p>
                  Minha prática profissional é guiada pelo compromisso ético de promover a evolução genuína de cada assistido. Dedico meus estudos e intervenções ao campo do neurodesenvolvimento infantil, com ênfase no <strong>Transtorno do Espectro Autista (TEA)</strong> e dificuldades de aprendizagem.
                </p>
                <p>
                  Com sólida experiência como <strong>Assistente Terapêutica (AT) em ABA</strong> e <strong>Mediadora Escolar</strong>, atuo conectando as demandas pedagógicas da escola às necessidades individuais do aluno, transformando desafios cotidianos em autonomia prática.
                </p>
                <p>
                  Acredito que o processo terapêutico só é completo quando pais e educadores se tornam parceiros ativos. Trabalhamos juntos para que a criança seja protagonista de sua própria história com confiança e dignidade.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2D4A3E] hover:bg-[#1E342B] text-white text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-[#D2E2D9]" />
                  <span>Conversar com a Dra. Gesilane</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 9. CTA FINAL - BANNER VERDE FLORESTA COM TEXTURA ═══ */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-[#2D4A3E] via-[#1E342B] to-[#14231D] text-white overflow-hidden" id="contato">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3D6454_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative max-w-[680px] mx-auto px-6 text-center space-y-6">
          <span className="text-xs uppercase font-medium tracking-widest text-[#E8F0EC] bg-white/10 px-3.5 py-1 rounded-full border border-white/15">
            Dê o Primeiro Passo
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.2]">
            O desenvolvimento do seu filho merece atenção especializada, científica e afetuosa.
          </h2>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Entre em contato hoje mesmo para tirar dúvidas sobre avaliação inicial, atendimentos domiciliares ou mediação escolar inclusiva.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#3D6454] hover:bg-[#325245] text-white font-semibold text-sm transition-all shadow-xl active:scale-95 border border-white/20"
            >
              <span>Iniciar conversa no WhatsApp</span>
              <ChevronRight className="w-4 h-4 nudge" />
            </a>
          </div>

          <p className="text-xs text-white/60 pt-2">
            Atendimento presencial e suporte escolar • {whatsappDisplay}
          </p>
        </div>
      </section>

      {/* ═══ 10. RODAPÉ INSTITUCIONAL ═══ */}
      <footer className="bg-[#14231D] text-white/70 py-12 text-xs border-t border-white/10">
        <div className="max-w-[940px] mx-auto px-6 text-center space-y-6">
          <div>
            <p className="font-display text-2xl text-white font-normal">
              Dra. Gesilane Maurício
            </p>
            <p className="text-xs text-emerald-200 font-semibold tracking-wider uppercase mt-0.5">
              Psicóloga Clínica • Assistente Terapêutica ABA • {crp}
            </p>
          </div>

          <p className="max-w-md mx-auto text-white/60 leading-relaxed text-xs">
            Cuidado humanizado e prática baseada em evidências científicas para o desenvolvimento e autonomia de crianças e jovens.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-white/80 pt-2">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              WhatsApp: {whatsappDisplay}
            </a>
            <span className="hidden sm:inline">•</span>
            <a href={mailtoLink} className="hover:text-white transition-colors">
              {emailAddress}
            </a>
          </div>

          <div className="pt-6 border-t border-white/10 text-white/40 text-[11px] flex flex-col sm:flex-row justify-between items-center gap-2">
            <p>© 2026 Dra. Gesilane Maurício. Todos os direitos reservados.</p>
            <p>{crp} • Manaus - AM</p>
          </div>
        </div>
      </footer>

      {/* ═══ WHATSAPP FLUTUANTE ═══ */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#2D4A3E] hover:bg-[#1E342B] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/20"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
