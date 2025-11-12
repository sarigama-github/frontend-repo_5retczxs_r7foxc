import React, { useMemo, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Play, Pause } from 'lucide-react'

function ProfileCard({ name, role, imgSeed }) {
  const bg = useMemo(() => {
    const palettes = [
      'from-zinc-700 to-zinc-900',
      'from-neutral-700 to-neutral-900',
      'from-slate-700 to-slate-900',
    ]
    return palettes[imgSeed % palettes.length]
  }, [imgSeed])

  return (
    <div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-gradient-to-b p-3 text-white/90 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/5">
      <div className={`h-10 w-10 shrink-0 rounded-lg bg-gradient-to-br ${bg} ring-1 ring-white/10 shadow-inner flex items-center justify-center text-xs font-semibold tracking-wide`}>pf</div>
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-semibold text-white/95">{name}</span>
        <span className="text-[11px] uppercase tracking-wide text-white/60">{role}</span>
      </div>
    </div>
  )
}

function ShhhLogo() {
  return (
    <svg viewBox="0 0 200 200" className="w-24 h-24 md:w-28 md:h-28 drop-shadow-[0_0_40px_rgba(234,179,8,0.25)]">
      <defs>
        <linearGradient id="y" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <g fill="url(#y)">
        <path d="M100 15c-35 0-63 28-63 63v16c0 9 7 16 16 16h12c5 0 9 4 9 9v8c0 6 5 11 11 11h30c6 0 11-5 11-11v-8c0-5 4-9 9-9h12c9 0 16-7 16-16V78c0-35-28-63-63-63z" />
      </g>
      <g fill="#111" opacity=".95">
        <circle cx="85" cy="80" r="6" />
        <circle cx="115" cy="80" r="6" />
        <path d="M100 92c-8 0-15 5-18 12l-2 4c-1 2 1 5 4 5h50c3 0 5-3 4-5l-2-4c-3-7-10-12-18-12h-18z" opacity=".9" />
        <path d="M102 70c-2 0-4 2-4 4v38c0 2 2 4 4 4s4-2 4-4V74c0-2-2-4-4-4z" />
        <path d="M95 110h14c3 0 5 2 5 5v6c0 3-2 5-5 5H95c-3 0-5-2-5-5v-6c0-3 2-5 5-5z" />
      </g>
    </svg>
  )
}

export default function LoadingScreen() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0b0b0b] text-white">
      {/* Background gradient and vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(60% 60% at 50% 40%, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 60%)'
      }} />

      {/* Spline animation layer */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex h-screen w-full">
        {/* Left profile stack */}
        <div className="hidden md:flex w-[320px] flex-col justify-center gap-4 px-8">
          <ProfileCard name="polofedron" role="Owner" imgSeed={1} />
          <ProfileCard name="polofedron" role="Developer" imgSeed={2} />
          <ProfileCard name="polofedron" role="Co-Owner" imgSeed={3} />
        </div>

        {/* Center figure and logo */}
        <div className="flex-1 relative flex items-center justify-center p-6">
          {/* Cinematic subject silhouette */}
          <div className="relative">
            {/* Subject mockup: stylized silhouette with perspective hands */}
            <div className="relative flex items-center justify-center">
              <div className="h-60 w-60 md:h-80 md:w-80 rounded-full bg-gradient-to-b from-zinc-300/20 to-zinc-700/10 backdrop-blur-md ring-1 ring-white/10 shadow-2xl" />
              {/* Hands gesture accents */}
              <div className="absolute -left-20 top-12 h-24 w-24 rotate-12 rounded-lg bg-white/5 blur-[1px] ring-1 ring-white/10" />
              <div className="absolute -right-24 bottom-10 h-28 w-28 -rotate-6 rounded-lg bg-white/5 blur-[1px] ring-1 ring-white/10" />
              {/* Glasses line */}
              <div className="absolute h-1 w-40 md:w-56 -translate-y-6 rounded-full bg-white/80 mix-blend-screen" />
            </div>

            {/* Yellow shhh logo overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <ShhhLogo />
            </div>

            {/* Crew in background (blurred shapes) */}
            <div className="pointer-events-none absolute inset-x-[-10rem] -bottom-28 flex justify-center gap-6 opacity-70">
              <div className="h-28 w-20 rounded-xl bg-white/10 blur-[2px]" />
              <div className="h-24 w-16 rounded-xl bg-white/10 blur-[3px]" />
              <div className="h-32 w-24 rounded-xl bg-white/10 blur-[2px]" />
              <div className="h-20 w-14 rounded-xl bg-white/10 blur-[4px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom music player */}
      <div className="relative z-20">
        <div className="pointer-events-none absolute inset-x-0 -top-24 h-32 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="mx-auto mb-6 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <button
              aria-label={playing ? 'Pause' : 'Play'}
              onClick={() => setPlaying((p) => !p)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400/90 text-black shadow-lg ring-1 ring-black/10 transition hover:bg-yellow-300"
            >
              {playing ? <Pause size={18} /> : <Play size={18} className="translate-x-[1px]" />}
            </button>
            <div className="flex-1">
              <div className="flex items-baseline justify-between gap-3">
                <div className="truncate">
                  <p className="text-sm font-semibold text-white/95 truncate">04. Smuty (Skit)</p>
                  <p className="text-xs text-white/60 truncate">Kaz Bałagane x Belmondo</p>
                </div>
                <div className="text-xs tabular-nums text-white/60">{playing ? '01:17' : '00:00'} / 02:05</div>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div className={`h-full bg-yellow-400 transition-all duration-500 ${playing ? 'w-2/3' : 'w-0'}`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Film grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI5MTcyNDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)' }} />
    </div>
  )
}
