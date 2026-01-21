import { motion } from 'framer-motion';
import { CreditCard, Calendar, CheckCircle, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FinancingPage() {
  const benefits = [
    {
      icon: CreditCard,
      title: 'Flexible Payment Plans',
      description: 'Choose from multiple financing options that fit your budget and business needs.'
    },
    {
      icon: Calendar,
      title: 'Extended Terms',
      description: 'Spread payments over 12, 24, or 36 months with competitive interest rates.'
    },
    {
      icon: CheckCircle,
      title: 'Quick Approval',
      description: 'Get approved in minutes with our streamlined application process.'
    },
    {
      icon: DollarSign,
      title: 'No Hidden Fees',
      description: 'Transparent pricing with no surprise charges or hidden costs.'
    }
  ];

  const plans = [
    {
      name: '12-Month Plan',
      rate: '0% APR',
      description: 'Perfect for smaller purchases',
      features: ['No interest for 12 months', 'Minimum purchase $2,000', 'Quick approval process']
    },
    {
      name: '24-Month Plan',
      rate: 'Low APR',
      description: 'Ideal for mid-range equipment',
      features: ['Competitive interest rates', 'Minimum purchase $5,000', 'Flexible payment dates']
    },
    {
      name: '36-Month Plan',
      rate: 'Best Value',
      description: 'For premium equipment packages',
      features: ['Lowest monthly payments', 'Minimum purchase $10,000', 'Dedicated support']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-secondary py-24">
        <div className="max-w-[100rem] mx-auto px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-6xl md:text-7xl text-charcoal mb-8"
          >
            Flexible Financing Options
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-paragraph text-xl text-foreground/80 max-w-4xl mx-auto"
          >
            Invest in your business today with payment plans designed for professionals
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-white py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-5xl text-charcoal text-center mb-16"
          >
            Why Choose Our Financing
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-charcoal mb-4">
                  {benefit.title}
                </h3>
                <p className="font-paragraph text-base text-foreground/70">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="w-full bg-background py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-5xl text-charcoal text-center mb-16"
          >
            Available Plans
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white border-0 p-8 h-full flex flex-col">
                  <div className="text-center mb-6">
                    <h3 className="font-heading text-3xl text-charcoal mb-2">
                      {plan.name}
                    </h3>
                    <p className="font-heading text-2xl text-primary mb-2">
                      {plan.rate}
                    </p>
                    <p className="font-paragraph text-base text-foreground/70">
                      {plan.description}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-paragraph text-base text-foreground/80">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-paragraph py-6 rounded transition-all duration-300"
                    >
                      Apply Now
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full bg-white py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-5xl text-charcoal text-center mb-16"
          >
            How It Works
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: '1', title: 'Apply Online', description: 'Complete a quick application with soft credit check (no impact on your credit score). Takes less than 5 minutes.' },
              { step: '2', title: 'Get Approved', description: 'Receive decision within 24 hours from our financing partners. We work with multiple lenders to find you the best rates.' },
              { step: '3', title: 'Choose Your Terms', description: 'Select from 12, 24, or 36-month payment plans. Review all terms and rates before finalizing your purchase.' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="font-heading text-2xl text-primary-foreground">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="font-paragraph text-base text-foreground/70">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Financing Partners Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto bg-background p-8 border border-charcoal/10"
          >
            <h3 className="font-heading text-2xl text-charcoal mb-4">Financing Partners</h3>
            <p className="font-paragraph text-base text-foreground/70 mb-4">
              We partner with leading business financing providers to offer competitive rates and flexible terms. All financing is subject to credit approval and provided by third-party lenders.
            </p>
            <p className="font-paragraph text-sm text-foreground/60">
              <strong>Important:</strong> Rates, terms, and approval are determined by our financing partners based on creditworthiness and business qualifications. We do not guarantee approval or specific rates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-primary py-20">
        <div className="max-w-[100rem] mx-auto px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-primary-foreground mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-paragraph text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto"
          >
            Contact us today to discuss your financing options
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-paragraph text-lg px-10 py-6 rounded transition-all duration-300"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
