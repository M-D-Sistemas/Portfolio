import { useId } from 'react';

export default function BrandLogo({ variant = 'compact', className = '' }) {
  const rawId = useId().replace(/:/g, '');
  const gradientId = `masdal-logo-gradient-${rawId}`;
  const glowId = `masdal-logo-glow-${rawId}`;
  const isFull = variant === 'full';
  const isFooter = variant === 'footer';

  return (
    <div className={className}>
      {isFull ? (
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="w-full max-w-[320px] rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-2xl shadow-black/30 ring-1 ring-white/5 backdrop-blur-sm sm:max-w-[360px]">
            <svg viewBox="0 0 360 360" className="h-auto w-full" role="img" aria-label="Logo de MASDAL SOFT">
              <defs>
                <linearGradient id={gradientId} x1="48" y1="48" x2="312" y2="312" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="55%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
                <radialGradient id={glowId} cx="50%" cy="42%" r="68%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
                </radialGradient>
              </defs>

              <rect x="16" y="16" width="328" height="328" rx="34" fill={`url(#${glowId})`} />
              <rect x="16" y="16" width="328" height="328" rx="34" fill="none" stroke="rgba(148, 163, 184, 0.18)" strokeWidth="2" />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="none"
                stroke={`url(#${gradientId})`}
                strokeWidth="10"
                strokeLinejoin="round"
                strokeLinecap="round"
                fontFamily="Space Grotesk, Inter, sans-serif"
                fontSize="180"
                fontWeight="700"
                letterSpacing="-18"
              >
                MD
              </text>
            </svg>
          </div>

          <div className="space-y-2">
            <div className="font-display text-3xl font-bold tracking-[0.22em] text-white sm:text-4xl">MASDAL SOFT</div>
            <div className="text-sm uppercase tracking-[0.3em] text-slate-400">Software a medida</div>
          </div>
        </div>
      ) : isFooter ? (
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <div className="grid h-24 w-24 place-items-center rounded-[1.75rem] border border-white/10 bg-slate-950/80 shadow-glow ring-1 ring-white/5 sm:h-28 sm:w-28">
            <svg viewBox="0 0 360 360" className="h-16 w-16 sm:h-20 sm:w-20" aria-hidden="true">
              <defs>
                <linearGradient id={`${gradientId}-footer`} x1="48" y1="48" x2="312" y2="312" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="55%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
              </defs>
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="none"
                stroke={`url(#${gradientId}-footer)`}
                strokeWidth="10"
                strokeLinejoin="round"
                strokeLinecap="round"
                fontFamily="Space Grotesk, Inter, sans-serif"
                fontSize="180"
                fontWeight="700"
                letterSpacing="-18"
              >
                MD
              </text>
            </svg>
          </div>

          <div className="space-y-1">
            <div className="font-display text-2xl font-bold tracking-[0.24em] text-white sm:text-3xl">MASDAL SOFT</div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-slate-950/80 shadow-glow ring-1 ring-white/5">
            <svg viewBox="0 0 360 360" className="h-7 w-7" aria-hidden="true">
              <defs>
                <linearGradient id={`${gradientId}-compact`} x1="48" y1="48" x2="312" y2="312" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="55%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
              </defs>
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="none"
                stroke={`url(#${gradientId}-compact)`}
                strokeWidth="10"
                strokeLinejoin="round"
                strokeLinecap="round"
                fontFamily="Space Grotesk, Inter, sans-serif"
                fontSize="180"
                fontWeight="700"
                letterSpacing="-18"
              >
                MD
              </text>
            </svg>
          </div>

          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold tracking-[0.18em] text-white">MASDAL SOFT</span>
            <span className="text-xs uppercase tracking-[0.24em] text-slate-400">Software a medida</span>
          </span>
        </div>
      )}
    </div>
  );
}