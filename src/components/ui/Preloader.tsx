import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const duration = 1400;
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment + Math.random() * 0.8;

        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }

        return next;
      });
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const exitTimer = setTimeout(() => {
        setIsLoaded(true);
        document.body.style.overflow = '';
      }, 250);

      const removeTimer = setTimeout(() => {
        setShouldRender(false);
      }, 1100);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [progress]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center px-6 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isLoaded
          ? 'opacity-0 -translate-y-8 scale-[1.03] pointer-events-none'
          : 'opacity-100 translate-y-0 scale-100'
      }`}
      style={{
        background:
          'radial-gradient(circle at 50% 40%, rgba(252,211,77,0.10), transparent 35%), #090909'
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-400/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-yellow-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative w-full max-w-xl">
        <div
          className="absolute inset-0 rounded-3xl bg-yellow-400/10 blur-2xl"
          style={{ transform: 'scale(0.9)' }}
        />

        <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.55)] px-7 py-9 md:px-12 md:py-11">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-white/40 font-medium">
                Portfolio
              </p>

              <h1 className="mt-2 text-3xl md:text-5xl font-bold tracking-tight text-white">
                Loading
                <span className="text-yellow-400">.</span>
                <span className="text-yellow-400">.</span>
                <span className="text-yellow-400">.</span>
              </h1>
            </div>

            <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl">
              <div className="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-white/20 border-t-yellow-400 animate-spin" />
            </div>
          </div>

          <div className="flex items-end justify-between mb-3">
            <span className="text-sm text-white/40 tracking-wide">
              Preparing experience
            </span>

            <span className="text-lg md:text-xl font-semibold text-yellow-400 tabular-nums">
              {Math.floor(progress)}%
            </span>
          </div>

          <div className="h-2 w-full rounded-full bg-white/[0.08] border border-white/[0.08] overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 transition-[width] duration-100 ease-out shadow-[0_0_20px_rgba(250,204,21,0.35)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center gap-2 mt-6">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-xs text-white/30 tracking-wider">
              {progress < 35
                ? 'Initializing...'
                : progress < 70
                ? 'Loading assets...'
                : progress < 100
                ? 'Almost ready...'
                : 'Welcome'}
            </span>
          </div>
        </div>

        <p className="text-center text-xs text-white/20 mt-6 tracking-[0.2em] uppercase">
          Built with passion
        </p>
      </div>
    </div>
  );
};

export default Preloader;
