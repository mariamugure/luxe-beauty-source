import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="w-full bg-charcoal text-white py-16">
      <div className="max-w-[100rem] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl mb-4">Luxe Spa Equipment</h3>
            <p className="font-paragraph text-sm text-white/70">
              Premium spa and beauty equipment for professionals
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/store" className="font-paragraph text-sm text-white/70 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-paragraph text-sm text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="font-paragraph text-sm text-white/70 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-paragraph text-sm text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-heading text-xl mb-4">Policies</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/financing" className="font-paragraph text-sm text-white/70 hover:text-white transition-colors">
                  Financing
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="font-paragraph text-sm text-white/70 hover:text-white transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/returns" className="font-paragraph text-sm text-white/70 hover:text-white transition-colors">
                  Returns & Warranty
                </Link>
              </li>
              <li>
                <Link to="/faq" className="font-paragraph text-sm text-white/70 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="font-paragraph text-sm text-white/70">
                Phone: 1-800-SPA-EQUIP
              </li>
              <li className="font-paragraph text-sm text-white/70">
                Email: support@luxespa.com
              </li>
              <li className="font-paragraph text-sm text-white/70">
                Hours: Mon-Fri 8AM-8PM EST
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-xl mb-4">Newsletter</h4>
            <p className="font-paragraph text-sm text-white/70 mb-4">
              Subscribe for exclusive offers
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 font-paragraph"
              />
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-paragraph rounded transition-all duration-300"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="border-t border-white/10 pt-8 pb-6">
          <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center">
                <svg className="w-6 h-6 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.86-.96-7-5.05-7-9V8.3l7-3.5 7 3.5V11c0 3.95-3.14 8.04-7 9z"/>
                </svg>
              </div>
              <span className="font-paragraph text-xs text-white/70">Secure<br/>Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center">
                <svg className="w-6 h-6 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span className="font-paragraph text-xs text-white/70">2-Year<br/>Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center">
                <svg className="w-6 h-6 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <span className="font-paragraph text-xs text-white/70">Support<br/>Mon-Fri 8AM-8PM</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center">
                <svg className="w-6 h-6 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
              </div>
              <span className="font-paragraph text-xs text-white/70">Flexible<br/>Financing</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="font-paragraph text-sm text-white/70">
            © 2026 Luxe Spa Equipment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
