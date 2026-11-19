import React from 'react';
import { PREMIUM_CHECKOUT_URL } from '../data/offerConfig';

export const FooterSection: React.FC = () => {
  return (
    <>
      <section className="bg-[#8c2832] text-[#fff7e7] text-center py-14 sm:py-20">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="text-[10px] sm:text-[11px] tracking-[2.4px] uppercase font-bold text-[#f3d69d] mb-3">
            Faça espaço para a magia
          </div>
          <h2 className="font-editorial text-[30px] sm:text-[46px] leading-[1.13] tracking-[-0.8px] max-w-[700px] mx-auto text-[#fff7e7]">
            O Natal das crianças pode ficar muito mais divertido.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#f9ebd7]">
            Conheça as opções e escolha por onde começar.
          </p>
          <a
            href={PREMIUM_CHECKOUT_URL}
            className="mt-7 inline-flex w-full sm:w-auto justify-center items-center gap-3 min-h-[54px] px-8 py-4 rounded-lg bg-[#d3b579] hover:bg-[#e5c789] text-[#173e32] border border-[#d3b579] text-xs font-bold tracking-[0.9px] uppercase transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>ESCOLHER MEU PLANO</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <footer className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 py-7 text-xs text-[#4a5c4b]">
          <span>✧ +150 Desenhos Natalinos para Colorir</span>
          <span>Material digital para imprimir e colorir.</span>
        </footer>
      </div>
    </>
  );
};
