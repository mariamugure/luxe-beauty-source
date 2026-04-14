import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, MapPin, TrendingUp, FileText, CheckCircle, ArrowRight, Users, Zap, Award, BarChart3, Clock, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SuppliersPage() {
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
              Become a Partner
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-secondary max-w-2xl leading-relaxed">
              Join our network of authorized distributors and unlock premium margins, dedicated support, and exclusive access to luxury spa equipment.
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
                href="#contact-section"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 rounded-lg font-paragraph font-semibold transition-all duration-300"
              >
                <Mail size={20} />
                Contact Us
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
                    Why Partner With Luxe Spa Equipment?
                  </h2>
                  <p className="font-paragraph text-lg text-secondary-foreground leading-relaxed">
                    We're a rapidly growing luxury spa equipment brand with strong market demand, premium product quality, and a commitment to partner success. This is the ideal time to join our distribution network.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    'Launched 2024 with explosive growth trajectory',
                    'Premium positioning in high-margin market',
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

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { icon: Users, label: 'Growing Network', value: '50+' },
                  { icon: TrendingUp, label: 'YoY Growth', value: '300%' },
                  { icon: Award, label: 'Market Position', value: 'Premium' },
                  { icon: BarChart3, label: 'Margin Range', value: '35-45%' },
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="bg-secondary/20 rounded-lg p-6 text-center space-y-3"
                    >
                      <Icon className="text-primary mx-auto" size={32} />
                      <p className="font-paragraph text-sm text-secondary-foreground">{stat.label}</p>
                      <p className="font-heading text-2xl text-charcoal">{stat.value}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>

          {/* Vision & Market Opportunity Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-24 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-12 md:p-16"
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
                    Vision & Market Opportunity
                  </h2>
                  <p className="font-paragraph text-lg text-secondary-foreground leading-relaxed">
                    The luxury spa and aesthetic equipment market is experiencing unprecedented growth. With increasing demand for non-invasive treatments and wellness solutions, there's never been a better time to enter this high-margin industry.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    'Global market projected to reach $15B+ by 2030',
                    'CAGR of 12-15% across aesthetic and wellness sectors',
                    'Rising consumer spending on self-care and wellness',
                    'Expanding medical spa and clinic networks worldwide',
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <TrendingUp className="text-primary flex-shrink-0 mt-1" size={24} />
                      <span className="font-paragraph text-secondary-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { icon: BarChart3, label: 'Market Size', value: '$15B+' },
                  { icon: TrendingUp, label: 'Annual Growth', value: '12-15%' },
                  { icon: Users, label: 'Industry Expansion', value: 'Rapid' },
                  { icon: Award, label: 'Opportunity', value: 'Prime' },
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="bg-white rounded-lg p-6 text-center space-y-3 border border-primary/10"
                    >
                      <Icon className="text-primary mx-auto" size={32} />
                      <p className="font-paragraph text-sm text-secondary-foreground">{stat.label}</p>
                      <p className="font-heading text-2xl text-charcoal">{stat.value}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.section>

          {/* Key Information Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="font-heading text-5xl text-charcoal mb-12">Partnership Requirements</h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {/* Target Volume */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border-2 border-primary/20 hover:border-primary/50 rounded-xl p-8 space-y-6 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <TrendingUp className="text-primary" size={28} />
                  </div>
                  <h3 className="font-heading text-2xl text-charcoal">Order Volume</h3>
                </div>
                <p className="font-paragraph text-secondary-foreground">
                  We're looking for distributors capable of handling:
                </p>
                <ul className="font-paragraph text-secondary-foreground space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span>Minimum annual orders of 50+ units</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span>Scalable growth potential</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span>Dedicated sales support</span>
                  </li>
                </ul>
              </motion.div>

              {/* Geographic Focus */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="border-2 border-primary/20 hover:border-primary/50 rounded-xl p-8 space-y-6 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="text-primary" size={28} />
                  </div>
                  <h3 className="font-heading text-2xl text-charcoal">Geographic Focus</h3>
                </div>
                <p className="font-paragraph text-secondary-foreground">
                  We're currently prioritizing:
                </p>
                <ul className="font-paragraph text-secondary-foreground space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span>North America (US & Canada)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span>Western Europe</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span>Strategic international markets</span>
                  </li>
                </ul>
              </motion.div>

              {/* How to Apply */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="border-2 border-primary/20 hover:border-primary/50 rounded-xl p-8 space-y-6 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <FileText className="text-primary" size={28} />
                  </div>
                  <h3 className="font-heading text-2xl text-charcoal">Ideal Partner Profile</h3>
                </div>
                <p className="font-paragraph text-secondary-foreground text-sm">
                  We're looking for partners with:
                </p>
                <ul className="font-paragraph text-secondary-foreground space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span>Established distribution network</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span>Luxury market experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span>Strong customer relationships</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Partnership Benefits */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="bg-primary/5 border border-primary/20 rounded-xl p-12 md:p-16 mb-24"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading text-5xl text-charcoal mb-12"
            >
              What You Get as a Partner
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: DollarSign,
                  title: 'Competitive Margins',
                  description: 'Industry-leading distributor margins (35-45%) with volume incentives and tiered pricing',
                },
                {
                  icon: Users,
                  title: 'Dedicated Account Manager',
                  description: 'Personal support for your business growth, strategy, and day-to-day operations',
                },
                {
                  icon: Zap,
                  title: 'Marketing Support',
                  description: 'Co-marketing materials, training, promotional campaigns, and brand resources',
                },
                {
                  icon: Award,
                  title: 'Priority Access',
                  description: 'Early access to new products, exclusive offerings, and limited editions',
                },
                {
                  icon: Clock,
                  title: 'Flexible Terms',
                  description: 'Customized payment and delivery terms tailored to your business needs',
                },
                {
                  icon: BarChart3,
                  title: 'Training & Resources',
                  description: 'Comprehensive product training, sales resources, and market insights',
                },
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <h3 className="font-heading text-xl text-charcoal">{benefit.title}</h3>
                    </div>
                    <p className="font-paragraph text-secondary-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.section>

          {/* Application Process Section */}
          <motion.section
            id="application-process"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="font-heading text-5xl text-charcoal mb-12">How to Apply</h2>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Submit Your Application',
                  description: 'Fill out our partner application form with your company details, experience, and target markets.',
                },
                {
                  step: 2,
                  title: 'Initial Review',
                  description: 'Our partnership team reviews your application and assesses fit with our brand and requirements.',
                },
                {
                  step: 3,
                  title: 'Discovery Call',
                  description: 'Schedule a call with our partnership manager to discuss opportunities, margins, and support.',
                },
                {
                  step: 4,
                  title: 'Agreement & Onboarding',
                  description: 'Finalize partnership terms and begin comprehensive training and onboarding process.',
                },
                {
                  step: 5,
                  title: 'Launch & Support',
                  description: 'Start selling with dedicated account management, marketing support, and ongoing success resources.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-heading text-lg font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow pt-1">
                    <h3 className="font-heading text-xl text-charcoal mb-2">{item.title}</h3>
                    <p className="font-paragraph text-secondary-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
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
