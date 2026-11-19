import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
      <header className="flex items-center justify-between gap-4 py-4 sm:py-6 border-b border-[#d9dece]">
        <a href="#inicio" className="no-underline group focus-visible:rounded">
          <span className="font-editorial text-lg sm:text-[22px] tracking-[0.3px] text-[#173e32] block">
            ✧ Kit Natalino Infantil
          </span>
          <small className="block font-sans text-[9px] sm:text-[10px] tracking-[1.8px] sm:tracking-[2.8px] uppercase text-[#4f6454] mt-1">
            Uma coleção para criar memórias
          </small>
        </a>

        <nav className="flex items-center gap-6 text-xs font-medium text-[#263f34]" aria-label="Menu principal">
          <a href="#moldes" className="hidden sm:inline-block py-2 hover:text-[#8c2832] transition-colors">
            Os desenhos
          </a>
          <a href="#bonus" className="hidden sm:inline-block py-2 hover:text-[#8c2832] transition-colors">
            Os bônus
          </a>
          <a
            href="#planos"
            className="inline-flex items-center min-h-[44px] py-2 font-semibold text-[#173e32] hover:text-[#8c2832] transition-colors whitespace-nowrap"
          >
            Conheça o kit ↗
          </a>
        </nav>
      </header>
    </div>
  );
};
