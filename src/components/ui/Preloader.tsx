import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    document.body.style.overflow = 'hidden';

    let value = 0;

    const timer = setInterval(() => {
      value += Math.random() * 8 + 4;

      if (value >= 100) {
        value = 100;
        clearInterval(timer);

        setProgress(100);

        setTimeout(() => {
          setHide(true);
          document.body.style.overflow = '';
          window.scrollTo(0, 0);
        }, 250);
      } else {
        setProgress(Math.floor(value));
      }
    }, 40);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, []);

  if (hide) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center transition-all duration-700 ease-in-out ${
        progress === 100
          ? '-translate-y-full opacity-0'
          : 'translate-y-0 opacity-100'
      }`}
      style={{
        background: 'rgba(10, 10, 10, 0.94)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <div className="w-full max-w-xl px-6 flex flex-col items-center">
        <h1 className="font-shrikhand text-5xl md:text-7xl tracking-wider text-custom-yellow mb-5">
          LOADING...
        </h1>

        <div className="font-mono text-xl font-bold text-white mb-5">
          {progress}%
        </div>

        <div className="w-full h-3 rounded-full bg-white/10 border border-white/20 overflow-hidden">
          <div
            className="h-full bg-custom-yellow rounded-full transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
