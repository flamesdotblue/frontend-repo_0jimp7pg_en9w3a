import React from 'react';

const ELECTRIC = '#00d3ff';
const MIDNIGHT = '#0a0f1f';

const projects = [
  {
    title: 'FinTrack — Personal Finance',
    desc: 'Cross-platform budget tracking with realtime sync, charts, and biometric auth.',
    tags: ['Flutter', 'BLoC', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1614787296891-d1b2b1aced36?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaW5UcmFjayUyMCVFMiU4MCU5NCUyMFBlcnNvbmFsJTIwRmluYW5jZXxlbnwwfDB8fHwxNzYxNzI4NjAyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'FitFlow — Wellness & Training',
    desc: 'Programs, progress, and streaming sessions with delightful motion design.',
    tags: ['Flutter', 'Riverpod', 'Supabase'],
    image: 'https://images.unsplash.com/photo-1686163843776-b1373b2a6cb8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaXRGbG93JTIwJUUyJTgwJTk0JTIwV2VsbG5lc3MlMjAlMjYlMjBUcmFpbmluZ3xlbnwwfDB8fHwxNzYxNzI4NjAyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'ShopPrime — E‑commerce',
    desc: 'High-performance storefront with caching, offline mode, and animations.',
    tags: ['Flutter', 'BLoC', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1590483200604-e9e60b6cb2dc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaG9wUHJpbWUlMjAlRTIlODAlOTQlMjBFJUUyJTgwJTkxY29tbWVyY2V8ZW58MHwwfHx8MTc2MTcyODYwM3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20" style={{ backgroundColor: MIDNIGHT }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white font-[Inter]">Projects</h2>
            <div className="mt-2 h-1 w-20 rounded" style={{ backgroundColor: ELECTRIC }} />
          </div>
          <a href="#contact" className="text-sm text-slate-300 hover:text-white">Work together →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900/30">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt="Project cover" className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1f] via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300/90">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full px-2.5 py-1 text-xs text-slate-200 border" style={{ borderColor: ELECTRIC }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
