import React from 'react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section id="garantia" className="pb-14 sm:pb-16 bg-[#faf6ed]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="max-w-[960px] mx-auto grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-6 sm:gap-9 items-center border border-[#d5c493] rounded-[20px] bg-[#eee9da] p-7 sm:p-10 text-center sm:text-left">
          <div className="mx-auto sm:mx-0 w-[132px] h-[148px] sm:w-[156px] sm:h-[176px] border-2 border-[#af9153] rounded-t-[65px] rounded-b-[80px] bg-[#173e32] text-[#ead9af] flex flex-col items-center justify-center shadow-[inset_0_0_0_6px_#173e32,inset_0_0_0_7px_#bda166] select-none">
            <span className="text-[9px] sm:text-[10px] tracking-[2.8px] font-semibold">GARANTIA</span>
            <strong className="font-editorial text-[52px] sm:text-[64px] leading-[1.05]">30</strong>
            <span className="text-[9px] sm:text-[10px] tracking-[2.8px] font-semibold">DIAS</span>
          </div>

          <div>
            <div className="text-[10px] sm:text-[11px] tracking-[2.2px] uppercase font-bold text-[#7c5d2a] mb-2">
              Mais tranquilidade para escolher
            </div>
            <h2 className="font-editorial text-[29px] sm:text-[38px] leading-tight text-[#173e32]">
              Você tem 30 dias de garantia.
            </h2>
            <p className="mt-3 text-sm text-[#4b5b4c] leading-relaxed">
              Sua compra conta com garantia de 30 dias. Se decidir não ficar com o material, solicite o
              reembolso dentro desse prazo, conforme as orientações da compra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
