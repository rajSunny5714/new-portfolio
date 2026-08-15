import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const startTime = Date.now();
    const duration = 1200;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percentage = Math.min((elapsed / duration) * 100, 100);

      setProgress(percentage);

      if (percentage >= 100) {
        clearInterval(timer);
      }
    }, 20);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const loadTimer = setTimeout(() => {
        setIsLoaded(true);
        document.body.style.overflow = '';
      }, 150);

      const removeTimer = setTimeout(() => {
        setShouldRender(false);
      }, 850);

      return () => {
        clearTimeout(loadTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [progress]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center cursor-none transition-all duration-700 ease-in-out ${
        isLoaded
          ? '-translate-y-full opacity-0'
          : 'translate-y-0 opacity-100'
      }`}
      style={{
        background:
          'radial-gradient(circle at center, rgba(252, 211, 77, 0.08), transparent 45%), #0a0a0a'
      }}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

      <div className="relative z-10 flex flex-col items-center w-full px-6">
        <h1 className="font-shrikhand text-5xl md:text-7xl lg:text-8xl tracking-wider text-yellow-400 drop-shadow-[0_4px_15px_rgba(250,204,21,0.15)]">
          LOADING...
        </h1>

        <div className="mt-5 mb-4">
          <span className="font-mono text-lg md:text-xl font-semibold text-white/80">
            {Math.floor(progress)}%
          </span>
        </div>

        <div className="w-[280px] md:w-[450px] lg:w-[520px] h-4 md:h-5 p-[2px] rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.4)]">
          <div
            className="h-full rounded-full bg-yellow-400/90 shadow-[0_0_18px_rgba(250,204,21,0.35)] transition-[width] duration-75 ease-linear"
            style={{
              width: `${progress}%`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
