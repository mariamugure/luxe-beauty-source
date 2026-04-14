import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, MapPin, TrendingUp, FileText, CheckCircle, ArrowRight, Users, Zap, Award, BarChart3, Clock, DollarSign, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';

interface DistributorTestimonial {
  _id: string;
  partnerName?: string;
  partnerTitle?: string;
  company?: string;
  companyWebsite?: string;
  testimonialText?: string;
  partnerImage?: string;
  growthMetric?: string;
}

export default function SuppliersPage() {
  const [testimonials, setTestimonials] = useState<DistributorTestimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const result = await BaseCrudService.getAll<DistributorTestimonial>('distributortestimonials');
        setTestimonials(result.items || []);
      } catch (error) {
        console.error('Error loading testimonials:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTestimonials();
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-charcoal to-charcoal/90 text-white py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-3xl"
          >
            <div className="inline-block bg-primary/20 border border-primary/40 rounded-full px-4 py-2">
              <span className="font-paragraph text-sm text-gold-accent font-semibold">Partnership Opportunity</span>
            </div>
            <h1 className="font-heading text-6xl md:text-8xl leading-tight">
              Sell Your Products With Us
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-secondary max-w-2xl leading-relaxed">
              Partner with Luxe Spa Equipment to expand your market reach. We're actively seeking premium manufacturers to feature in our curated catalog and reach our growing customer base.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#application-process"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-paragraph font-semibold transition-all duration-300 group"
              >
                Start Your Application
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/partner-application"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 rounded-lg font-paragraph font-semibold transition-all duration-300"
              >
                <FileText size={20} />
                Application Form
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Main Content */}
      <section className="w-full py-20 md:py-32 bg-white">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          {/* Why Partner With Us */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="font-heading text-5xl md:text-6xl text-charcoal mb-6">
                    Why Sell Through Luxe Spa Equipment?
                  </h2>
                  <p className="font-paragraph text-lg text-secondary-foreground leading-relaxed">
                    We're a rapidly growing luxury spa equipment retailer with strong market demand, premium positioning, and a dedicated customer base. Manufacturers partner with us to expand their reach and increase sales without managing their own direct-to-consumer channels.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    'Launched 2024 with explosive growth trajectory',
                    'Premium positioning attracts high-value customers',
                    'Strong brand recognition and customer loyalty',
                    'Expanding product lines and market reach',
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                      <span className="font-paragraph text-secondary-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>
          </motion.div>
          {/* Vision & Market Opportunity Section */}
          {/* Key Information Grid */}
          {/* Distributor Success Stories Section */}
          {!isLoading && testimonials.length > 0 && (
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="mb-24"
            >

            </motion.section>
          )}
          {/* Partnership Benefits */}
          {/* Application Process Section */}

          {/* Contact Section */}
          <motion.section
            id="contact-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-charcoal to-charcoal/95 text-white rounded-2xl p-12 md:p-16 text-center space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-5xl md:text-6xl">
                Ready to Partner With Us?
              </h2>
              <p className="font-paragraph text-xl text-secondary max-w-2xl mx-auto">
                Our partnership team is ready to discuss opportunities and answer your questions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <a
                href="mailto:info@luxespaequipment.com"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-paragraph font-semibold transition-all duration-300 group"
              >
                <Mail size={20} />
                Email Us
              </a>
              <a
                href="/"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 rounded-lg font-paragraph font-semibold transition-all duration-300"
              >
                Back to Home
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-8 border-t border-white/20"
            >
              <p className="font-paragraph text-secondary">
                Partnership inquiries: <span className="text-gold-accent font-semibold">info@luxespaequipment.com</span>
              </p>
              <p className="font-paragraph text-sm text-secondary/80 mt-2">
                We typically respond to partnership inquiries within 2-3 business days.
              </p>
            </motion.div>
          </motion.section>
        </div>
      </section>
      <Footer />
    </div>
  );
}
