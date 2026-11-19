import React from 'react';
import { FAQ_ITEMS } from '../data/offerConfig';

export const FaqSection: React.FC = () => {
  return (
    <section className="pt-4 pb-16 sm:pb-20 bg-[#faf6ed]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="max-w-[690px] mx-auto text-center mb-9">
          <div className="text-[10px] sm:text-[11px] tracking-[2.4px] uppercase font-bold text-[#7c5d2a] mb-3">
            Antes de começar
          </div>
          <h2 className="font-editorial text-[30px] sm:text-[44px] leading-[1.14] tracking-[-0.8px] text-[#173e32]">
            Um pouco mais <br className="hidden sm:inline" />
            sobre a coleção.
          </h2>
        </div>

        <div className="max-w-[800px] mx-auto divide-y divide-[#d7d9cd]">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group py-1">
              <summary className="cursor-pointer py-4 sm:py-5 flex items-center justify-between gap-4 text-[15px] sm:text-base font-medium text-[#173e32] hover:text-[#8c2832] transition-colors min-h-[56px]">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="text-xl text-[#8d6f38] shrink-0 group-open:hidden"
                >
                  +
                </span>
                <span
                  aria-hidden="true"
                  className="text-xl text-[#8d6f38] shrink-0 hidden group-open:inline"
                >
                  −
                </span>
              </summary>
              <p className="pb-5 pr-6 text-sm text-[#4a5a4b] leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
