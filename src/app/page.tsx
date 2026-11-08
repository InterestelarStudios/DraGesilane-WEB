"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const crp = "CRP 20/14363";
  const whatsappNumber = "5592981499397";
  const whatsappDisplay = "(92) 98149-9397";
  const emailAddress = "psigeisenm13@gmail.com";

  const defaultWhatsAppMsg = encodeURIComponent(
    "Olá, Gesilane! Gostaria de conversar sobre o atendimento do meu filho."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${defaultWhatsAppMsg}`;
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    "Atendimento Psicológico - Gesilane Maurício"
  )}`;

  return (
    <div className="isa-page">
      {/* ═══ 1. HERO ═══ */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-media">
            <Image
              src="/images/gesilane-hero.jpg"
              alt="Gesilane Maurício — Psicóloga infantil, ABA e Mediação Escolar"
              width={1024}
              height={792}
              priority
            />
          </div>

          <div className="hero-copy">
            <p className="hero-kicker">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-8 6-14 16-15 1 10-5 16-13 16H4z" />
                <path strokeLinecap="round" d="M4 20c4-4 8-7 13-9" />
              </svg>
              <span>Psicóloga infantil</span>
              <span className="kicker-age">· Atendimento Presencial & Online</span>
            </p>

            <div className="hero-rest">
              <div className="hero-logo">
                <Image
                  src="/images/logo-gesilane.png"
                  alt="Gesilane Maurício — Psicóloga, CRP 20/14363"
                  width={380}
                  height={380}
                  priority
                />
              </div>

              <h1>Cuidar das emoções e do desenvolvimento faz parte da infância.</h1>

              <div className="leaf-rule">
                <span></span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-8 6-14 16-15 1 10-5 16-13 16H4z" />
                  <path strokeLinecap="round" d="M4 20c4-4 8-7 13-9" />
                </svg>
                <span></span>
              </div>

              <p className="hero-sub">
                Psicoterapia infantil, intervenção comportamental em ABA e mediação escolar para ajudar seu filho a compreender suas emoções, desenvolver habilidades e alcançar autonomia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. CONECTE-SE COMIGO ═══ */}
      <section className="connect">
        <div className="container">
          <div className="connect-stack">
            <a
              className="conn-main"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="conn-main-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <span className="conn-main-copy">
                <span className="conn-main-title">Quero conversar sobre meu filho</span>
                <span className="conn-main-sub">Fale comigo pelo WhatsApp: {whatsappDisplay}</span>
              </span>
              <svg className="conn-main-chev nudge" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <a className="conn" href={mailtoLink}>
              <span className="conn-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span className="conn-copy">
                <span className="conn-title">E-mail</span>
                <span className="conn-sub">{emailAddress}</span>
              </span>
              <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ═══ 3. SINAIS DO DIA A DIA ═══ */}
      <section className="section" id="sinais">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-8 6-14 16-15 1 10-5 16-13 16H4z" />
              </svg>
              No dia a dia
            </p>
            <h2>Nem sempre uma criança consegue dizer o que está sentindo.</h2>
            <p className="section-lead wide">Seu filho tem apresentado…</p>
          </div>

          <div className="sign-list">
            {[
              "Mudanças repentinas de comportamento?",
              "Dificuldade para lidar com frustrações?",
              "Crises de choro ou irritação frequentes?",
              "Medo ou preocupação excessiva?",
              "Dificuldade para fazer amigos ou brincar junto?",
              "Atrasos na fala ou comunicação?",
              "Dificuldades de atenção e organização?",
              "Resistência para ir à escola ou mudar de rotina?",
              "Dificuldade para expressar o que sente?",
            ].map((sinal, i) => (
              <div key={i} className="sign">
                <span className="sign-mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12.5l4.2 4.2L19 7.5" />
                  </svg>
                </span>
                <p>{sinal}</p>
              </div>
            ))}
          </div>

          <p className="close-note">
            A terapia e a intervenção comportamental podem ser um espaço para compreender o que está por trás desses comportamentos e ajudar a criança a desenvolver novas formas de lidar com suas emoções.
          </p>
        </div>
      </section>

      {/* ═══ 4. COMO EU POSSO AJUDAR ═══ */}
      <section className="section section-cream" id="atendimento">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-8 6-14 16-15 1 10-5 16-13 16H4z" />
              </svg>
              Como eu posso ajudar
            </p>
            <h2>Cada criança tem seu jeito de sentir, pensar e se expressar.</h2>
            <p className="section-lead wide">Na terapia e acompanhamento infantil, podemos trabalhar:</p>
          </div>

          <div className="help-grid">
            <article className="help">
              <span className="help-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20s-7-4.4-7-9.2A4 4 0 0112 8a4 4 0 017 2.8C19 15.6 12 20 12 20z" />
                </svg>
              </span>
              <h3>Emoções</h3>
              <p>Reconhecer, compreender e expressar sentimentos de forma saudável.</p>
            </article>

            <article className="help">
              <span className="help-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path strokeLinecap="round" d="M12 21V10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c-4 0-7-2.2-7-6 4.2 0 7 1.2 7 4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c4 0 7-2 7-5.5-4.2 0-7 1-7 3.8" />
                </svg>
              </span>
              <h3>Autonomia e independência</h3>
              <p>Desenvolver confiança, autocuidado e percepção sobre suas próprias capacidades.</p>
            </article>

            <article className="help">
              <span className="help-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path strokeLinecap="round" d="M4 8.5h10.5a3 3 0 100-5" />
                  <path strokeLinecap="round" d="M4 15.5h14a3 3 0 110 5" />
                  <path strokeLinecap="round" d="M4 12h8" />
                </svg>
              </span>
              <h3>Regulação emocional</h3>
              <p>Aprender estratégias práticas para lidar com raiva, frustração, sobrecargas e ansiedade.</p>
            </article>

            <article className="help">
              <span className="help-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="8" cy="9" r="2.4" />
                  <circle cx="16" cy="10" r="2" />
                  <path strokeLinecap="round" d="M3.5 19c.4-2.8 2.2-4.4 4.5-4.4s4.1 1.6 4.5 4.4" />
                  <path strokeLinecap="round" d="M13.5 18.6c.4-2 1.6-3.4 3.5-3.6" />
                </svg>
              </span>
              <h3>Habilidades sociais</h3>
              <p>Auxiliar na interação com colegas, brincar compartilhado e resolução de conflitos.</p>
            </article>

            <article className="help">
              <span className="help-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 5.5A2.5 2.5 0 016.5 3H20v16H6.5A2.5 2.5 0 004 21.5z" />
                  <path strokeLinecap="round" d="M4 5.5A2.5 2.5 0 016.5 8H20" />
                </svg>
              </span>
              <h3>Mediação & desafios escolares</h3>
              <p>Trabalhar aspectos pedagógicos e sociais na rotina da escola com adaptação e permanência focada.</p>
            </article>

            <article className="help">
              <span className="help-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 11.5L12 4l8 7.5V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1z" />
                </svg>
              </span>
              <h3>Orientação aos pais</h3>
              <p>Apoiar a família com condutas claras no lar, fortalecendo a rotina e o vínculo afetivo.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ═══ 5. PRECISA DE TERAPIA? ═══ */}
      <section className="section" id="duvida">
        <div className="container">
          <div className="doubt">
            <p className="eyebrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-8 6-14 16-15 1 10-5 16-13 16H4z" />
              </svg>
              Uma dúvida comum
            </p>
            <h2>Mas meu filho realmente precisa de terapia?</h2>
            <p>Nem todo comportamento difícil significa que existe um transtorno. Às vezes, a criança está tentando comunicar algo que ainda não consegue colocar em palavras.</p>
            <p>A avaliação psicológica e comportamental ajuda a compreender o que está acontecendo e identificar quais estratégias podem contribuir para o desenvolvimento integral da criança.</p>
            <a
              className="btn"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero conversar sobre meu filho
            </a>
          </div>
        </div>
      </section>

      {/* ═══ 7. COMO FUNCIONA ═══ */}
      <section className="section" id="caminho">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-8 6-14 16-15 1 10-5 16-13 16H4z" />
              </svg>
              Como funciona
            </p>
            <h2>Como funciona o acompanhamento?</h2>
          </div>

          <div className="path">
            <div className="path-step">
              <span className="path-num" aria-hidden="true">01</span>
              <div className="path-body">
                <h3>Conhecer</h3>
                <p>Primeiro, conversamos com os responsáveis para conhecer a história, a rotina e as principais dificuldades percebidas (presencialmente ou online).</p>
              </div>
            </div>

            <div className="path-step">
              <span className="path-num" aria-hidden="true">02</span>
              <div className="path-body">
                <h3>Criar vínculo</h3>
                <p>Com a criança, construímos um espaço seguro e acolhedor, respeitando sua idade e seu jeito de se comunicar.</p>
              </div>
            </div>

            <div className="path-step">
              <span className="path-num" aria-hidden="true">03</span>
              <div className="path-body">
                <h3>Trabalhar através do lúdico e do ABA</h3>
                <p>Utilizamos brincadeiras estruturadas, jogos, desenhos e recursos da ciência do comportamento adequados a cada objetivo.</p>
              </div>
            </div>

            <div className="path-step">
              <span className="path-num" aria-hidden="true">04</span>
              <div className="path-body">
                <h3>Desenvolver habilidades</h3>
                <p>A criança aprende estratégias para compreender emoções, comunicar-se melhor, resolver desafios e conquistar autonomia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 8. NÃO É APENAS BRINCAR ═══ */}
      <section className="section section-cream" id="ludico">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-8 6-14 16-15 1 10-5 16-13 16H4z" />
              </svg>
              A abordagem
            </p>
            <h2>Terapia infantil não é apenas brincar.</h2>
            <p className="section-lead wide">
              O brincar é uma das formas pelas quais a criança se comunica e aprende. Na psicoterapia infantil e na intervenção ABA, utilizamos recursos lúdicos de maneira intencional, dentro de objetivos terapêuticos, para facilitar a expressão, a compreensão e o desenvolvimento de habilidades.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 9. RECURSOS (FOTOS REAIS) ═══ */}
      <section className="section" id="recursos">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-8 6-14 16-15 1 10-5 16-13 16H4z" />
              </svg>
              Recursos terapêuticos
            </p>
            <h2>Um jeito de falar a língua da criança</h2>
          </div>

          <div className="shot-grid">
            <figure className="shot">
              <div className="shot-frame">
                <Image
                  src="/images/atendimento-ludico-1.jpeg"
                  alt="Brinquedos pedagógicos e blocos de encaixe estruturados"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption>Brincar com propósito estruturado</figcaption>
            </figure>

            <figure className="shot">
              <div className="shot-frame">
                <Image
                  src="/images/recurso-aba.jpeg"
                  alt="Coordenação motora fina e treino viso-motor"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption>Estímulos motores e foco</figcaption>
            </figure>

            <figure className="shot">
              <div className="shot-frame">
                <Image
                  src="/images/recurso-desenho.jpeg"
                  alt="Expressão criativa e elaboração de emoções"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption>Desenho e expressão de sentimentos</figcaption>
            </figure>
          </div>

          <p className="close-note">
            Na infância, muitas coisas que ainda não conseguem ser ditas podem aparecer através do brincar.
          </p>
        </div>
      </section>

      {/* ═══ 10. CONHEÇA A PSICÓLOGA ═══ */}
      <section className="section about-section section-cream" id="sobre">
        <div className="container">
          <div className="about-wrap">
            <div className="about-media">
              <Image
                src="/images/gesilane-about.jpg"
                alt="Gesilane Maurício — Psicóloga infantil"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="eyebrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-8 6-14 16-15 1 10-5 16-13 16H4z" />
                </svg>
                Conheça a psicóloga
              </p>
              <h2>Gesilane Maurício</h2>
              <p className="about-crp">{crp}</p>
              <p className="about-text">
                Meu trabalho é dedicado ao desenvolvimento infantil com base em evidências científicas e acolhimento humanizado, atuando diretamente como <strong>Assistente Terapêutica em ABA</strong> e <strong>Mediadora Escolar</strong> em atendimentos presenciais e online.
              </p>
              <h3 className="about-work">Meu trabalho com crianças</h3>
              <p className="about-text">
                Na infância, cada comportamento comunica algo. Por isso, meu objetivo é oferecer um espaço seguro, acolhedor e leve, onde a criança possa brincar, se expressar, compreender suas emoções e desenvolver novas habilidades.
              </p>
              <p className="about-text">
                O atendimento é voltado para crianças e adolescentes, com participação e orientação contínua dos responsáveis e articulação com a escola, fortalecendo a família e garantindo inclusão real.
              </p>
              <p className="about-note">
                Acredito que cuidar da saúde emocional e da autonomia desde cedo é ajudar a criança a construir recursos para toda a vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 11. OS PAIS ═══ */}
      <section className="section" id="pais">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-8 6-14 16-15 1 10-5 16-13 16H4z" />
              </svg>
              Para os pais
            </p>
            <h2>Os pais também fazem parte desse processo.</h2>
            <p className="section-lead wide">
              O acompanhamento infantil não acontece apenas dentro da sessão. A participação dos responsáveis é fundamental para compreender o contexto da criança e favorecer que as habilidades trabalhadas na terapia também façam parte da rotina no lar e na escola.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 12. CTA FINAL ═══ */}
      <section className="offer" id="agendar">
        <div className="band-media" aria-hidden="true">
          <Image
            src="/images/atendimento-ludico-2.jpeg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="offer-inner">
          <p className="eyebrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-8 6-14 16-15 1 10-5 16-13 16H4z" />
            </svg>
            Próximo passo
          </p>
          <h2>Você não precisa descobrir sozinho como ajudar seu filho.</h2>
          <p>Vamos conversar sobre o que está acontecendo?</p>

          <a
            className="offer-btn"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar uma conversa
            <svg className="nudge" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ═══ 13. RODAPÉ ═══ */}
      <footer id="contato">
        <div className="footer-inner">
          <p className="footer-name">Gesilane Maurício</p>

          <p className="footer-lead">
            Psicoterapia infantil, Assistente Terapêutica em ABA e Mediação Escolar, com acompanhamento integrado dos responsáveis.
          </p>

          {/* Indicador de Atendimento Online & Presencial */}
          <div className="footer-modalities">
            <div className="footer-modality-item">
              <span className="footer-modality-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              <div className="footer-modality-text">
                <strong>Atendimento Presencial</strong>
                <span>Clínico, escolar e domiciliar</span>
              </div>
            </div>

            <div className="footer-modality-item">
              <span className="footer-modality-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
                </svg>
              </span>
              <div className="footer-modality-text">
                <strong>Atendimento Online</strong>
                <span>Consultas à distância</span>
              </div>
            </div>
          </div>

          <div className="footer-rule" aria-hidden="true">
            <span></span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-8 6-14 16-15 1 10-5 16-13 16H4z" />
            </svg>
            <span></span>
          </div>

          <div className="footer-socials">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a href={mailtoLink} aria-label="E-mail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          <p className="footer-contact">
            <a href={mailtoLink}>{emailAddress}</a><br />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">{whatsappDisplay}</a>
          </p>

          <p className="footer-copy">© 2026 Gesilane Maurício · Psicóloga infantil · {crp}</p>
        </div>
      </footer>
    </div>
  );
}
