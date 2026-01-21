// HPI 1.7-G
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Shield, Truck, Award, Star, X, ArrowRight, Plus, Minus, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { BrandBenefits, FAQs } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- Utility Components for Layout & Design ---

const SectionLabel = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`flex items-center gap-4 mb-8 ${className}`}>
    <span className="h-[1px] w-12 bg-charcoal/30"></span>
    <span className="font-paragraph text-xs font-medium tracking-[0.2em] uppercase text-charcoal/60">
      {children}
    </span>
  </div>
);

const ParallaxImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-[120%] -mt-[10%]">
        <Image
          src={src}
          alt={alt}
          width={1200}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

// --- Main Component ---

export default function HomePage() {
  // --- Data Fidelity: State & Effects ---
  const [benefits, setBenefits] = useState<BrandBenefits[]>([]);
  const [faqs, setFaqs] = useState<FAQs[]>([]);
  const [isLoadingBenefits, setIsLoadingBenefits] = useState(true);
  const [isLoadingFaqs, setIsLoadingFaqs] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');

  // Scroll progress for global elements
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    loadBenefits();
    loadFaqs();
    
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const loadBenefits = async () => {
    try {
      const result = await BaseCrudService.getAll<BrandBenefits>('brandbenefits');
      setBenefits(result.items.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0)));
    } catch (error) {
      console.error('Error loading benefits:', error);
    } finally {
      setIsLoadingBenefits(false);
    }
  };

  const loadFaqs = async () => {
    try {
      const result = await BaseCrudService.getAll<FAQs>('faqs', [], { limit: 6 });
      setFaqs(result.items.filter(faq => faq.isFeatured));
    } catch (error) {
      console.error('Error loading FAQs:', error);
    } finally {
      setIsLoadingFaqs(false);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
    setShowPopup(false);
  };

  // Canonical Data Source: Categories
  const categories = [
    { name: 'Body Sculpting', slug: 'body-sculpting', description: 'Advanced contouring technology.' },
    { name: 'Facial Devices', slug: 'facial-devices', description: 'Precision rejuvenation systems.' },
    { name: 'Hair Removal', slug: 'hair-removal', description: 'Professional laser solutions.' },
    { name: 'Accessories', slug: 'accessories', description: 'Essential clinical supplies.' }
  ];

  return (
    <div className="min-h-screen bg-background text-charcoal font-paragraph selection:bg-gold-accent/20 selection:text-charcoal overflow-x-clip">
      {/* Global Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold-accent origin-left z-50"
        style={{ scaleX }}
      />

      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Parallax Layer */}
        <div className="absolute inset-0 z-0">
          <ParallaxImage 
            src="https://static.wixstatic.com/media/5ea123_4c4ca7e27ade498d8fc051adea65a6af~mv2.png?originWidth=1152&originHeight=640"
            alt="Luxury Massage Table in Professional Spa"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-background/90" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 w-full max-w-[120rem] mx-auto px-6 md:px-12 pt-32 pb-20">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <SectionLabel className="mb-6">Est. 2024 • Professional Grade</SectionLabel>
                <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-charcoal mb-8">
                  Professional-Grade Equipment <br />
                  <span className="italic font-light text-charcoal/80">for Serious Practitioners</span>
                </h1>
                <p className="font-paragraph text-xl md:text-2xl text-charcoal/80 max-w-3xl mb-12 leading-relaxed">
                  High-performance spa equipment trusted by medical spas, wellness clinics, and aesthetic professionals across the US. Build your practice with proven technology.
                </p>
              </motion.div>

              {/* Trust Bullets */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap gap-6 mb-12"
              >
                <div className="flex items-center gap-2 bg-white/80 px-4 py-3 border border-charcoal/10">
                  <Truck className="w-5 h-5 text-gold-accent" />
                  <span className="font-paragraph text-sm text-charcoal">Free US Shipping</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 px-4 py-3 border border-charcoal/10">
                  <Shield className="w-5 h-5 text-gold-accent" />
                  <span className="font-paragraph text-sm text-charcoal">2-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 px-4 py-3 border border-charcoal/10">
                  <Award className="w-5 h-5 text-gold-accent" />
                  <span className="font-paragraph text-sm text-charcoal">Expert Support</span>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/store">
                  <Button 
                    size="lg" 
                    className="bg-charcoal text-white hover:bg-gold-accent hover:text-white rounded-none px-10 py-8 text-lg tracking-wide transition-all duration-500"
                  >
                    Shop Best Sellers
                  </Button>
                </Link>
                <Link to="/financing">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-none px-10 py-8 text-lg tracking-wide transition-all duration-500"
                  >
                    Get Financing
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-charcoal/40">Scroll</span>
          <div className="w-[1px] h-12 bg-charcoal/20 overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-full h-1/2 bg-charcoal"
            />
          </div>
        </motion.div>
      </section>

      {/* --- BENEFITS SECTION (Sticky Layout) --- */}
      <section className="w-full bg-white py-32 border-t border-charcoal/5">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Sticky Header */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <SectionLabel>Why Choose Us</SectionLabel>
                <h2 className="font-heading text-5xl md:text-6xl text-charcoal mb-8 leading-tight">
                  Precision in <br />
                  <span className="text-gold-accent italic">Every Detail</span>
                </h2>
                <p className="text-charcoal/60 text-lg leading-relaxed mb-12 max-w-sm">
                  We bridge the gap between medical-grade performance and aesthetic luxury, ensuring your clinic operates at the highest standard.
                </p>
                <Link to="/about">
                  <Button variant="link" className="p-0 text-charcoal hover:text-gold-accent transition-colors text-lg group">
                    Our Philosophy <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Scrolling Content */}
            <div className="lg:w-2/3 grid grid-cols-1 gap-12">
              {isLoadingBenefits ? (
                <div className="h-96 flex items-center justify-center text-charcoal/30">Loading benefits...</div>
              ) : (
                benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit._id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group relative bg-background p-12 border border-charcoal/5 hover:border-gold-accent/30 transition-colors duration-500"
                  >
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                      <span className="font-heading text-8xl text-charcoal">0{index + 1}</span>
                    </div>
                    
                    <div className="mb-8 relative z-10">
                      {benefit.iconImage ? (
                        <Image 
                          src={benefit.iconImage} 
                          alt={benefit.benefitTitle || 'Icon'}
                          width={64}
                          className="w-16 h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      ) : (
                        <Award className="w-16 h-16 text-gold-accent/80" />
                      )}
                    </div>
                    
                    <h3 className="font-heading text-3xl text-charcoal mb-4 relative z-10 group-hover:text-gold-accent transition-colors">
                      {benefit.benefitTitle}
                    </h3>
                    <p className="font-paragraph text-charcoal/60 leading-relaxed relative z-10 max-w-lg">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST SIGNALS SECTION --- */}
      <section className="w-full bg-white py-20 border-t border-charcoal/5">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-heading text-gold-accent mb-2">500+</div>
              <p className="font-paragraph text-charcoal/70">Clinics Equipped</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading text-gold-accent mb-2">2-Year</div>
              <p className="font-paragraph text-charcoal/70">Warranty Coverage</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading text-gold-accent mb-2">24/7</div>
              <p className="font-paragraph text-charcoal/70">Support Available</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading text-gold-accent mb-2">30-Day</div>
              <p className="font-paragraph text-charcoal/70">Return Policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CATEGORIES (Compact Grid) --- */}
      <section className="w-full bg-secondary/20 py-24 overflow-hidden">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <SectionLabel>Curated Collections</SectionLabel>
              <h2 className="font-heading text-4xl md:text-5xl text-charcoal">Shop by Category</h2>
            </div>
            <Link to="/store">
              <Button variant="outline" className="hidden md:flex border-charcoal/20 hover:bg-charcoal hover:text-white rounded-none px-8 py-6">
                View All Products
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative h-[400px]"
              >
                <Link to="/store" className="block w-full h-full">
                  <div className="w-full h-full relative overflow-hidden bg-white border border-charcoal/10 hover:border-gold-accent/30 transition-colors">
                    <Image
                      src="https://static.wixstatic.com/media/5ea123_08aa4e7a2543404d8484969c20d3ce21~mv2.png?originWidth=576&originHeight=576"
                      alt={category.name}
                      width={600}
                      className="w-full h-3/4 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white p-6 border-t border-charcoal/10">
                      <h3 className="font-heading text-2xl text-charcoal mb-1 group-hover:text-gold-accent transition-colors">
                        {category.name}
                      </h3>
                      <p className="font-paragraph text-charcoal/60 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 md:hidden flex justify-center">
            <Link to="/store">
              <Button variant="outline" className="border-charcoal/20 hover:bg-charcoal hover:text-white rounded-none px-8 py-6">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- BEST SELLERS SECTION --- */}
      <section className="w-full bg-white py-24 border-t border-charcoal/5">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <SectionLabel>Top Rated</SectionLabel>
              <h2 className="font-heading text-4xl md:text-5xl text-charcoal">Best Sellers</h2>
            </div>
            <Link to="/store">
              <Button variant="link" className="text-charcoal hover:text-gold-accent transition-colors text-lg group">
                View All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to="/store" className="block">
                  <div className="relative overflow-hidden bg-background mb-4 aspect-square">
                    <Image
                      src="https://static.wixstatic.com/media/5ea123_08aa4e7a2543404d8484969c20d3ce21~mv2.png?originWidth=576&originHeight=576"
                      alt="Best Seller Product"
                      width={600}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-gold-accent text-white px-3 py-1 text-xs font-paragraph tracking-wide">
                      BEST SELLER
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-accent text-gold-accent" />
                    ))}
                    <span className="text-sm text-charcoal/60 ml-2">(120+ reviews)</span>
                  </div>
                  <h3 className="font-heading text-xl text-charcoal mb-2 group-hover:text-gold-accent transition-colors">
                    Professional Equipment
                  </h3>
                  <p className="font-paragraph text-charcoal/60 text-sm mb-3">
                    High-performance system for professional results
                  </p>
                  <div className="font-heading text-2xl text-charcoal">
                    From $12,500
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="w-full bg-secondary/30 py-24">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <SectionLabel className="justify-center">Trusted by Professionals</SectionLabel>
            <h2 className="font-heading text-4xl md:text-5xl text-charcoal">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Sarah Mitchell', role: 'Medical Spa Owner', text: 'The equipment quality is exceptional. Our clients notice the difference, and the warranty gives us peace of mind.' },
              { name: 'James Rodriguez', role: 'Wellness Clinic Director', text: 'Professional-grade performance at a fair price. The financing made it easy to upgrade our entire facility.' },
              { name: 'Emily Chen', role: 'Aesthetic Practitioner', text: 'Outstanding support team. They helped us choose the right equipment and provided excellent training.' }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 border border-charcoal/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-accent text-gold-accent" />
                  ))}
                </div>
                <p className="font-paragraph text-charcoal/70 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-heading text-lg text-charcoal">{testimonial.name}</div>
                  <div className="font-paragraph text-sm text-charcoal/60">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINANCING BANNER (Visual Break) --- */}
      <section className="w-full bg-charcoal text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <Image 
             src="https://static.wixstatic.com/media/5ea123_1b2e57fc0e3a433c86ae05f3361df4da~mv2.png?originWidth=1152&originHeight=640"
             alt="Infrared Sauna Equipment"
             className="w-full h-full object-cover grayscale"
           />
        </div>
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-5xl md:text-6xl mb-6">
                Flexible Financing <span className="text-gold-accent">Made Simple</span>
              </h2>
              <p className="font-paragraph text-white/80 text-lg max-w-xl leading-relaxed mb-10">
                Grow your practice with affordable monthly payments. Our financing partners offer competitive rates and fast approval for qualified businesses.
              </p>
              
              {/* 3-Step Process */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold-accent rounded-full flex items-center justify-center font-heading text-lg">1</div>
                  <div>
                    <h3 className="font-heading text-xl mb-1">Apply Online</h3>
                    <p className="text-white/70 text-sm">Quick application with soft credit check (no impact on credit score)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold-accent rounded-full flex items-center justify-center font-heading text-lg">2</div>
                  <div>
                    <h3 className="font-heading text-xl mb-1">Get Approved</h3>
                    <p className="text-white/70 text-sm">Receive decision within 24 hours from our financing partners</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold-accent rounded-full flex items-center justify-center font-heading text-lg">3</div>
                  <div>
                    <h3 className="font-heading text-xl mb-1">Choose Your Terms</h3>
                    <p className="text-white/70 text-sm">Select 12, 24, or 36-month payment plans that fit your budget</p>
                  </div>
                </div>
              </div>

              <Link to="/financing">
                <Button className="bg-white text-charcoal hover:bg-gold-accent hover:text-white rounded-none px-10 py-8 text-lg transition-all duration-300">
                  Learn More About Financing
                </Button>
              </Link>
            </div>
            <div className="hidden lg:block relative">
              <div className="border border-white/20 p-12 backdrop-blur-sm bg-white/5">
                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-8">
                  <span className="font-heading text-2xl">Equipment Value</span>
                  <span className="font-paragraph text-xl">$15,000</span>
                </div>
                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-8">
                  <span className="font-heading text-2xl">Monthly Payment</span>
                  <span className="font-paragraph text-xl text-gold-accent">Starting at $350/mo</span>
                </div>
                <p className="text-white/40 text-sm">
                  *Example rates. Actual terms based on credit approval and financing partner offers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SUPPORT & CONTACT SECTION --- */}
      <section className="w-full bg-white py-24 border-t border-charcoal/5">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            <div className="bg-background p-8 border border-charcoal/10">
              <h3 className="font-heading text-2xl text-charcoal mb-4">Contact Us</h3>
              <div className="space-y-3">
                <p className="font-paragraph text-charcoal/70">
                  <strong>Phone:</strong> 1-800-SPA-EQUIP
                </p>
                <p className="font-paragraph text-charcoal/70">
                  <strong>Email:</strong> support@luxespa.com
                </p>
                <p className="font-paragraph text-charcoal/70">
                  <strong>Hours:</strong> Mon-Fri 8AM-8PM EST
                </p>
              </div>
            </div>

            <div className="bg-background p-8 border border-charcoal/10">
              <h3 className="font-heading text-2xl text-charcoal mb-4">Warranty & Returns</h3>
              <p className="font-paragraph text-charcoal/70 mb-4">
                2-year comprehensive warranty on all equipment. 30-day return policy with free return shipping.
              </p>
              <Link to="/returns" className="text-gold-accent hover:underline font-paragraph">
                View Full Policy →
              </Link>
            </div>

            <div className="bg-background p-8 border border-charcoal/10">
              <h3 className="font-heading text-2xl text-charcoal mb-4">Request a Quote</h3>
              <p className="font-paragraph text-charcoal/70 mb-4">
                Need help choosing equipment or bulk pricing? Our specialists are here to help.
              </p>
              <Link to="/contact">
                <Button className="bg-charcoal text-white hover:bg-gold-accent rounded-none w-full">
                  Get Custom Quote
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <SectionLabel>Support</SectionLabel>
              <h2 className="font-heading text-5xl text-charcoal mb-6">Common Questions</h2>
              <p className="text-charcoal/60 mb-8">
                Everything you need to know about shipping, warranties, and technical support.
              </p>
              <Link to="/faq">
                <Button variant="outline" className="rounded-none border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors">
                  Visit Help Center
                </Button>
              </Link>
            </div>
            
            <div className="lg:col-span-8">
              {isLoadingFaqs ? (
                <div className="py-12 text-charcoal/40">Loading FAQs...</div>
              ) : (
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <FAQItem key={faq._id} question={faq.question} answer={faq.answer} index={index} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- REGULATORY NOTE --- */}
      <section className="w-full bg-secondary/20 py-12 border-t border-charcoal/5">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 text-center">
          <p className="font-paragraph text-sm text-charcoal/60 max-w-4xl mx-auto">
            <strong>Regulatory Note:</strong> All equipment is professional-grade and suitable for commercial use. FDA-cleared status is indicated on individual product pages where applicable. We only sell equipment that meets or exceeds industry safety standards.
          </p>
        </div>
      </section>

      {/* --- POPUP --- */}
      {showPopup && (
        <div className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm flex items-center justify-center z-[100] px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white p-0 max-w-4xl w-full shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-secondary">
               <Image 
                 src="https://static.wixstatic.com/media/5ea123_dd5ad1c7d86748559f6196f647e758bf~mv2.png?originWidth=576&originHeight=640"
                 alt="High-End Spa Equipment"
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-charcoal/10"></div>
            </div>
            <div className="w-full md:w-1/2 p-12 relative">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-6 right-6 text-charcoal/40 hover:text-charcoal transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <SectionLabel>Join the Inner Circle</SectionLabel>
              <h3 className="font-heading text-4xl text-charcoal mb-4">
                Unlock 10% Off
              </h3>
              <p className="font-paragraph text-charcoal/60 mb-8">
                Subscribe to our newsletter for exclusive access to new arrivals, industry insights, and a welcome gift for your first order.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full font-paragraph border-charcoal/20 focus:border-gold-accent rounded-none py-6"
                />
                <Button 
                  type="submit"
                  className="w-full bg-charcoal hover:bg-gold-accent text-white font-paragraph py-6 rounded-none transition-all duration-300"
                >
                  Subscribe & Save
                </Button>
              </form>
              <p className="text-xs text-charcoal/40 mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
}

// --- Sub-components ---

const FAQItem = ({ question, answer, index }: { question?: string; answer?: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-charcoal/10"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className="font-heading text-xl text-charcoal group-hover:text-gold-accent transition-colors">
          {question}
        </span>
        <span className={`text-charcoal/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5" />
        </span>
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-8 text-charcoal/70 leading-relaxed max-w-3xl">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
};