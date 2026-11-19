import React from 'react';
import { BONUS_ITEMS, BonusItem } from '../data/offerConfig';

const BONUS_IMAGE_MAP: Record<BonusItem['id'], string> = {
  bonus1: '/assets/aistudio/1_e4d9af47.png',
  bonus2: '/assets/aistudio/2_b5ee6dea.png',
  bonus3: '/assets/aistudio/3_579e120f.png',
  bonus4: '/assets/aistudio/4_4405dfd0.png',
};

export const BonusSection: React.FC = () => {
  return (
    <section id="bonus" className="bg-[#fffaf0] py-14 sm:py-20">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="max-w-[820px] mx-auto text-center mb-10">
          <div className="inline-block px-4 py-2 rounded-full border border-[#d6bd81] bg-[#f0e5cd] text-[10px] tracking-[1.4px] uppercase font-bold text-[#6e5021] mb-4">
            VOCÊ AINDA RECEBE 4 BÔNUS NO PLANO PREMIUM
          </div>

          <h2 className="font-editorial text-[30px] sm:text-[46px] leading-[1.14] tracking-[-0.9px] text-[#173e32]">
            Além dos desenhos, leve{' '}
            <br className="hidden sm:inline" />
            <em className="not-italic text-[#8c2832]">estes 4 bônus especiais!</em>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-[#495a4b] max-w-[650px] mx-auto">
            Escolha o Plano Premium e receba os quatro materiais abaixo junto com os desenhos. Um conjunto para
            brincar, criar e tornar o Natal das crianças ainda mais especial.
          </p>
        </div>

        <div className="space-y-7">
          {BONUS_ITEMS.map((bonus) => (
            <article
              key={bonus.id}
              className="relative max-w-[860px] mx-auto rounded-[18px] border-2 border-[#d5bd82] bg-[radial-gradient(ellipse_at_50%_20%,#fffdf7,#f1eddf)] shadow-[0_12px_30px_rgba(104,86,39,0.06)] px-5 sm:px-9 pt-11 pb-8 text-center flex flex-col items-center gap-4"
            >
              <span className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#8c2832] text-[#fff7e7] px-4 sm:px-5 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-[1.3px] rounded-b-[9px] shadow-[0_5px_12px_rgba(140,40,50,0.2)] whitespace-nowrap">
                BÔNUS INCLUÍDO NO PREMIUM
              </span>

              <div className="w-full pt-2">
                <img
                  src={BONUS_IMAGE_MAP[bonus.id]}
                  alt={bonus.title}
                  loading="lazy"
                  className="w-full max-w-[580px] max-h-[460px] mx-auto rounded-xl object-contain drop-shadow-[0_10px_14px_rgba(69,51,33,0.16)]"
                />
              </div>

              <div className="max-w-[640px] mx-auto">
                <div className="inline-block bg-[#173e32] text-[#f2dfaa] px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[1.3px] uppercase mb-3">
                  {bonus.numberLabel}
                </div>

                <h3 className="font-editorial text-[26px] sm:text-[34px] text-[#173e32] leading-tight">
                  {bonus.title}
                </h3>
                <h4 className="text-sm sm:text-base font-bold text-[#8c2832] mt-2.5">{bonus.subtitle}</h4>
                <p className="mt-2.5 text-sm sm:text-[15px] text-[#455647] max-w-[580px] mx-auto">
                  {bonus.description}
                </p>

                <div className="border-t border-[#d9cda9] pt-4 mt-5 text-xs sm:text-[13px] font-medium text-[#6f5e32]">
                  {bonus.benefit}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
