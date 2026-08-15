import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }

        const next = prev + Math.random() * 8 + 2;
        return next >= 100 ? 100 : next;
      });
    }, 40);

    const safetyTimeout = setTimeout(() => {
      setProgress(100);
    }, 1500);

    return () => {
      clearInterval(timer);
      clearTimeout(safetyTimeout);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const loadTimer = setTimeout(() => {
        setIsLoaded(true);
        document.body.style.overflow = '';
      }, 200);

      const removeTimer = setTimeout(() => {
        setShouldRender(false);
      }, 1000);

      return () => {
        clearTimeout(loadTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [progress]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center cursor-none
        transition-all duration-700 ease-in-out
        ${
          isLoaded
            ? '-translate-y-full opacity-0'
            : 'translate-y-0 opacity-100'
        }`}
      style={{
        background: 'rgba(17, 17, 17, 0.88)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
      }}
    >
      <div className="relative z-10 flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-custom-yellow font-shrikhand text-4xl md:text-7xl mb-4 tracking-wider drop-shadow-[0_0_15px_rgba(252,211,77,0.25)]">
            LOADING...
          </h1>

          <div className="font-mono font-bold text-xl md:text-2xl text-white">
            {Math.floor(progress)}%
          </div>
        </div>

        <div className="w-80 md:w-[500px] h-12 md:h-14 rounded-full border border-white/25 bg-white/[0.08] backdrop-blur-xl p-1 shadow-[0_0_35px_rgba(0,0,0,0.5)]">
          <div
            className="h-full rounded-full bg-custom-yellow shadow-[0_0_20px_rgba(252,211,77,0.4)] transition-all duration-100 ease-out"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
