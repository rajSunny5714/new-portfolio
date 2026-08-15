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
      const nextProgress = Math.min((elapsed / duration) * 100, 100);

      setProgress(nextProgress);

      if (nextProgress >= 100) {
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
      const exitTimer = setTimeout(() => {
        setIsLoaded(true);
        document.body.style.overflow = '';
      }, 200);

      const removeTimer = setTimeout(() => {
        setShouldRender(false);
      }, 900);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [progress]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center cursor-none
        transition-all duration-700 ease-in-out
        ${isLoaded
          ? '-translate-y-full opacity-0'
          : 'translate-y-0 opacity-100'
        }`}
      style={{
        background: 'rgba(10, 10, 10, 0.45)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
    >
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-custom-yellow font-shrikhand text-4xl md:text-7xl mb-5 tracking-wider drop-shadow-[0_0_20px_rgba(252,211,77,0.2)]">
          LOADING...
        </h1>

        <div className="font-mono font-bold text-xl md:text-2xl text-white/90 mb-6">
          {Math.floor(progress)}%
        </div>

        <div className="w-80 md:w-[500px] h-12 md:h-14 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-xl p-1 shadow-[0_0_40px_rgba(0,0,0,0.35)]">
          <div
            className="h-full rounded-full bg-custom-yellow shadow-[0_0_20px_rgba(252,211,77,0.4)] transition-[width] duration-75 ease-linear"
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
