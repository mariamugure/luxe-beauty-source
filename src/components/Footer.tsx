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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
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
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="font-paragraph text-sm text-white/70 hover:text-white transition-colors">
                  FAQ
                </Link>
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

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="font-paragraph text-sm text-white/70">
            © {new Date().getFullYear()} Luxe Spa Equipment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
