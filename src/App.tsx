import React, { useState } from 'react';
import { OfferBanner } from './components/OfferBanner';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SamplesCarousel } from './components/SamplesCarousel';
import { HowItWorks } from './components/HowItWorks';
import { BonusSection } from './components/BonusSection';
import { ConversationsCarousel } from './components/ConversationsCarousel';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FooterSection } from './components/FooterSection';
import { LightboxModal, LightboxTarget } from './components/LightboxModal';
import { SpecialOfferModal } from './components/SpecialOfferModal';
import { OFFER_CONFIG } from './data/offerConfig';

const OFFER_SESSION_KEY = 'vila-natal-offer-shown';

export default function App() {
  const [lightboxTarget, setLightboxTarget] = useState<LightboxTarget>(null);
  const [specialOfferOpen, setSpecialOfferOpen] = useState(false);
  const [sessionSeenFallback, setSessionSeenFallback] = useState(false);

  const hasSeenSpecialOffer = (): boolean => {
    try {
      return window.sessionStorage.getItem(OFFER_SESSION_KEY) === '1' || sessionSeenFallback;
    } catch {
      return sessionSeenFallback;
    }
  };

  const markSpecialOfferSeen = () => {
    setSessionSeenFallback(true);
    try {
      window.sessionStorage.setItem(OFFER_SESSION_KEY, '1');
    } catch {
      // Ignore storage errors in restricted iframes
    }
  };

  const handleBasicCheckoutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const popup = OFFER_CONFIG.popup;
    if (
      !popup.enabled ||
      !popup.checkoutPriceVerified ||
      popup.trigger !== 'basic-click' ||
      hasSeenSpecialOffer()
    ) {
      return;
    }
    e.preventDefault();
    markSpecialOfferSeen();
    setSpecialOfferOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf6ed] text-[#263f34]">
      <OfferBanner />
      <Header />
      <HeroSection />
      <SamplesCarousel
        onZoomSample={(sample) => setLightboxTarget({ type: 'sample', item: sample })}
      />
      <HowItWorks />
      <BonusSection />
      <ConversationsCarousel
        onZoomConversation={(conversation) =>
          setLightboxTarget({ type: 'conversation', item: conversation })
        }
      />
      <PricingSection onBasicCheckoutClick={handleBasicCheckoutClick} />
      <GuaranteeSection />
      <FaqSection />
      <FooterSection />

      <LightboxModal target={lightboxTarget} onClose={() => setLightboxTarget(null)} />
      <SpecialOfferModal open={specialOfferOpen} onClose={() => setSpecialOfferOpen(false)} />
    </div>
  );
}
