import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    const dismissed = sessionStorage.getItem('stickyCTADismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      // Show sticky CTA after scrolling 300px
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 300) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    sessionStorage.setItem('stickyCTADismissed', 'true');
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-charcoal text-white shadow-2xl border-t-2 border-gold-accent"
        >
          <div className="max-w-[120rem] mx-auto px-4 md:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Left side - Message */}
              <div className="flex-1 text-center sm:text-left">
                <p className="font-heading text-lg md:text-xl text-white">
                  Ready to upgrade your practice?
                </p>
                <p className="font-paragraph text-sm text-white/70 hidden md:block">
                  Get a personalized quote in 24 hours
                </p>
              </div>

              {/* Right side - CTAs */}
              <div className="flex items-center gap-3 flex-wrap justify-center">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-gold-accent hover:bg-gold-accent/90 text-white font-paragraph font-semibold px-6 md:px-8 py-5 md:py-6 rounded-none transition-all duration-300"
                  >
                    Request a Quote
                  </Button>
                </Link>
                <a href="tel:855-589-3652">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/80 bg-transparent text-white hover:bg-white hover:text-charcoal font-paragraph font-semibold px-6 md:px-8 py-5 md:py-6 rounded-none transition-all duration-300 flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="hidden sm:inline">Call </span>855-LUXE-3652
                  </Button>
                </a>
                
                {/* Dismiss button */}
                <button
                  onClick={handleDismiss}
                  className="text-white/60 hover:text-white transition-colors p-2"
                  aria-label="Dismiss"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
