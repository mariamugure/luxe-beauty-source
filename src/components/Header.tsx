import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MiniCart } from '@/wix-verticals/react-pages/react-router/routes/root';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/store' },
    { name: 'About', href: '/about' },
    { name: 'Financing', href: '/financing' },
    { name: 'Shipping', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const [showQuoteButton, setShowQuoteButton] = useState(false);

  // Show sticky quote button after scrolling
  useState(() => {
    const handleScroll = () => {
      setShowQuoteButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-secondary">
      <nav className="max-w-[100rem] mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-heading text-3xl text-charcoal">Luxe Spa Equipment</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="font-paragraph text-base text-foreground hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden lg:block">
              <Button 
                size="sm"
                className="bg-gold-accent text-white hover:bg-charcoal rounded-none px-6 py-2 text-sm tracking-wide transition-all duration-300"
              >
                Request a Quote
              </Button>
            </Link>
            <MiniCart />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-charcoal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-paragraph text-base text-foreground hover:text-primary transition-colors duration-300 py-2"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
