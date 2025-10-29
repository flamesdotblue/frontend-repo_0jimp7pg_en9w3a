import React from 'react';

const ELECTRIC = '#00d3ff';
const MIDNIGHT = '#0a0f1f';
const SILVER = '#c0c0c0';

export default function About() {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: MIDNIGHT }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-white font-[Inter]">About</h2>
          <div className="mt-2 h-1 w-20 rounded" style={{ backgroundColor: ELECTRIC }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-300">
          <div className="md:col-span-2 space-y-4">
            <p className="font-[Poppins]">
              I design and build Flutter apps that feel fast, fluid, and delightful. My approach blends clean visual systems,
              accessible interactions, and robust architecture (BLoC) for long-term maintainability.
            </p>
            <p className="font-[Poppins]">
              From concept to launch, I translate product goals into thoughtful design and production-quality code. I care about
              motion, micro-interactions, and shipping experiences that reflect premium craft.
            </p>
          </div>
          <ul className="space-y-3 text-slate-200/90">
            {['Flutter', 'Dart', 'BLoC / Riverpod', 'Firebase', 'REST / GraphQL', 'CI/CD', 'Unit & Widget Tests'].map((skill) => (
              <li key={skill} className="flex items-center gap-3">
                <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ELECTRIC }} />
                <span className="font-[Poppins]">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
