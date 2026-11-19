import React from 'react';
import { OFFER_CONFIG, formatBRL } from '../data/offerConfig';

interface PricingSectionProps {
  onBasicCheckoutClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onBasicCheckoutClick }) => {
  const basicPrice = formatBRL(OFFER_CONFIG.basic.price);
  const premiumPrice = formatBRL(OFFER_CONFIG.premium.price);

  return (
    <section id="planos" className="py-14 sm:py-20 bg-[#faf6ed]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="max-w-[690px] mx-auto text-center mb-10">
          <div className="text-[10px] sm:text-[11px] tracking-[2.4px] uppercase font-bold text-[#7c5d2a] mb-3">
            Seu próximo projeto de Natal
          </div>
          <h2 className="font-editorial text-[30px] sm:text-[46px] leading-[1.13] tracking-[-0.9px] text-[#173e32]">
            Escolha como você quer <br className="hidden sm:inline" />
            começar o Natal das crianças
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#495a4b]">
            Selecione a opção que combina com você e comece a preparar a diversão natalina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[960px] mx-auto items-start">
          {/* Basic Plan */}
          <article className="bg-[#fffdf7] border border-[#d3d6c6] rounded-[17px] p-7 sm:p-8 flex flex-col">
            <div className="text-[10px] sm:text-[11px] tracking-[2.2px] uppercase font-bold text-[#7c5d2a] mb-2">
              Coleção principal
            </div>
            <h3 className="font-editorial text-[28px] sm:text-[31px] text-[#173e32]">Plano Básico</h3>

            <div className="font-editorial text-[54px] sm:text-[62px] leading-none tracking-[-2px] text-[#173e32] mt-5">
              {basicPrice.reais}
              <small className="text-[22px] sm:text-[24px] tracking-normal">,{basicPrice.cents}</small>
            </div>

            <p className="mt-3 text-sm text-[#4f5d4d]">
              Comece com a coleção de desenhos natalinos para imprimir e pintar.
            </p>

            <ul className="my-6 divide-y divide-[#889579]/25 text-sm text-[#263f34]">
              {OFFER_CONFIG.basic.items.map((item) => (
                <li key={item} className="py-3.5 pl-6 relative">
                  <span aria-hidden="true" className="absolute left-0 top-3.5 text-[#9e7c3e] font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-xs text-[#5d6a54] mb-4">Para começar com os desenhos da coleção principal.</p>

            <a
              href={OFFER_CONFIG.basic.url}
              onClick={onBasicCheckoutClick}
              className="w-full inline-flex justify-center items-center min-h-[54px] px-6 py-4 rounded-lg bg-[#173e32] hover:bg-[#225444] text-white border border-[#173e32] text-xs font-bold tracking-[0.9px] uppercase transition-all duration-200 hover:-translate-y-0.5 text-center"
            >
              {OFFER_CONFIG.basic.label}
            </a>

            <p className="mt-3 text-[11px] text-[#596857] text-center">
              Produto digital · Garantia de 30 dias
            </p>
          </article>

          {/* Premium Plan */}
          <article className="bg-[#102e25] text-[#fff9e9] border-2 border-[#c9ad71] rounded-[17px] overflow-hidden shadow-[0_20px_45px_rgba(23,62,50,0.18)] flex flex-col">
            <div className="bg-[#d8b778] text-[#173e32] text-center px-4 py-3 text-[10px] sm:text-[11px] font-bold tracking-[1.4px] uppercase">
              COLEÇÃO + OS 4 BÔNUS ESPECIAIS
            </div>

            <div className="p-7 sm:p-8 flex flex-col">
              <div className="text-[10px] sm:text-[11px] tracking-[2.2px] uppercase font-bold text-[#e5c98a] mb-2">
                Seu kit completo de Natal
              </div>
              <h3 className="font-editorial text-[30px] sm:text-[34px] text-[#fff9e9]">
                Plano Premium
              </h3>

              <p className="mt-3 text-sm text-[#dce5d4]">
                Os desenhos são só o começo. Leve também atividades, cartões, o kit do Papai Noel e o
                calendário de contagem regressiva.
              </p>

              <div className="font-editorial text-[54px] sm:text-[62px] leading-none tracking-[-2px] text-[#fff9e9] mt-5">
                {premiumPrice.reais}
                <small className="text-[22px] sm:text-[24px] tracking-normal">,{premiumPrice.cents}</small>
              </div>
              <span className="text-xs text-[#e2c685] mt-1">
                O conjunto completo por R$ 19,90
              </span>

              <div className="my-5 rounded-xl bg-[#f8f3e7] p-2 shadow-md">
                <img
                  src="/assets/aistudio/5_726cb299.png"
                  alt="Mockup do Plano Premium da coleção natalina"
                  loading="lazy"
                  className="w-full h-auto rounded-lg object-contain"
                />
              </div>

              <ul className="divide-y divide-[#889579]/30 text-[13px] sm:text-sm">
                {OFFER_CONFIG.premium.items.map((item, idx) => {
                  const isBonus = idx >= 1 && idx <= 4;
                  return (
                    <li
                      key={item}
                      className={`py-3 pl-6 relative ${isBonus ? 'text-[#f7e3ac] font-medium' : 'text-[#f3f3e8]'}`}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-3 text-[#d9ba79] font-bold"
                      >
                        {isBonus ? '✧' : '✓'}
                      </span>
                      {item}
                    </li>
                  );
                })}
              </ul>

              <div className="bg-[#23493a] border border-[#aa925c]/50 rounded-lg p-3.5 text-xs text-[#f2e6c4] mt-5">
                ✧ Um kit para brincar, presentear e contar os dias até o Natal.
              </div>

              <details className="my-5 text-xs text-[#dce2cf]">
                <summary className="cursor-pointer font-semibold underline underline-offset-4 min-h-[40px] flex items-center hover:text-white">
                  Ver tudo que acompanha o Premium
                </summary>
                <p className="mt-2 leading-relaxed text-[#d0dac5]">
                  +150 Desenhos Natalinos para Colorir + 10 Atividades Natalinas + 20 Cartões e Etiquetas de
                  Natal + Kit Especial Papai Noel + Calendário de Contagem Regressiva para o Natal.
                </p>
              </details>

              <a
                href={OFFER_CONFIG.premium.url}
                className="w-full inline-flex justify-center items-center min-h-[58px] px-6 py-4 rounded-lg bg-[#e2c17d] hover:bg-[#efd08f] text-[#173e32] border border-[#e2c17d] text-xs font-bold tracking-[0.9px] uppercase shadow-[0_5px_18px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-0.5 text-center"
              >
                {OFFER_CONFIG.premium.label}
              </a>

              <p className="mt-3 text-[11px] text-[#cfd9c3] text-center">
                Garantia de 30 dias · Confira o valor final no checkout
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
