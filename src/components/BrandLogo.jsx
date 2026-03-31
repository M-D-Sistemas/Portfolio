const logoSrc = '/image-1774927017255.png';

function LogoImage({ sizeClassName, className = '' }) {
  return <img src={logoSrc} alt="MASDAL SOFT" className={`${sizeClassName} select-none object-cover ${className}`} draggable="false" />;
}

export default function BrandLogo({ variant = 'compact', className = '' }) {
  const isFull = variant === 'full';
  const isFooter = variant === 'footer';

  return (
    <div className={className}>
      {isFull ? (
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="w-full max-w-[320px] rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-2xl shadow-black/30 ring-1 ring-white/5 backdrop-blur-sm sm:max-w-[360px]">
            <LogoImage sizeClassName="h-auto w-full rounded-[1.4rem]" />
          </div>

          <div className="space-y-2">
            <div className="font-display text-3xl font-bold tracking-[0.22em] text-white sm:text-4xl">MASDAL SOFT</div>
            <div className="text-sm uppercase tracking-[0.3em] text-slate-400">Software a medida</div>
          </div>
        </div>
      ) : isFooter ? (
        <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
          <div className="grid h-16 w-16 place-items-center rounded-[1.25rem] border border-white/10 bg-slate-950/80 shadow-glow ring-1 ring-white/5 sm:h-18 sm:w-18">
            <LogoImage sizeClassName="h-full w-full rounded-[1rem]" />
          </div>

          <div className="space-y-0.5">
            <div className="font-display text-base font-bold tracking-[0.22em] text-white sm:text-lg">MASDAL SOFT</div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-slate-950/80 shadow-glow ring-1 ring-white/5">
            <LogoImage sizeClassName="h-full w-full rounded-xl" />
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