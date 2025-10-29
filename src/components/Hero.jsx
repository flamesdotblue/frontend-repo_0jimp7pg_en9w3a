import React from 'react';

const ELECTRIC = '#00d3ff';
const MIDNIGHT = '#0a0f1f';
const SILVER = '#c0c0c0';

function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient "digital flame" */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-1 opacity-40"
        style={{
          background:
            'radial-gradient(60% 60% at 70% 30%, rgba(0,211,255,0.25) 0%, rgba(0,211,255,0.05) 40%, rgba(10,15,31,0.6) 70%, rgba(10,15,31,1) 100%)',
          filter: 'blur(24px)'
        }}
      />

      {/* Subtle circuit lines */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full opacity-25"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="circuitGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={ELECTRIC} stopOpacity="0.7" />
            <stop offset="100%" stopColor={SILVER} stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {[...Array(6)].map((_, i) => (
          <path
            key={i}
            d={`M ${50 + i * 180} 20 Q ${100 + i * 180} ${120 + (i % 2) * 60}, ${200 + i * 180} 240 T ${350 + i * 180} 460`}
            fill="none"
            stroke="url(#circuitGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="6 10"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;32"
              dur={`${6 + i}s`}
              repeatCount="indefinite"
            />
          </path>
        ))}
      </svg>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(24)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full shadow-[0_0_20px_rgba(0,211,255,0.6)]"
            style={{
              width: 2,
              height: 2,
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              backgroundColor: ELECTRIC,
              opacity: 0.8,
              animation: `float-${i} ${8 + (i % 5)}s ease-in-out infinite`
            }}
          />
        ))}
      </div>

      <style>{`
        ${[...Array(24)]
          .map(
            (__, i) => `@keyframes float-${i} {
              0% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
              50% { transform: translateY(-10px) translateX(6px); opacity: 1; }
              100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
            }`
          )
          .join('\n')}
      `}</style>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center" style={{ backgroundColor: MIDNIGHT }}>
      <BackgroundEffects />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text content */}
          <div className="text-left">
            <p className="uppercase tracking-[0.2em] text-[12px] md:text-xs text-slate-300 mb-4" style={{ color: SILVER }}>
              Flames.Blue Portfolio
            </p>
            <h1 className="font-semibold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-[Inter]">
              Muhammad Irshad Cholakkal —
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(90deg, ${ELECTRIC}, ${SILVER})` }}>
                Senior Flutter Designer & Developer
              </span>
            </h1>
            <p className="mt-5 text-slate-300/90 max-w-xl font-[Poppins]">
              Crafting premium cross-platform apps with elegant UI, BLoC, and pixel-perfect performance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                download
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-slate-900 shadow-[0_0_0_1px_rgba(192,192,192,0.4)_inset,0_10px_30px_rgba(0,211,255,0.25)]"
                style={{ backgroundColor: ELECTRIC }}
              >
                Download CV
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-slate-100/90 hover:text-white transition border"
                style={{ borderColor: ELECTRIC }}
              >
                See Projects
              </a>
            </div>
          </div>

          {/* Hero image placeholder area */}
          <div className="relative w-full aspect-[4/3] md:aspect-square rounded-xl overflow-hidden ring-1 ring-slate-700/40 bg-gradient-to-br from-slate-800/30 to-slate-900/60">
            <img
              src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
              alt="Flutter development workspace"
              className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0f1f] via-transparent to-transparent" />
            {/* Electric blue accent ring */}
            <div className="absolute inset-0 rounded-xl pointer-events-none" style={{ boxShadow: `inset 0 0 0 2px ${ELECTRIC}20, 0 0 60px ${ELECTRIC}22` }} />
          </div>
        </div>
      </div>
    </section>
  );
}
