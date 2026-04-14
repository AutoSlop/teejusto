"use client";

import { useState } from "react";

/* ───────────────── Icons (inline SVGs) ───────────────── */

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function ScaleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
    </svg>
  );
}

function ListIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
  );
}

function CogIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function BellIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function ChevronIcon({ className, open }: { className?: string; open: boolean }) {
  return (
    <svg
      className={`${className} transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

/* ───────────────── Navbar ───────────────── */

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Problema", href: "#problema" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Features", href: "#features" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur border-b border-primary/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-primary tracking-tight">
          Tee<span className="text-gold">Justo</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-2 inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Solicitar demo
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Menú">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-primary/10 bg-card px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-foreground/70 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 block text-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white"
          >
            Solicitar demo
          </a>
        </div>
      )}
    </nav>
  );
}

/* ───────────────── Hero ───────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #0F6B4B 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-8">
          <span className="h-2 w-2 rounded-full bg-gold" />
          <span className="text-sm font-medium text-primary">Para clubes de golf privados en Bogotá</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight max-w-4xl mx-auto">
          La forma justa de asignar{" "}
          <span className="text-primary">tee times</span> en tu club
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
          TeeJusto automatiza la asignación de salidas de sábado para clubes privados en Bogotá con reglas transparentes, lista de espera automática y menos reclamos de socios.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors"
          >
            Solicitar demo
          </a>
          <a
            href="#como-funciona"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-primary/20 px-8 py-3.5 text-base font-semibold text-primary hover:bg-primary/5 transition-colors"
          >
            Ver cómo funciona
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Problema / Solución ───────────────── */

function ProblemSolution() {
  return (
    <section id="problema" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-sm border border-foreground/5">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="text-sm font-medium text-red-700">El problema</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Asignar tee times de sábado es un dolor de cabeza
            </h2>
            <ul className="space-y-3 text-muted">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                Socios insatisfechos que sienten que el sistema no es justo
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                Reclamos constantes al comité deportivo y a la administración
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                Procesos manuales que consumen horas del equipo operativo
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                Salidas liberadas que no se reasignan eficientemente
              </li>
            </ul>
          </div>
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-sm border border-primary/10">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-primary">La solución</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              TeeJusto: asignación automática, justa y trazable
            </h2>
            <ul className="space-y-3 text-muted">
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                Motor de asignación con reglas configurables por el club
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                Transparencia total: cada socio ve por qué recibió o no su salida
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                Lista de espera automática que llena salidas liberadas al instante
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                Panel administrativo que libera horas de trabajo operativo
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Cómo funciona ───────────────── */

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Los socios solicitan su tee time",
      description:
        "Durante la ventana de solicitud, los socios eligen sus preferencias de horario para el sábado. Sin presión de primero en llegar, primero en servirse.",
    },
    {
      number: "02",
      title: "TeeJusto asigna de forma justa",
      description:
        "Nuestro motor aplica las reglas configuradas por el club (rotación, antigüedad, historial) y asigna las salidas de manera equitativa y auditable.",
    },
    {
      number: "03",
      title: "Todos reciben su resultado",
      description:
        "Cada socio recibe notificación de su asignación o su posición en la lista de espera. Si alguien cancela, el siguiente en la lista es notificado automáticamente.",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 sm:py-28 bg-primary/[0.03]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Cómo funciona</h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Tres pasos simples para pasar de reclamos a tranquilidad
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative bg-card rounded-2xl p-8 shadow-sm border border-foreground/5">
              <span className="text-5xl font-black text-primary/10">{step.number}</span>
              <h3 className="mt-4 text-xl font-bold text-foreground">{step.title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Features ───────────────── */

function Features() {
  const features = [
    {
      icon: <ClockIcon className="h-7 w-7" />,
      title: "Ventana de solicitud",
      description:
        "Período configurable donde los socios registran sus preferencias de horario, eliminando la carrera por llegar primero.",
    },
    {
      icon: <ScaleIcon className="h-7 w-7" />,
      title: "Motor de asignación justa",
      description:
        "Algoritmo con reglas configurables: rotación, antigüedad, historial de asistencia y más. Cada asignación es auditable.",
    },
    {
      icon: <ListIcon className="h-7 w-7" />,
      title: "Lista de espera automática",
      description:
        "Cuando se libera una salida, el siguiente socio en la lista es notificado automáticamente. Mejor ocupación garantizada.",
    },
    {
      icon: <CogIcon className="h-7 w-7" />,
      title: "Panel administrativo",
      description:
        "Dashboard completo para el club: configurar reglas, ver estadísticas, gestionar excepciones y exportar reportes.",
    },
    {
      icon: <BellIcon className="h-7 w-7" />,
      title: "Notificaciones y trazabilidad",
      description:
        "Emails automáticos en cada paso del proceso. Historial completo de asignaciones para auditoría y transparencia.",
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Features del MVP</h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Todo lo que tu club necesita para una asignación justa desde el día uno
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-card rounded-2xl p-8 shadow-sm border border-foreground/5 hover:border-primary/20 hover:shadow-md transition-all duration-200"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                {f.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-muted leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Beneficios ───────────────── */

function Benefits() {
  const benefits = [
    {
      stat: "-80%",
      title: "Menos reclamos de socios",
      description: "Reglas claras y transparentes eliminan la percepción de favoritismo.",
    },
    {
      stat: "-60%",
      title: "Menos carga operativa",
      description: "Automatización que libera horas del equipo de golf y administración.",
    },
    {
      stat: "100%",
      title: "Reglas claras y auditables",
      description: "Cada asignación tiene trazabilidad completa. Sin cajas negras.",
    },
    {
      stat: "+95%",
      title: "Mejor ocupación de salidas",
      description: "La lista de espera automática llena las salidas liberadas al instante.",
    },
  ];

  return (
    <section id="beneficios" className="py-20 sm:py-28 bg-primary/[0.03]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Beneficios para tu club</h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Resultados concretos desde la primera semana de implementación
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-primary">{b.stat}</div>
              <h3 className="mt-3 text-lg font-bold text-foreground">{b.title}</h3>
              <p className="mt-2 text-muted">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Pricing ───────────────── */

function Pricing() {
  const plans = [
    {
      name: "Plan Piloto",
      price: "900.000",
      period: "/mes por club",
      description: "Ideal para clubes que quieren probar TeeJusto con su operación actual.",
      features: [
        "Hasta 500 socios activos",
        "Motor de asignación justa",
        "Lista de espera automática",
        "Panel administrativo básico",
        "Notificaciones por email",
        "Soporte por email",
      ],
      cta: "Solicitar demo",
      highlighted: false,
    },
    {
      name: "Plan Club Plus",
      price: "1.500.000",
      period: "/mes por club",
      description: "Para clubes que necesitan reglas avanzadas y mayor capacidad.",
      features: [
        "Socios ilimitados",
        "Reglas de asignación avanzadas",
        "Lista de espera con prioridades",
        "Panel administrativo completo",
        "Reportes y estadísticas",
        "Soporte prioritario",
        "Integración con sistemas del club",
        "Onboarding personalizado",
      ],
      cta: "Solicitar demo",
      highlighted: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Planes y precios</h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Precios transparentes, sin costos ocultos. Incluye implementación y acompañamiento.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 lg:p-10 ${
                plan.highlighted
                  ? "bg-primary text-white shadow-xl shadow-primary/20 ring-2 ring-primary"
                  : "bg-card shadow-sm border border-foreground/5"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-gold px-4 py-1 text-sm font-bold text-foreground">
                    Recomendado
                  </span>
                </div>
              )}
              <h3 className={`text-xl font-bold ${plan.highlighted ? "text-white" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <p className={`mt-2 text-sm ${plan.highlighted ? "text-white/70" : "text-muted"}`}>
                {plan.description}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-sm font-medium opacity-70">COP</span>
                <span className="text-4xl font-black">{plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? "text-white/70" : "text-muted"}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <CheckIcon
                      className={`mt-0.5 h-4 w-4 shrink-0 ${plan.highlighted ? "text-gold" : "text-primary"}`}
                    />
                    <span className={plan.highlighted ? "text-white/90" : "text-foreground/80"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`mt-8 block text-center rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-white hover:bg-primary-dark"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── FAQ ───────────────── */

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-foreground/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-base font-semibold text-foreground pr-4">{question}</span>
        <ChevronIcon className="h-5 w-5 text-muted shrink-0" open={open} />
      </button>
      {open && (
        <div className="pb-5 text-muted leading-relaxed">{answer}</div>
      )}
    </div>
  );
}

function FAQ() {
  const faqs = [
    {
      question: "¿Qué tan rápido se puede implementar TeeJusto?",
      answer:
        "La implementación típica toma entre 2 y 4 semanas, incluyendo configuración de reglas del club, carga de datos de socios y capacitación del equipo administrativo.",
    },
    {
      question: "¿Se puede personalizar las reglas de asignación?",
      answer:
        "Sí, el motor de asignación es completamente configurable. El club define sus propias reglas de prioridad: rotación, antigüedad del socio, historial de asignaciones, categorías de membresía y más.",
    },
    {
      question: "¿Qué pasa si un socio cancela su salida?",
      answer:
        "La lista de espera automática se activa inmediatamente. El siguiente socio elegible recibe una notificación y tiene un tiempo configurable para confirmar. Si no confirma, pasa al siguiente.",
    },
    {
      question: "¿Los socios necesitan descargar una app?",
      answer:
        "No. TeeJusto funciona 100% desde el navegador web, optimizado para celular y computador. No requiere instalación ni descargas.",
    },
    {
      question: "¿Cómo se integra con los sistemas actuales del club?",
      answer:
        "TeeJusto puede funcionar de forma independiente o integrarse con el software de gestión del club. En el Plan Club Plus incluimos integración personalizada con los sistemas existentes.",
    },
    {
      question: "¿Los datos de los socios están seguros?",
      answer:
        "Absolutamente. Toda la información se almacena en servidores seguros con cifrado en tránsito y en reposo. Cumplimos con las regulaciones de protección de datos de Colombia.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-primary/[0.03]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Preguntas frecuentes</h2>
        </div>
        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Contact Form ───────────────── */

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    club: "",
    cargo: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Solicita una demo personalizada
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              Te mostramos cómo TeeJusto puede transformar la asignación de tee times en tu club. Sin compromiso, sin costo.
            </p>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted">info@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Teléfono</p>
                  <p className="text-muted">+00 000 000 0000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-foreground/5">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">¡Mensaje enviado!</h3>
                <p className="mt-2 text-muted">
                  Nos pondremos en contacto contigo pronto para agendar tu demo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-1.5">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-foreground/10 bg-background px-4 py-2.5 text-foreground placeholder:text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="club" className="block text-sm font-medium text-foreground mb-1.5">
                      Club *
                    </label>
                    <input
                      type="text"
                      id="club"
                      name="club"
                      required
                      value={formData.club}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-foreground/10 bg-background px-4 py-2.5 text-foreground placeholder:text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      placeholder="Nombre del club"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="cargo" className="block text-sm font-medium text-foreground mb-1.5">
                      Cargo
                    </label>
                    <input
                      type="text"
                      id="cargo"
                      name="cargo"
                      value={formData.cargo}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-foreground/10 bg-background px-4 py-2.5 text-foreground placeholder:text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      placeholder="Tu cargo en el club"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-foreground/10 bg-background px-4 py-2.5 text-foreground placeholder:text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-1.5">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-foreground/10 bg-background px-4 py-2.5 text-foreground placeholder:text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    placeholder="+57 300 000 0000"
                  />
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-1.5">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-foreground/10 bg-background px-4 py-2.5 text-foreground placeholder:text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                    placeholder="Cuéntanos sobre tu club y qué necesitas..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                >
                  Solicitar demo
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Footer ───────────────── */

function Footer() {
  return (
    <footer className="bg-foreground text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="text-xl font-bold text-white tracking-tight">
              Tee<span className="text-gold">Justo</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed">
              Asignación justa y transparente de tee times para clubes de golf privados en Bogotá.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Producto</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#como-funciona" className="hover:text-white transition-colors">Cómo funciona</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Precios</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos de servicio</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>info@example.com</li>
              <li>+00 000 000 0000</li>
              <li>123 Main Street, City, Country</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm">
          &copy; {new Date().getFullYear()} TeeJusto. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

/* ───────────────── Page ───────────────── */

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Features />
        <Benefits />
        <Pricing />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
