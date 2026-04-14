// HPI 1.7-G
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Shield, Truck, Award, Star, X, ArrowRight, Plus, Minus, ChevronDown, TrendingUp, BarChart3, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { BrandBenefits, FAQs, DistributorTestimonials } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';

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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Always render the ref container unconditionally to ensure proper hydration
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
  const [suppliers, setSuppliers] = useState<DistributorTestimonials[]>([]);
  const [isLoadingBenefits, setIsLoadingBenefits] = useState(true);
  const [isLoadingFaqs, setIsLoadingFaqs] = useState(true);
  const [isLoadingSuppliers, setIsLoadingSuppliers] = useState(true);
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
    loadSuppliers();
  }, []);

  useEffect(() => {
    // Popup triggers: exit-intent on desktop, 45-60s delay or 35-50% scroll on mobile
    const popupDismissed = sessionStorage.getItem('popupDismissed');
    let scrollTriggered = false;
    let timeTriggered = false;
    let exitIntentTriggered = false;

    const isMobile = window.innerWidth < 768;
    const cleanups: Array<() => void> = [];

    // Mobile: Time-based trigger (45-60 seconds)
    if (isMobile) {
      const delay = 45000 + Math.random() * 15000; // 45-60 seconds
      const timer = setTimeout(() => {
        if (!popupDismissed && !scrollTriggered) {
          setShowPopup(true);
          timeTriggered = true;
        }
      }, delay);
      cleanups.push(() => clearTimeout(timer));

      // Mobile: Scroll-based trigger (35-50% scroll)
      const handleScroll = () => {
        if (!scrollTriggered && !popupDismissed && !timeTriggered) {
          const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
          if (scrollPercent >= 35) {
            setShowPopup(true);
            scrollTriggered = true;
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      cleanups.push(() => window.removeEventListener('scroll', handleScroll));
    } else {
      // Desktop: Exit-intent trigger only
      const handleMouseLeave = (e: MouseEvent) => {
        if (!popupDismissed && !exitIntentTriggered && e.clientY <= 0) {
          setShowPopup(true);
          exitIntentTriggered = true;
        }
      };

      document.addEventListener('mouseleave', handleMouseLeave);
      cleanups.push(() => document.removeEventListener('mouseleave', handleMouseLeave));
    }

    return () => {
      cleanups.forEach(cleanup => cleanup());
    };
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

  const loadSuppliers = async () => {
    try {
      const result = await BaseCrudService.getAll<DistributorTestimonials>('distributortestimonials', [], { limit: 3 });
      setSuppliers(result.items);
    } catch (error) {
      console.error('Error loading suppliers:', error);
    } finally {
      setIsLoadingSuppliers(false);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
    setShowPopup(false);
    // Mark popup as dismissed so it doesn't show again
    sessionStorage.setItem('popupDismissed', 'true');
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    // Mark popup as dismissed so it doesn't show again
    sessionStorage.setItem('popupDismissed', 'true');
  };

  // Canonical Data Source: Categories
  const categories = [
    { 
      name: 'Body Sculpting Machine', 
      slug: 'body-sculpting', 
      description: 'Advanced contouring technology.',
      image: 'https://static.wixstatic.com/media/5ea123_8439f5b069ca44eb86311ac4ef70c72d~mv2.jpg'
    },
    { 
      name: 'Facial Devices', 
      slug: 'facial-devices', 
      description: 'Precision rejuvenation systems.',
      image: 'https://static.wixstatic.com/media/5ea123_ccf5a73d50a6495d947c45fddfac8c18~mv2.jpg'
    },
    { 
      name: 'Hair Removal', 
      slug: 'hair-removal', 
      description: 'Professional laser solutions.',
      image: 'https://static.wixstatic.com/media/5ea123_2f04a30ee7eb46e7b5c8c87b15ac66bc~mv2.jpg'
    },
    { 
      name: 'Accessories', 
      slug: 'accessories', 
      description: 'Essential clinical supplies.',
      image: 'https://static.wixstatic.com/media/5ea123_7a1150d9125641f58fd9f7fafed2f438~mv2.jpg'
    }
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
            src="https://static.wixstatic.com/media/5ea123_62bcfeed2f384769a71939835967b05c~mv2.jpg"
            alt="Professional luxury medical spa treatment room with high-end body contouring equipment"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/85" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 w-full max-w-[120rem] mx-auto px-6 md:px-12 pt-32 pb-20">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2">
              <motion.div
                initial={{ opacity: 1, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-gradient-to-br from-charcoal/40 via-charcoal/30 to-transparent p-8 md:p-12 backdrop-blur-sm"
              >
                <SectionLabel className="mb-6">
                  <span className="text-white/95 font-semibold">Professional-Grade Equipment</span>
                </SectionLabel>
                <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-white mb-8 drop-shadow-2xl">
                  Professional-Grade Equipment for Medical Spas & Clinics
                </h1>
                <h2 className="font-heading text-2xl md:text-3xl text-white/95 font-semibold mb-8 drop-shadow-lg">
                  Medical spa equipment with financing and warranty
                </h2>
                <p className="font-paragraph text-lg md:text-xl text-white font-medium max-w-2xl mb-12 leading-relaxed drop-shadow-lg">
                  High-performance spa equipment for wellness clinics and aesthetic professionals. Build your practice with proven technology.
                </p>
              </motion.div>

              {/* Trust Bullets */}
              <motion.div
                initial={{ opacity: 1, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap gap-6 mb-12"
              >
                <div className="flex flex-col items-start gap-1 bg-white/95 px-4 py-3 border border-white/20 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-gold-accent" />
                    <span className="font-paragraph text-sm text-charcoal font-medium">Free US Shipping</span>
                  </div>
                  <span className="font-paragraph text-xs text-charcoal/60 ml-7">Free curbside freight (contiguous US). White-glove available.</span>
                </div>
                <div className="flex items-center gap-2 bg-white/95 px-4 py-3 border border-white/20 shadow-lg">
                  <Shield className="w-5 h-5 text-gold-accent" />
                  <span className="font-paragraph text-sm text-charcoal font-medium">2-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 bg-white/95 px-4 py-3 border border-white/20 shadow-lg">
                  <Award className="w-5 h-5 text-gold-accent" />
                  <span className="font-paragraph text-sm text-charcoal font-medium">Expert Support</span>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 1, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mb-12"
              >
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link to="/contact">
                    <Button 
                      size="lg" 
                      className="bg-gold-accent text-white hover:bg-gold-accent/90 rounded-none px-12 py-8 text-xl font-semibold tracking-wide transition-all duration-500 shadow-2xl hover:shadow-gold-accent/50 hover:scale-105"
                    >
                      Request a Quote
                    </Button>
                  </Link>
                  <Link to="/store">
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-2 border-white/80 bg-transparent text-white hover:bg-white hover:text-charcoal hover:border-white rounded-none px-10 py-8 text-lg tracking-wide transition-all duration-500"
                    >
                      Browse Devices
                    </Button>
                  </Link>
                </div>
                
                {/* FDA-Cleared Link */}
                <div className="mb-6">
                  <Link to="/store" className="inline-flex items-center gap-2 text-white/90 hover:text-gold-accent transition-colors text-sm font-paragraph">
                    <span>View FDA-cleared devices</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                {/* What happens next */}
                <div className="bg-white/95 p-6 border border-white/20 shadow-lg max-w-2xl">
                  <h4 className="font-paragraph text-xs font-semibold tracking-[0.2em] uppercase text-gold-accent mb-3">
                    What Happens Next?
                  </h4>
                  <ul className="space-y-2 font-paragraph text-sm text-charcoal/80">
                    <li className="flex items-start gap-2">
                      <span className="text-gold-accent mt-1">•</span>
                      <span>Get a personalized quote in 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-accent mt-1">•</span>
                      <span>We'll recommend the best configuration for your services and budget</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-accent mt-1">•</span>
                      <span>No obligation—just expert guidance tailored to your practice</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Purchase Confidence - Trust Stats */}
              <motion.div
                initial={{ opacity: 1, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/95 p-8 border border-white/20 shadow-lg"
              >
                <h3 className="font-paragraph text-xs font-medium tracking-[0.2em] uppercase text-charcoal/60 mb-6 text-center">
                  Purchase Confidence
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-heading text-gold-accent mb-1">Professional</div>
                    <p className="font-paragraph text-xs md:text-sm text-charcoal/70">Equipment</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-heading text-gold-accent mb-1">2-Year</div>
                    <p className="font-paragraph text-xs md:text-sm text-charcoal/70">Warranty Coverage</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-heading text-gold-accent mb-1">Support</div>
                    <p className="font-paragraph text-xs md:text-sm text-charcoal/70">Mon-Fri 8AM-8PM EST</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-heading text-gold-accent mb-1">30-Day</div>
                    <p className="font-paragraph text-xs md:text-sm text-charcoal/70">Evaluation Period*</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 1 }}
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
      {/* --- SHOP BY CATEGORY (Moved Higher for Better Navigation) --- */}
      <section className="w-full bg-secondary/20 py-24 overflow-hidden">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <SectionLabel>Curated Collections</SectionLabel>
              <h2 className="font-heading text-4xl md:text-5xl text-charcoal">Shop by Category</h2>
              <p className="font-paragraph text-charcoal/60 mt-4 max-w-2xl">
                Browse our specialized equipment collections designed for medical spas and wellness clinics
              </p>
            </div>
            <Link to="/store">
              <Button variant="outline" className="hidden md:flex border-charcoal/20 hover:bg-charcoal hover:text-white rounded-none px-8 py-6">
                View All Products
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 1, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group flex flex-col h-full"
              >
                <Link to={`/store/${category.slug}`} className="block w-full h-full flex flex-col">
                  <div className="w-full flex flex-col h-full relative overflow-hidden bg-white border border-charcoal/10 hover:border-gold-accent/30 transition-all duration-300">
                    <div className="relative w-full h-64 overflow-hidden bg-background">
                      <Image
                        src={category.image}
                        alt={category.name}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white p-8 border-t border-charcoal/10 flex flex-col justify-between">
                      <div>
                        <h3 className="font-heading text-2xl text-charcoal mb-2 group-hover:text-gold-accent transition-colors">
                          {category.name}
                        </h3>
                        <p className="font-paragraph text-charcoal/60 text-sm leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                      <div className="mt-4 inline-flex items-center text-gold-accent font-paragraph text-sm font-medium group-hover:translate-x-1 transition-transform">
                        Explore →
                      </div>
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
      {/* --- BEST SELLERS STRIP --- */}
      <section className="w-full bg-white py-16 border-t border-charcoal/5">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal">Best Sellers</h2>
            <Link to="/store">
              <Button 
                variant="outline" 
                className="border-2 border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-white hover:border-charcoal rounded-none px-6 py-3 font-paragraph font-medium tracking-wide transition-all duration-300 group"
              >
                View All Best Sellers <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                name: 'CryoSlim Pro Body Contouring',
                benefit: 'Non-invasive fat reduction with proven results',
                price: 'Financing from $450/mo',
                image: 'https://static.wixstatic.com/media/5ea123_bf1c3584d2f242699cd8041723f08cab~mv2.jpg',
                shipsIn: '2-3 weeks'
              },
              {
                name: 'HydraGlow Facial System',
                benefit: 'Multi-step facial treatment for all skin types',
                price: 'Financing from $325/mo',
                image: 'https://static.wixstatic.com/media/5ea123_aef9c139900d412f9e8c95ae14db1a49~mv2.jpg',
                shipsIn: '2-3 weeks'
              },
              {
                name: 'LaserTech Hair Removal Unit',
                benefit: 'Professional-grade diode laser technology',
                price: 'Financing from $550/mo',
                image: 'https://static.wixstatic.com/media/5ea123_d173738a6fbc4939af96ba2d3b72422b~mv2.jpg',
                shipsIn: '3-4 weeks'
              },
              {
                name: 'RF Skin Tightening Device',
                benefit: 'Radio frequency for collagen stimulation',
                price: 'Financing from $375/mo',
                image: 'https://static.wixstatic.com/media/5ea123_25c7dac49b4d4645b96b30ad7f32ce25~mv2.png',
                shipsIn: '2-3 weeks'
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to="/store" className="block">
                  <div className="relative overflow-hidden bg-background mb-3 aspect-square">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-gold-accent text-white px-2 py-1 text-xs font-paragraph tracking-wide">
                      BEST SELLER
                    </div>
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300 flex items-center justify-center gap-3">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-charcoal px-6 py-3 font-paragraph text-sm tracking-wide">
                        Quick View
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1 mb-3">
                    <div className="flex items-center gap-2 text-xs font-paragraph text-charcoal/70">
                      <span className="inline-block w-1.5 h-1.5 bg-gold-accent rounded-full"></span>
                      Ships in {product.shipsIn}
                    </div>
                  </div>
                  <h3 className="font-heading text-lg text-charcoal mb-1 group-hover:text-[#B8941F] transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-paragraph text-sm text-charcoal/60 mb-3">
                    {product.benefit}
                  </p>
                  <div className="font-heading text-base text-charcoal">
                    {product.price}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
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
                  <span className="text-[#B8941F] italic">Every Detail</span>
                </h2>
                <p className="text-charcoal/60 text-lg leading-relaxed mb-12 max-w-sm">
                  We bridge the gap between medical-grade performance and aesthetic luxury, ensuring your clinic operates at the highest standard.
                </p>
                <Link to="/about">
                  <Button variant="link" className="p-0 text-charcoal hover:text-[#B8941F] transition-colors text-lg group">
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
                    initial={{ opacity: 1, y: 40 }}
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
                    
                    <h3 className="font-heading text-3xl text-charcoal mb-4 relative z-10 group-hover:text-[#B8941F] transition-colors">
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
      {/* --- FINANCING BANNER (Visual Break) --- */}
      <section className="w-full bg-charcoal text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <Image 
             src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1200&h=667&fit=crop"
             alt="Luxury infrared sauna equipment in professional medical spa setting"
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
      {/* --- VISION & MARKET OPPORTUNITY SECTION --- */}
      <section className="w-full bg-white py-32 border-t border-charcoal/5">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">

        </div>
      </section>
      {/* --- SUPPLIER PARTNERS SECTION --- */}
      <section className="w-full bg-secondary/10 py-32 border-t border-charcoal/5">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16">
            <div>
              <SectionLabel>Strategic Partnerships</SectionLabel>
              <h2 className="font-heading text-5xl md:text-6xl text-charcoal mb-6">Our Supplier Partners</h2>
              <p className="font-paragraph text-charcoal/60 text-lg max-w-2xl leading-relaxed">
                We partner with leading manufacturers and distributors worldwide to bring you premium equipment and exceptional service.
              </p>
            </div>
            <Link to="/suppliers">
              <Button variant="outline" className="hidden lg:flex border-charcoal/20 hover:bg-charcoal hover:text-white rounded-none px-8 py-6 mt-8 lg:mt-0">
                Explore Partnership Opportunities
              </Button>
            </Link>
          </div>

          {isLoadingSuppliers ? (
            <div className="h-96 flex items-center justify-center text-charcoal/30">Loading supplier information...</div>
          ) : suppliers.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              {suppliers.map((supplier, index) => (
                <motion.div
                  key={supplier._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-charcoal/10 hover:border-gold-accent/30 rounded-lg overflow-hidden transition-all duration-300 group"
                >
                  {/* Partner Image */}
                  {/* Content */}

                </motion.div>
              ))}
            </motion.div>
          ) : null}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-charcoal to-charcoal/90 text-white rounded-lg p-12 md:p-16 text-center space-y-6"
          >
            <div>
              <h3 className="font-heading text-4xl md:text-5xl mb-4">
                Interested in Becoming a Partner?
              </h3>
              <p className="font-paragraph text-lg text-white/80 max-w-2xl mx-auto">
                We're actively seeking premium manufacturers and distributors to join our network. Explore partnership opportunities and grow your business with us.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/suppliers">
                <Button className="bg-gold-accent text-charcoal hover:bg-gold-accent/90 rounded-none px-10 py-6 text-lg font-semibold transition-all duration-300">
                  Learn About Partnerships
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-charcoal rounded-none px-10 py-6 text-lg font-semibold transition-all duration-300">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>

          <div className="mt-12 lg:hidden flex justify-center">
            <Link to="/suppliers">
              <Button variant="outline" className="border-charcoal/20 hover:bg-charcoal hover:text-white rounded-none px-8 py-6">
                Explore Partnership Opportunities
              </Button>
            </Link>
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
                  <strong>Phone:</strong> 855-LUXE652 or (855) 589-3652
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
                2-year comprehensive warranty on all equipment. 30-day evaluation period available*—return shipping costs apply for freight items. 15% restocking fee applies to returns (waived for defective items or our error). See full terms for coverage details and conditions.
              </p>
              <Link to="/returns" className="text-gold-accent hover:underline font-paragraph">
                View Full Policy →
              </Link>
            </div>

            <div className="bg-background p-8 border border-charcoal/10">
              <h3 className="font-heading text-2xl text-charcoal mb-4">Freight Delivery & Setup</h3>
              <ul className="font-paragraph text-charcoal/70 mb-4 space-y-2 text-sm">
                <li>• Lead time: 2-4 weeks for most equipment</li>
                <li>• Curbside or white-glove delivery available</li>
                <li>• Scheduled appointment delivery</li>
                <li>• Inspect equipment upon arrival</li>
              </ul>
              <Link to="/shipping" className="text-gold-accent hover:underline font-paragraph text-sm">
                View Shipping Details →
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
            <strong>Regulatory Note:</strong> Professional-grade equipment. Select devices are FDA-cleared—see product pages for documentation.
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
                 src="https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=576&h=640&fit=crop"
                 alt="High-End Spa Equipment"
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-charcoal/10"></div>
            </div>
            <div className="w-full md:w-1/2 p-12 relative">
              <button
                onClick={handleClosePopup}
                className="absolute top-6 right-6 text-charcoal/40 hover:text-charcoal transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="font-heading text-4xl text-charcoal mb-4">
                Get Your Free Quote
              </h3>
              <p className="font-paragraph text-charcoal/60 mb-2 text-sm">
                Enter your email to receive a personalized quote and our comprehensive equipment checklist—absolutely free.
              </p>
              <p className="font-paragraph text-charcoal/50 mb-2 text-xs italic">
                Takes ~30 seconds
              </p>
              <p className="font-paragraph text-charcoal/50 mb-8 text-xs">
                Prefer to browse? No problem.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full font-paragraph border-charcoal/20 focus:border-gold-accent rounded-none py-6"
                  />
                  <p className="text-xs text-charcoal/70 mt-2">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-charcoal hover:bg-gold-accent text-white font-paragraph py-6 rounded-none transition-all duration-300"
                >
                  Get My Quote
                </Button>
                <Link to="/store" onClick={handleClosePopup}>
                  <Button 
                    type="button"
                    variant="outline"
                    className="w-full border-2 border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white font-paragraph py-6 rounded-none transition-all duration-300"
                  >
                    Browse Products
                  </Button>
                </Link>
              </form>
              <p className="text-xs text-charcoal/50 mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      )}
      <Footer />
      {/* Sticky CTA Bar */}
      <StickyCTA />
    </div>
  );
}

// --- Sub-components ---

const FAQItem = ({ question, answer, index }: { question?: string; answer?: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 1, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-charcoal/10"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className="font-heading text-xl text-charcoal group-hover:text-[#B8941F] transition-colors">
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
