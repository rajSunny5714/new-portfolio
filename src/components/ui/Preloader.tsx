
import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    let value = 0;
    let timeout;

    const timer = setInterval(() => {
      value += Math.random() * 5 + 2;

      if (value >= 100) {
        value = 100;
        setProgress(100);
        clearInterval(timer);

        timeout = setTimeout(() => {
          setHide(true);
          document.body.style.overflow = previousOverflow;
          window.scrollTo(0, 0);
        }, 700);
      } else {
        setProgress(Math.floor(value));
      }
    }, 55);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (hide) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden
      bg-[#080808] transition-transform duration-1000
      ease-[cubic-bezier(0.76,0,0.24,1)]
      ${progress === 100 ? '-translate-y-full' : 'translate-y-0'}`}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute w-[450px] h-[450px] rounded-full
          bg-custom-yellow/10 blur-[150px] -top-60 -left-40" />

        <div className="absolute w-[450px] h-[450px] rounded-full
          bg-custom-yellow/10 blur-[150px] -bottom-60 -right-40" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl px-7">

        {/* Header */}
        <div className="flex items-center justify-between mb-16">

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border border-custom-yellow
              flex items-center justify-center text-custom-yellow
              font-bold font-mono text-sm">
              SR
            </div>

            <div>
              <p className="text-white text-sm font-bold tracking-widest">
                SUNNY RAJ
              </p>
              <p className="text-white/40 text-[9px] tracking-[0.3em]">
                PERSONAL PORTFOLIO
              </p>
            </div>
          </div>

          <span className="text-white/30 text-xs font-mono tracking-widest">
            PORTFOLIO / 2026
          </span>
        </div>

        {/* Main Heading */}
        <div className="mb-14">

          <p className="text-custom-yellow text-xs md:text-sm
            font-mono tracking-[0.5em] mb-6">
            HELLO, I'M SUNNY RAJ
          </p>

          <h1 className="font-shrikhand text-6xl sm:text-7xl
            md:text-9xl leading-[0.95] tracking-wide text-white">
            BUILDING
            <br />

            <span className="text-custom-yellow">
              DIGITAL
            </span>
            <br />

            EXPERIENCES<span className="text-custom-yellow">.</span>
          </h1>

          <p className="text-white/40 text-xs md:text-sm
            font-mono tracking-[0.2em] mt-7 uppercase">
            Full Stack Java Developer · Backend & AI Enthusiast
          </p>
        </div>

        {/* Progress Section */}
        <div className="flex items-end justify-between mb-5">

          <div>
            <p className="text-white/40 text-[10px]
              tracking-[0.3em] font-mono mb-2">
              LOADING EXPERIENCE
            </p>

            <p className="text-white text-sm font-mono">
              {progress === 100
                ? 'Welcome to my portfolio!'
                : 'Preparing something awesome...'}
            </p>
          </div>

          <div className="flex items-start">
            <span className="text-6xl md:text-7xl
              font-mono font-bold text-custom-yellow
              tracking-tighter tabular-nums">
              {String(progress).padStart(2, '0')}
            </span>

            <span className="text-white text-xl font-mono mt-2 ml-1">
              %
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative w-full h-[6px]
          bg-white/10 overflow-hidden">

          <div
            className="absolute top-0 left-0 h-full
              bg-custom-yellow
              shadow-[0_0_20px_rgba(255,220,0,0.8)]
              transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-5">

          <span className="text-white/30 text-[9px]
            md:text-[10px] tracking-[0.2em] font-mono">
            DESIGNED & DEVELOPED
          </span>

          <span className="text-custom-yellow/70
            text-[9px] md:text-[10px] tracking-[0.2em] font-mono">
            BY SUNNY RAJ © 2026
          </span>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <div className="w-12 h-px bg-white/20" />
          <div className="w-2 h-2 rotate-45 bg-custom-yellow" />
          <div className="w-12 h-px bg-white/20" />
        </div>

      </div>
    </div>
  );
};

export default Preloader;
