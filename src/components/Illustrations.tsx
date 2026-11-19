import React from 'react';

export const HeroKitShowcase: React.FC = () => {
  return (
    <div className="relative mx-auto w-full max-w-[520px] py-2 select-none">
      <svg
        viewBox="0 0 600 450"
        className="w-full h-auto drop-shadow-[0_14px_24px_rgba(38,63,52,0.14)]"
        role="img"
        aria-label="Coleção +150 Desenhos Natalinos para Colorir impressos em folhas A4 com lápis de cor"
      >
        <defs>
          <linearGradient id="paperBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f7f2e4" />
          </linearGradient>
          <linearGradient id="coverGreen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1b483a" />
            <stop offset="100%" stopColor="#102e25" />
          </linearGradient>
        </defs>

        {/* Soft warm backdrop halo */}
        <ellipse cx="300" cy="245" rx="250" ry="165" fill="#e6dec8" opacity="0.55" />

        {/* Back left coloring page (Snowman) */}
        <g transform="translate(88 64) rotate(-9)">
          <rect
            x="0"
            y="0"
            width="210"
            height="292"
            rx="10"
            fill="url(#paperBg)"
            stroke="#d4c7a4"
            strokeWidth="2"
          />
          <rect
            x="14"
            y="14"
            width="182"
            height="264"
            rx="6"
            fill="none"
            stroke="#c6a76b"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
          {/* Snowman line art */}
          <circle cx="105" cy="186" r="46" fill="#fff" stroke="#1e2923" strokeWidth="3.5" />
          <circle cx="105" cy="116" r="32" fill="#fff" stroke="#1e2923" strokeWidth="3.5" />
          {/* Hat */}
          <path d="M75 88h60M86 88V58h38v30" fill="#8c2832" stroke="#1e2923" strokeWidth="3" />
          <rect x="86" y="79" width="38" height="9" fill="#c6a76b" stroke="#1e2923" strokeWidth="2" />
          {/* Scarf */}
          <path d="M78 142q27 10 54 0v12q-27 10-54 0z" fill="#173e32" stroke="#1e2923" strokeWidth="2.5" />
          <path d="M116 150l10 34h-15l-7-31" fill="#173e32" stroke="#1e2923" strokeWidth="2.5" />
          {/* Eyes & carrot nose */}
          <circle cx="94" cy="110" r="3" fill="#1e2923" />
          <circle cx="116" cy="110" r="3" fill="#1e2923" />
          <path d="M105 117l18 4-18 5z" fill="#e67e22" stroke="#1e2923" strokeWidth="2" />
          <circle cx="105" cy="176" r="3.5" fill="#1e2923" />
          <circle cx="105" cy="196" r="3.5" fill="#1e2923" />
          <text x="105" y="260" textAnchor="middle" fontSize="10" fill="#8b7444" fontWeight="700" letterSpacing="1.5">
            PÁG. 48 · NEVE
          </text>
        </g>

        {/* Back right coloring page (Christmas Tree) */}
        <g transform="translate(302 54) rotate(8)">
          <rect
            x="0"
            y="0"
            width="210"
            height="292"
            rx="10"
            fill="url(#paperBg)"
            stroke="#d4c7a4"
            strokeWidth="2"
          />
          <rect
            x="14"
            y="14"
            width="182"
            height="264"
            rx="6"
            fill="none"
            stroke="#c6a76b"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
          {/* Tree line art (partially colored for playful demo) */}
          <polygon points="105,46 66,112 144,112" fill="#e9f2e4" stroke="#1e2923" strokeWidth="3.2" />
          <polygon points="105,86 52,162 158,162" fill="#d9ead3" stroke="#1e2923" strokeWidth="3.2" />
          <polygon points="105,130 40,214 170,214" fill="#fff" stroke="#1e2923" strokeWidth="3.2" />
          <rect x="92" y="214" width="26" height="28" fill="#c69c6d" stroke="#1e2923" strokeWidth="3" />
          <polygon
            points="105,24 110,36 123,36 113,44 117,56 105,49 93,56 97,44 87,36 100,36"
            fill="#e2c17d"
            stroke="#1e2923"
            strokeWidth="2.2"
          />
          <circle cx="96" cy="96" r="7" fill="#8c2832" stroke="#1e2923" strokeWidth="2" />
          <circle cx="122" cy="138" r="8" fill="#e2c17d" stroke="#1e2923" strokeWidth="2" />
          <circle cx="78" cy="186" r="8" fill="#fff" stroke="#1e2923" strokeWidth="2.5" />
          <circle cx="132" cy="192" r="8" fill="#fff" stroke="#1e2923" strokeWidth="2.5" />
          <text x="105" y="264" textAnchor="middle" fontSize="10" fill="#8b7444" fontWeight="700" letterSpacing="1.5">
            PÁG. 19 · ÁRVORE
          </text>
        </g>

        {/* Center main coloring book cover / featured Santa page */}
        <g transform="translate(178 36)">
          <rect
            x="0"
            y="0"
            width="244"
            height="334"
            rx="14"
            fill="#ffffff"
            stroke="#c6a76b"
            strokeWidth="2.5"
          />
          {/* Top festive header */}
          <rect x="14" y="14" width="216" height="58" rx="9" fill="url(#coverGreen)" />
          <text
            x="122"
            y="38"
            textAnchor="middle"
            fontSize="11"
            fill="#e2c17d"
            fontWeight="700"
            letterSpacing="2"
          >
            COLEÇÃO NATALINA PDF
          </text>
          <text
            x="122"
            y="59"
            textAnchor="middle"
            fontSize="17"
            fill="#fff8e8"
            fontFamily="Georgia, serif"
          >
            +150 Desenhos para Colorir
          </text>

          {/* Main coloring illustration: Cheerful Santa */}
          <rect
            x="20"
            y="84"
            width="204"
            height="206"
            rx="8"
            fill="#fffdf8"
            stroke="#e3dac2"
            strokeWidth="1.5"
          />
          {/* Decorative stars */}
          <path d="M44 106l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="#e2c17d" />
          <path d="M198 110l2.5 5.5 6 .8-4.2 4 1 6-5.3-2.8-5.3 2.8 1-6-4.2-4 6-.8z" fill="#e2c17d" />

          {/* Santa Hat */}
          <path
            d="M84 148c4-32 34-46 60-36 16 6 24 18 28 32"
            fill="#8c2832"
            stroke="#1e2923"
            strokeWidth="3.2"
          />
          <circle cx="174" cy="144" r="9" fill="#ffffff" stroke="#1e2923" strokeWidth="3" />
          <rect x="78" y="142" width="88" height="16" rx="8" fill="#ffffff" stroke="#1e2923" strokeWidth="3" />
          {/* Santa Face */}
          <circle cx="122" cy="180" r="32" fill="#fff" stroke="#1e2923" strokeWidth="3.2" />
          {/* Eyes */}
          <circle cx="110" cy="174" r="3.2" fill="#1e2923" />
          <circle cx="134" cy="174" r="3.2" fill="#1e2923" />
          {/* Nose */}
          <circle cx="122" cy="184" r="6" fill="#fff" stroke="#1e2923" strokeWidth="2.8" />
          {/* Fluffy Beard */}
          <path
            d="M88 184c-2 26 14 48 34 48s36-22 34-48c-8 10-20 14-34 14s-26-4-34-14z"
            fill="#ffffff"
            stroke="#1e2923"
            strokeWidth="3.2"
          />
          {/* Mustache */}
          <path
            d="M122 188c-8-6-22-4-24 6 8 4 18 2 24-4 6 6 16 8 24 4-2-10-16-12-24-6z"
            fill="#ffffff"
            stroke="#1e2923"
            strokeWidth="2.6"
          />
          {/* Gift box in corner */}
          <rect x="164" y="238" width="40" height="36" rx="4" fill="#fff" stroke="#1e2923" strokeWidth="2.8" />
          <path d="M184 238v36M164 256h40" stroke="#8c2832" strokeWidth="3" />
          <rect x="40" y="246" width="32" height="28" rx="4" fill="#fff" stroke="#1e2923" strokeWidth="2.8" />
          <path d="M56 246v28M40 260h32" stroke="#173e32" strokeWidth="3" />

          <text
            x="122"
            y="314"
            textAnchor="middle"
            fontSize="10"
            fill="#263f34"
            fontWeight="700"
            letterSpacing="1.6"
          >
            IMPRESSÃO EM FOLHA A4 · PRONTO PARA COLORIR
          </text>
        </g>

        {/* Colored pencils at bottom right */}
        <g transform="translate(390 326) rotate(-18)">
          <rect x="0" y="0" width="16" height="92" rx="3" fill="#8c2832" stroke="#1e2923" strokeWidth="2" />
          <polygon points="0,0 8,-18 16,0" fill="#f3d9b1" stroke="#1e2923" strokeWidth="2" />
          <polygon points="5,-11 8,-18 11,-11" fill="#8c2832" />
        </g>
        <g transform="translate(422 332) rotate(-8)">
          <rect x="0" y="0" width="16" height="92" rx="3" fill="#173e32" stroke="#1e2923" strokeWidth="2" />
          <polygon points="0,0 8,-18 16,0" fill="#f3d9b1" stroke="#1e2923" strokeWidth="2" />
          <polygon points="5,-11 8,-18 11,-11" fill="#173e32" />
        </g>
        <g transform="translate(454 340) rotate(4)">
          <rect x="0" y="0" width="16" height="92" rx="3" fill="#d8b778" stroke="#1e2923" strokeWidth="2" />
          <polygon points="0,0 8,-18 16,0" fill="#f3d9b1" stroke="#1e2923" strokeWidth="2" />
          <polygon points="5,-11 8,-18 11,-11" fill="#c6a76b" />
        </g>

        {/* Gold stamp badge */}
        <g transform="translate(64 316)">
          <circle cx="52" cy="52" r="46" fill="#8c2832" stroke="#e2c17d" strokeWidth="3" />
          <circle cx="52" cy="52" r="39" fill="none" stroke="#f6e3b4" strokeWidth="1" strokeDasharray="3 3" />
          <text x="52" y="47" textAnchor="middle" fontSize="18" fill="#fff8e8" fontFamily="Georgia, serif" fontWeight="700">
            +150
          </text>
          <text x="52" y="64" textAnchor="middle" fontSize="8.5" fill="#f6e3b4" fontWeight="700" letterSpacing="1.2">
            DESENHOS
          </text>
        </g>
      </svg>
    </div>
  );
};

interface ColoringPagePreviewProps {
  id: string;
  title: string;
  number: string;
  theme: string;
}

export const ColoringPagePreview: React.FC<ColoringPagePreviewProps> = ({
  id,
  title,
  number,
  theme,
}) => {
  return (
    <div className="w-full aspect-[1/1.414] bg-white rounded-lg border border-[#dfd5bc] p-3 flex flex-col justify-between text-[#1e2923] select-none">
      {/* Page header */}
      <div className="flex items-center justify-between border-b border-[#ebe3ce] pb-1.5 text-[9px] tracking-[1.4px] uppercase font-semibold text-[#7a6437]">
        <span>Kit Natalino</span>
        <span>Desenho {number}</span>
      </div>

      {/* Main black-and-white coloring illustration */}
      <div className="flex-1 flex items-center justify-center py-2">
        <svg viewBox="0 0 260 320" className="w-full h-full max-h-full" aria-hidden="true">
          <rect
            x="8"
            y="8"
            width="244"
            height="304"
            rx="10"
            fill="#ffffff"
            stroke="#d8ceb2"
            strokeWidth="1.5"
            strokeDasharray="5 5"
          />

          {id === 'page1' && (
            <g stroke="#1b2620" strokeWidth="3.2" fill="#ffffff" strokeLinecap="round" strokeLinejoin="round">
              {/* Holly & stars */}
              <circle cx="46" cy="48" r="10" />
              <circle cx="214" cy="48" r="10" />
              {/* Santa body & coat */}
              <path d="M68 270c4-48 24-76 62-76s58 28 62 76H68z" />
              <rect x="118" y="194" width="24" height="76" />
              <rect x="70" y="232" width="120" height="16" />
              <rect x="116" y="228" width="28" height="24" rx="4" />
              {/* Santa head */}
              <circle cx="130" cy="134" r="38" />
              {/* Hat */}
              <path d="M90 112c6-38 42-56 76-40 16 8 24 22 28 38" />
              <circle cx="196" cy="112" r="11" />
              <rect x="86" y="106" width="88" height="18" rx="9" />
              {/* Eyes & nose */}
              <circle cx="116" cy="132" r="3.5" fill="#1b2620" />
              <circle cx="144" cy="132" r="3.5" fill="#1b2620" />
              <circle cx="130" cy="142" r="7" />
              {/* Beard */}
              <path d="M90 144c0 34 18 56 40 56s40-22 40-56c-12 10-26 14-40 14s-28-4-40-14z" />
              <path d="M130 146c-10-8-26-4-28 8 10 4 20 2 28-4 8 6 18 8 28 4-2-12-18-16-28-8z" />
              {/* Gift bag */}
              <path d="M36 270c-6-32 10-58 34-58 14 0 24 10 26 26v32H36z" />
              <path d="M50 212l-6-16 14 6 10-12 4 18" />
            </g>
          )}

          {id === 'page2' && (
            <g stroke="#1b2620" strokeWidth="3.2" fill="#ffffff" strokeLinecap="round" strokeLinejoin="round">
              {/* Top star */}
              <polygon points="130,30 137,48 156,48 141,60 146,78 130,67 114,78 119,60 104,48 123,48" />
              {/* Layered Christmas Tree */}
              <polygon points="130,72 78,136 182,136" />
              <polygon points="130,114 60,192 200,192" />
              <polygon points="130,164 42,248 218,248" />
              {/* Trunk */}
              <rect x="112" y="248" width="36" height="36" />
              {/* Garland & ornaments */}
              <path d="M94 120q36 16 72 0" fill="none" />
              <path d="M74 176q56 20 112 0" fill="none" />
              <path d="M58 228q72 22 144 0" fill="none" />
              <circle cx="115" cy="116" r="9" />
              <circle cx="148" cy="154" r="10" />
              <circle cx="96" cy="170" r="9" />
              <circle cx="164" cy="216" r="11" />
              <circle cx="110" cy="222" r="10" />
              {/* Presents under tree */}
              <rect x="52" y="256" width="42" height="34" rx="4" />
              <path d="M73 256v34M52 273h42" />
              <rect x="166" y="252" width="44" height="38" rx="4" />
              <path d="M188 252v38M166 271h44" />
            </g>
          )}

          {id === 'page3' && (
            <g stroke="#1b2620" strokeWidth="3.2" fill="#ffffff" strokeLinecap="round" strokeLinejoin="round">
              {/* Antlers */}
              <path d="M96 92c-16-24-34-34-44-48m16 26l-16 4m28-10l-4-20" fill="none" />
              <path d="M164 92c16-24 34-34 44-48m-16 26l16 4m-28-10l4-20" fill="none" />
              {/* Ears */}
              <ellipse cx="76" cy="116" rx="18" ry="10" transform="rotate(-24 76 116)" />
              <ellipse cx="184" cy="116" rx="18" ry="10" transform="rotate(24 184 116)" />
              {/* Reindeer head */}
              <ellipse cx="130" cy="140" rx="48" ry="52" />
              {/* Snout & big round nose */}
              <ellipse cx="130" cy="158" rx="30" ry="22" />
              <circle cx="130" cy="148" r="11" />
              {/* Eyes */}
              <circle cx="108" cy="120" r="5" fill="#1b2620" />
              <circle cx="152" cy="120" r="5" fill="#1b2620" />
              <path d="M118 168q12 10 24 0" fill="none" />
              {/* Scarf & Bell */}
              <path d="M84 190c26 14 66 14 92 0v22c-26 12-66 12-92 0z" />
              <circle cx="130" cy="228" r="14" />
              {/* Wreath frame behind */}
              <circle cx="130" cy="256" r="16" fill="none" strokeDasharray="4 4" />
              <path d="M76 220c-20 18-24 54 14 70h80c38-16 34-52 14-70" fill="none" />
            </g>
          )}

          {id === 'page4' && (
            <g stroke="#1b2620" strokeWidth="3.2" fill="#ffffff" strokeLinecap="round" strokeLinejoin="round">
              {/* Snowflakes */}
              <path d="M50 56v24M38 68h24M42 60l16 16M58 60L42 76" fill="none" strokeWidth="2.2" />
              <path d="M210 66v24M198 78h24M202 70l16 16M218 70l-16 16" fill="none" strokeWidth="2.2" />
              {/* Snowman body */}
              <circle cx="130" cy="222" r="56" />
              <circle cx="130" cy="142" r="38" />
              {/* Top hat */}
              <path d="M86 106h88" />
              <rect x="100" y="62" width="60" height="44" rx="4" />
              <rect x="100" y="92" width="60" height="12" />
              {/* Scarf */}
              <path d="M96 172q34 14 68 0v14q-34 14-68 0z" />
              <path d="M144 182l14 44h-18l-10-40" />
              {/* Face */}
              <circle cx="116" cy="134" r="4" fill="#1b2620" />
              <circle cx="144" cy="134" r="4" fill="#1b2620" />
              <polygon points="130,140 162,146 130,152" />
              <path d="M114 156q16 10 32 0" fill="none" />
              {/* Buttons & twig arms */}
              <circle cx="130" cy="212" r="5" />
              <circle cx="130" cy="232" r="5" />
              <circle cx="130" cy="252" r="5" />
              <path d="M74 206l-36-22m14 9l-10-16m144 29l36-22m-14 9l10-16" fill="none" />
            </g>
          )}

          {id === 'page5' && (
            <g stroke="#1b2620" strokeWidth="3.2" fill="#ffffff" strokeLinecap="round" strokeLinejoin="round">
              {/* Chimney & smoke */}
              <rect x="166" y="70" width="26" height="46" />
              <circle cx="182" cy="52" r="8" />
              <circle cx="194" cy="38" r="10" />
              {/* House base */}
              <rect x="54" y="150" width="152" height="126" rx="4" />
              {/* Snowy roof */}
              <polygon points="130,78 36,154 224,154" />
              <path d="M44 154c12 14 26 14 38 0 12 14 26 14 38 0 12 14 26 14 38 0 12 14 26 14 38 0" />
              {/* Door & candy */}
              <path d="M108 276v-56a22 22 0 0 1 44 0v56z" />
              <circle cx="140" cy="244" r="3.5" fill="#1b2620" />
              {/* Round windows */}
              <circle cx="80" cy="196" r="16" />
              <path d="M80 180v32M64 196h32" />
              <circle cx="180" cy="196" r="16" />
              <path d="M180 180v32M164 196h32" />
              {/* Candy canes */}
              <path d="M40 276v-36a10 10 0 0 1 20 0" fill="none" strokeWidth="6" />
              <path d="M220 276v-36a10 10 0 0 0-20 0" fill="none" strokeWidth="6" />
            </g>
          )}

          {id === 'page6' && (
            <g stroke="#1b2620" strokeWidth="3.2" fill="#ffffff" strokeLinecap="round" strokeLinejoin="round">
              {/* Hanging bells */}
              <path d="M98 76c0-20 14-34 32-34s32 14 32 34l12 30H86l12-30z" />
              <circle cx="130" cy="112" r="8" />
              <circle cx="130" cy="40" r="9" />
              {/* Christmas stocking */}
              <path d="M96 144h66v74c0 24-14 44-44 50-24 4-44-8-46-26-2-18 14-30 30-32V144z" />
              <rect x="88" y="132" width="82" height="24" rx="10" />
              {/* Candy & star sticking out */}
              <polygon points="130,174 136,188 150,188 139,197 143,210 130,202 117,210 121,197 110,188 124,188" />
              {/* Small gift box beside stocking */}
              <rect x="174" y="218" width="44" height="46" rx="4" />
              <path d="M196 218v46M174 241h44" />
              <path d="M196 218c-12-14-24-4-14 0m14 0c12-14 24-4 14 0" />
            </g>
          )}
        </svg>
      </div>

      {/* Page footer */}
      <div className="border-t border-[#ebe3ce] pt-1.5 text-center">
        <div className="text-[11px] font-bold text-[#173e32] leading-tight">{title}</div>
        <div className="text-[9px] text-[#6d6247] mt-0.5">{theme}</div>
      </div>
    </div>
  );
};

export const BonusIllustration: React.FC<{ id: 'bonus1' | 'bonus2' | 'bonus3' | 'bonus4' }> = ({
  id,
}) => {
  return (
    <div className="w-full max-w-[520px] mx-auto select-none">
      <svg
        viewBox="0 0 560 400"
        className="w-full h-auto drop-shadow-[0_12px_20px_rgba(69,51,33,0.12)]"
        role="img"
        aria-label={`Ilustração do bônus ${id}`}
      >
        <rect x="20" y="20" width="520" height="360" rx="22" fill="#f5efe0" stroke="#dfd2b0" strokeWidth="2" />

        {id === 'bonus1' && (
          <g>
            {/* Left worksheet: Maze */}
            <g transform="translate(56 46) rotate(-5)">
              <rect width="205" height="284" rx="10" fill="#ffffff" stroke="#cfc29e" strokeWidth="2" />
              <rect x="18" y="18" width="169" height="34" rx="6" fill="#173e32" />
              <text x="102" y="40" textAnchor="middle" fontSize="11" fill="#f3d99e" fontWeight="700" letterSpacing="1">
                LABIRINTO DO NOEL
              </text>
              <rect x="26" y="72" width="153" height="153" rx="6" fill="#faf6ed" stroke="#1e2923" strokeWidth="2.5" />
              <path
                d="M52 72v100h50v-60h46v80H78v33"
                fill="none"
                stroke="#8c2832"
                strokeWidth="3.5"
                strokeDasharray="6 4"
              />
              <path d="M80 100h45M102 140v55M52 195h26" stroke="#1e2923" strokeWidth="3" />
              <circle cx="52" cy="84" r="8" fill="#173e32" />
              <polygon points="152,202 158,214 146,214" fill="#c6a76b" />
              <text x="102" y="256" textAnchor="middle" fontSize="10" fill="#5e6b5b" fontWeight="600">
                Ajude a rena a chegar ao trenó
              </text>
            </g>
            {/* Right worksheet: Dot to dot & count */}
            <g transform="translate(274 52) rotate(5)">
              <rect width="205" height="284" rx="10" fill="#ffffff" stroke="#cfc29e" strokeWidth="2" />
              <rect x="18" y="18" width="169" height="34" rx="6" fill="#8c2832" />
              <text x="102" y="40" textAnchor="middle" fontSize="11" fill="#fff7e7" fontWeight="700" letterSpacing="1">
                LIGUE OS PONTOS
              </text>
              <polygon
                points="102,82 54,196 150,196"
                fill="none"
                stroke="#c6a76b"
                strokeWidth="2.5"
                strokeDasharray="5 5"
              />
              {[
                [102, 82, '1'],
                [128, 134, '2'],
                [150, 196, '3'],
                [102, 196, '4'],
                [54, 196, '5'],
                [76, 134, '6'],
              ].map(([cx, cy, label]) => (
                <g key={String(label)}>
                  <circle cx={Number(cx)} cy={Number(cy)} r="8" fill="#173e32" />
                  <text x={Number(cx)} y={Number(cy) + 3} textAnchor="middle" fontSize="9" fill="#fff" fontWeight="700">
                    {label}
                  </text>
                </g>
              ))}
              <rect x="92" y="196" width="20" height="24" fill="#c69c6d" stroke="#1e2923" strokeWidth="2" />
              <text x="102" y="256" textAnchor="middle" fontSize="10" fill="#5e6b5b" fontWeight="600">
                10 atividades lúdicas em PDF
              </text>
            </g>
          </g>
        )}

        {id === 'bonus2' && (
          <g>
            {/* Folded Christmas card */}
            <g transform="translate(64 56) rotate(-4)">
              <rect width="210" height="268" rx="12" fill="#ffffff" stroke="#cfc29e" strokeWidth="2" />
              <rect x="16" y="16" width="178" height="236" rx="8" fill="#173e32" />
              <rect x="26" y="26" width="158" height="216" rx="6" fill="none" stroke="#e2c17d" strokeWidth="1.5" />
              <polygon points="105,64 76,120 134,120" fill="#e2c17d" />
              <polygon points="105,98 66,160 144,160" fill="#e2c17d" />
              <rect x="97" y="160" width="16" height="18" fill="#8c2832" />
              <text x="105" y="206" textAnchor="middle" fontSize="16" fill="#fff8e8" fontFamily="Georgia, serif">
                Feliz Natal!
              </text>
              <text x="105" y="226" textAnchor="middle" fontSize="9" fill="#e2c17d" letterSpacing="1.5">
                COM CARINHO
              </text>
            </g>
            {/* Gift tags */}
            <g transform="translate(306 58) rotate(6)">
              <path d="M20 0h100l28 32v144H0V32L20 0z" fill="#ffffff" stroke="#c6a76b" strokeWidth="2.5" />
              <circle cx="74" cy="24" r="7" fill="#f5efe0" stroke="#c6a76b" strokeWidth="2" />
              <text x="74" y="64" textAnchor="middle" fontSize="11" fill="#8c2832" fontWeight="700">
                DE: __________
              </text>
              <text x="74" y="88" textAnchor="middle" fontSize="11" fill="#173e32" fontWeight="700">
                PARA: ________
              </text>
              <circle cx="74" cy="130" r="22" fill="#f7f1e1" stroke="#1e2923" strokeWidth="2" />
              <text x="74" y="135" textAnchor="middle" fontSize="18">
                🎁
              </text>
            </g>
            <g transform="translate(342 186) rotate(-7)">
              <path d="M18 0h96l24 28v122H0V28L18 0z" fill="#8c2832" stroke="#e2c17d" strokeWidth="2" />
              <circle cx="66" cy="20" r="6" fill="#f5efe0" />
              <text x="66" y="68" textAnchor="middle" fontSize="13" fill="#fff8e8" fontFamily="Georgia, serif">
                Boas Festas
              </text>
              <text x="66" y="92" textAnchor="middle" fontSize="9" fill="#e2c17d" letterSpacing="1.2">
                20 MODELOS PDF
              </text>
            </g>
          </g>
        )}

        {id === 'bonus3' && (
          <g>
            {/* Carta ao Papai Noel */}
            <g transform="translate(56 50) rotate(-4)">
              <rect width="220" height="292" rx="12" fill="#fffdf8" stroke="#c6a76b" strokeWidth="2.5" />
              <rect x="14" y="14" width="192" height="44" rx="6" fill="#8c2832" />
              <text x="110" y="40" textAnchor="middle" fontSize="12" fill="#fff8e8" fontWeight="700" letterSpacing="1">
                CARTA AO PAPAI NOEL
              </text>
              <text x="28" y="86" fontSize="11" fill="#173e32" fontWeight="700">
                Querido Papai Noel,
              </text>
              {[112, 136, 160, 184, 208, 232].map((y) => (
                <line key={y} x1="28" y1={y} x2="192" y2={y} stroke="#d5c8a8" strokeWidth="1.5" />
              ))}
              <text x="110" y="266" textAnchor="middle" fontSize="10" fill="#8c2832" fontWeight="700">
                + LISTA DE DESEJOS
              </text>
            </g>
            {/* Certificado de Ajudante */}
            <g transform="translate(278 64) rotate(5)">
              <rect width="226" height="270" rx="12" fill="#173e32" stroke="#e2c17d" strokeWidth="3" />
              <rect x="12" y="12" width="202" height="246" rx="8" fill="none" stroke="#e2c17d" strokeWidth="1.4" />
              <text x="113" y="48" textAnchor="middle" fontSize="10" fill="#e2c17d" letterSpacing="2" fontWeight="700">
                CERTIFICADO OFICIAL
              </text>
              <text x="113" y="76" textAnchor="middle" fontSize="19" fill="#fff8e8" fontFamily="Georgia, serif">
                Ajudante do Natal
              </text>
              <line x1="36" y1="128" x2="190" y2="128" stroke="#e2c17d" strokeWidth="1.5" />
              <text x="113" y="148" textAnchor="middle" fontSize="9.5" fill="#d8e3d5">
                Nome da criança
              </text>
              <circle cx="113" cy="202" r="28" fill="#8c2832" stroke="#e2c17d" strokeWidth="2" />
              <text x="113" y="207" textAnchor="middle" fontSize="22">
                ★
              </text>
            </g>
          </g>
        )}

        {id === 'bonus4' && (
          <g>
            {/* Advent calendar sheet */}
            <g transform="translate(88 38)">
              <rect width="384" height="324" rx="14" fill="#ffffff" stroke="#c6a76b" strokeWidth="2.5" />
              <rect x="16" y="16" width="352" height="46" rx="8" fill="#173e32" />
              <text x="192" y="44" textAnchor="middle" fontSize="13" fill="#f3d99e" fontWeight="700" letterSpacing="1.6">
                CONTAGEM REGRESSIVA · 25 DIAS
              </text>
              {Array.from({ length: 25 }).map((_, idx) => {
                const col = idx % 5;
                const row = Math.floor(idx / 5);
                const x = 32 + col * 66;
                const y = 78 + row * 46;
                const isLast = idx === 24;
                return (
                  <g key={idx}>
                    <rect
                      x={x}
                      y={y}
                      width="56"
                      height="38"
                      rx="6"
                      fill={isLast ? '#8c2832' : idx % 3 === 0 ? '#faf4e3' : '#ffffff'}
                      stroke={isLast ? '#c6a76b' : '#263f34'}
                      strokeWidth="1.8"
                    />
                    <text
                      x={x + 28}
                      y={y + 24}
                      textAnchor="middle"
                      fontSize="13"
                      fontWeight="700"
                      fill={isLast ? '#fff8e8' : '#173e32'}
                    >
                      {isLast ? '25 🎄' : idx + 1}
                    </text>
                  </g>
                );
              })}
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};

export const PremiumBundleMockup: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  return (
    <div className={compact ? 'w-full max-w-[340px] mx-auto' : 'w-full max-w-[440px] mx-auto'}>
      <svg
        viewBox="0 0 520 390"
        className="w-full h-auto drop-shadow-[0_10px_18px_rgba(0,0,0,0.22)]"
        role="img"
        aria-label="Mockup completo do Plano Premium com +150 desenhos e os 4 bônus"
      >
        <rect x="10" y="10" width="500" height="370" rx="18" fill="#f8f3e7" />
        {/* Bonus cards fanned in background */}
        <g transform="translate(36 52) rotate(-8)">
          <rect width="150" height="205" rx="8" fill="#ffffff" stroke="#c6a76b" strokeWidth="2" />
          <rect x="10" y="10" width="130" height="28" rx="4" fill="#8c2832" />
          <text x="75" y="28" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="700">
            10 ATIVIDADES
          </text>
          <circle cx="75" cy="116" r="34" fill="#faf4e3" stroke="#1e2923" strokeWidth="2.5" />
          <path d="M55 116h40M75 96v40" stroke="#8c2832" strokeWidth="2.5" />
        </g>

        <g transform="translate(332 42) rotate(8)">
          <rect width="150" height="205" rx="8" fill="#ffffff" stroke="#c6a76b" strokeWidth="2" />
          <rect x="10" y="10" width="130" height="28" rx="4" fill="#173e32" />
          <text x="75" y="28" textAnchor="middle" fontSize="9" fill="#e2c17d" fontWeight="700">
            CONTAGEM 25 DIAS
          </text>
          <rect x="24" y="54" width="102" height="118" rx="6" fill="#faf4e3" stroke="#263f34" strokeWidth="2" />
          <text x="75" y="118" textAnchor="middle" fontSize="28" fill="#8c2832" fontFamily="Georgia, serif">
            25
          </text>
        </g>

        {/* Center Hero Booklet */}
        <g transform="translate(154 28)">
          <rect width="212" height="286" rx="12" fill="#173e32" stroke="#e2c17d" strokeWidth="3" />
          <rect x="12" y="12" width="188" height="262" rx="8" fill="#ffffff" />
          <rect x="12" y="12" width="188" height="58" rx="8" fill="#173e32" />
          <text x="106" y="34" textAnchor="middle" fontSize="9" fill="#e2c17d" fontWeight="700" letterSpacing="1.6">
            KIT PREMIUM COMPLETO
          </text>
          <text x="106" y="55" textAnchor="middle" fontSize="15" fill="#fff8e8" fontFamily="Georgia, serif">
            +150 Desenhos
          </text>
          {/* Mini tree inside cover */}
          <polygon points="106,90 66,154 146,154" fill="#e5efe0" stroke="#1e2923" strokeWidth="2.8" />
          <polygon points="106,126 52,202 160,202" fill="#d5e7cc" stroke="#1e2923" strokeWidth="2.8" />
          <rect x="94" y="202" width="24" height="26" fill="#c69c6d" stroke="#1e2923" strokeWidth="2.5" />
          <polygon points="106,74 110,84 120,84 112,90 115,100 106,94 97,100 100,90 92,84 102,84" fill="#e2c17d" stroke="#1e2923" strokeWidth="1.8" />
          <text x="106" y="254" textAnchor="middle" fontSize="9.5" fill="#173e32" fontWeight="700">
            + 4 BÔNUS ESPECIAIS
          </text>
        </g>

        {/* Bottom feature pills */}
        <g transform="translate(38 326)">
          <rect width="102" height="32" rx="16" fill="#173e32" />
          <text x="51" y="20" textAnchor="middle" fontSize="9.5" fill="#f3d99e" fontWeight="700">
            PDF IMPRESSÃO
          </text>
        </g>
        <g transform="translate(152 326)">
          <rect width="102" height="32" rx="16" fill="#8c2832" />
          <text x="51" y="20" textAnchor="middle" fontSize="9.5" fill="#fff8e8" fontWeight="700">
            20 CARTÕES
          </text>
        </g>
        <g transform="translate(266 326)">
          <rect width="102" height="32" rx="16" fill="#173e32" />
          <text x="51" y="20" textAnchor="middle" fontSize="9.5" fill="#f3d99e" fontWeight="700">
            KIT NOEL
          </text>
        </g>
        <g transform="translate(380 326)">
          <rect width="102" height="32" rx="16" fill="#8c2832" />
          <text x="51" y="20" textAnchor="middle" fontSize="9.5" fill="#fff8e8" fontWeight="700">
            CALENDÁRIO
          </text>
        </g>
      </svg>
    </div>
  );
};

