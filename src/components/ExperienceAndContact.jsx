import React from 'react';

const ELECTRIC = '#00d3ff';
const MIDNIGHT = '#0a0f1f';
const SILVER = '#c0c0c0';

const experience = [
  {
    role: 'Senior Flutter Engineer',
    company: 'Studio Nova',
    period: '2022 — Present',
    points: [
      'Led architecture with BLoC across multi-module codebases',
      'Shipped 10+ features with motion-focused UI and tests',
      'Optimized performance and startup time by 35%'
    ]
  },
  {
    role: 'Flutter Designer & Dev',
    company: 'Freelance',
    period: '2019 — 2022',
    points: [
      'Delivered premium apps for fintech, fitness, and retail',
      'Built reusable design systems and animation libraries',
      'Set up CI/CD and analytics for continuous improvement'
    ]
  }
];

export default function ExperienceAndContact() {
  return (
    <section className="py-20" style={{ backgroundColor: MIDNIGHT }}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Experience */}
        <div id="experience" className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white font-[Inter]">Experience</h2>
            <div className="mt-2 h-1 w-20 rounded" style={{ backgroundColor: ELECTRIC }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experience.map((job) => (
              <div key={job.role} className="rounded-xl border border-slate-700/50 bg-slate-900/30 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">{job.role}</h3>
                  <span className="text-xs text-slate-300" style={{ color: SILVER }}>{job.period}</span>
                </div>
                <p className="text-sm text-slate-300/90 mt-1">{job.company}</p>
                <ul className="mt-4 space-y-2 text-slate-200/90">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <span className="mt-2 inline-block h-[6px] w-[6px] rounded-full" style={{ backgroundColor: ELECTRIC }} />
                      <span className="text-sm">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-8">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-white font-[Inter]">Contact</h2>
            <div className="mt-2 h-1 w-20 rounded" style={{ backgroundColor: ELECTRIC }} />
          </div>
          <p className="text-slate-300/90 max-w-2xl">
            Have a project in mind? I’m available for select freelance and consulting engagements. Let’s build something premium together.
          </p>
          <form className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full rounded-md border border-slate-700/60 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2"
              style={{ outline: 'none', boxShadow: `0 0 0 0 rgba(0,0,0,0)`, caretColor: ELECTRIC }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full rounded-md border border-slate-700/60 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2"
              style={{ outline: 'none', boxShadow: `0 0 0 0 rgba(0,0,0,0)`, caretColor: ELECTRIC }}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full rounded-md border border-slate-700/60 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2"
              style={{ outline: 'none', boxShadow: `0 0 0 0 rgba(0,0,0,0)`, caretColor: ELECTRIC }}
            />
            <textarea
              name="message"
              placeholder="Tell me a bit about your project..."
              rows={4}
              className="md:col-span-3 w-full rounded-md border border-slate-700/60 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2"
              style={{ outline: 'none', boxShadow: `0 0 0 0 rgba(0,0,0,0)`, caretColor: ELECTRIC }}
            />
            <div className="md:col-span-3">
              <button
                type="button"
                onClick={() => window.location.assign('mailto:hello@flames.blue?subject=Project%20Inquiry')}
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-slate-900"
                style={{ backgroundColor: ELECTRIC }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
