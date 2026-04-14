import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Mail, MapPin, TrendingUp, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SuppliersPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-charcoal text-white py-20 md:py-32">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="font-heading text-5xl md:text-7xl leading-tight">
              For Suppliers
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-secondary max-w-2xl">
              Join our network of authorized distributors and grow with Luxe Spa Equipment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-20 md:py-32 bg-white">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          {/* Opportunity Overview */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 gap-12 mb-20"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="font-heading text-4xl md:text-5xl text-charcoal">
                We're Actively Seeking Authorized Distributors
              </h2>
              <p className="font-paragraph text-lg text-secondary-foreground leading-relaxed">
                Luxe Spa Equipment is expanding its distribution network and looking for partners who share our commitment to quality and customer excellence. If you're interested in becoming an authorized distributor, we'd love to hear from you.
              </p>
              <div className="pt-4">
                <a
                  href="mailto:info@luxespaequipment.com"
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-paragraph font-semibold transition-colors"
                >
                  <Mail size={20} />
                  Get in Touch
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-secondary/30 rounded-lg p-8 space-y-6"
            >
              <div className="space-y-4">
                <h3 className="font-heading text-2xl text-charcoal">Business Stage</h3>
                <p className="font-paragraph text-secondary-foreground">
                  <span className="font-semibold">Launched 2024, growing rapidly</span>
                </p>
                <p className="font-paragraph text-sm text-secondary-foreground">
                  We're in an exciting growth phase with strong market demand and expanding product lines. This is an ideal time to join our distribution network.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Key Information Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {/* Target Volume */}
            <motion.div
              variants={itemVariants}
              className="border border-secondary rounded-lg p-8 space-y-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-primary" size={28} />
                <h3 className="font-heading text-2xl text-charcoal">Target Volume</h3>
              </div>
              <p className="font-paragraph text-secondary-foreground">
                We're looking for distributors capable of handling:
              </p>
              <ul className="font-paragraph text-secondary-foreground space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Minimum annual orders of 50+ units</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Scalable growth potential</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Dedicated sales support</span>
                </li>
              </ul>
            </motion.div>

            {/* Geographic Focus */}
            <motion.div
              variants={itemVariants}
              className="border border-secondary rounded-lg p-8 space-y-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-primary" size={28} />
                <h3 className="font-heading text-2xl text-charcoal">Geographic Focus</h3>
              </div>
              <p className="font-paragraph text-secondary-foreground">
                We're currently prioritizing:
              </p>
              <ul className="font-paragraph text-secondary-foreground space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>North America (US & Canada)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Western Europe</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Strategic international markets</span>
                </li>
              </ul>
            </motion.div>

            {/* How to Apply */}
            <motion.div
              variants={itemVariants}
              className="border border-secondary rounded-lg p-8 space-y-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-primary" size={28} />
                <h3 className="font-heading text-2xl text-charcoal">How to Apply</h3>
              </div>
              <p className="font-paragraph text-secondary-foreground text-sm">
                Ready to become a partner? Here's what we need:
              </p>
              <ol className="font-paragraph text-secondary-foreground space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">1.</span>
                  <span>Company background & experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">2.</span>
                  <span>Target market & sales strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">3.</span>
                  <span>Distribution capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">4.</span>
                  <span>References from current partners</span>
                </li>
              </ol>
            </motion.div>
          </motion.div>

          {/* Partnership Benefits */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="bg-secondary/20 rounded-lg p-12 mb-20"
          >
            <motion.h2 variants={itemVariants} className="font-heading text-4xl text-charcoal mb-12">
              Partnership Benefits
            </motion.h2>
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-8"
            >
              {[
                {
                  title: 'Competitive Margins',
                  description: 'Industry-leading distributor margins with volume incentives',
                },
                {
                  title: 'Marketing Support',
                  description: 'Co-marketing materials, training, and promotional support',
                },
                {
                  title: 'Dedicated Account Manager',
                  description: 'Personal support for your business growth and success',
                },
                {
                  title: 'Priority Access',
                  description: 'Early access to new products and exclusive offerings',
                },
                {
                  title: 'Training & Resources',
                  description: 'Comprehensive product training and sales resources',
                },
                {
                  title: 'Flexible Terms',
                  description: 'Customized payment and delivery terms for qualified partners',
                },
              ].map((benefit, index) => (
                <motion.div key={index} variants={itemVariants} className="space-y-3">
                  <h3 className="font-heading text-xl text-charcoal">{benefit.title}</h3>
                  <p className="font-paragraph text-secondary-foreground">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="font-heading text-4xl md:text-5xl text-charcoal">
                Ready to Partner With Us?
              </h2>
              <p className="font-paragraph text-lg text-secondary-foreground max-w-2xl mx-auto">
                Contact our partnership team to discuss opportunities and get started today.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="mailto:info@luxespaequipment.com"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-paragraph font-semibold transition-colors"
              >
                <Mail size={20} />
                Email Us
              </a>
              <a
                href="/"
                className="inline-flex items-center gap-2 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-8 py-4 rounded-lg font-paragraph font-semibold transition-colors"
              >
                Back to Home
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8 border-t border-secondary">
              <p className="font-paragraph text-secondary-foreground">
                Questions? Reach out to us at{' '}
                <a
                  href="mailto:info@luxespaequipment.com"
                  className="text-primary font-semibold hover:underline"
                >
                  info@luxespaequipment.com
                </a>
              </p>
            </motion.div>
          </motion.section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
