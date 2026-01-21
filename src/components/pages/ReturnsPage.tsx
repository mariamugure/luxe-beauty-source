import { motion } from 'framer-motion';
import { RotateCcw, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ReturnsPage() {
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
            Returns Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-paragraph text-xl text-foreground/80 max-w-4xl mx-auto"
          >
            Your satisfaction is our priority. Review our return policy and procedures below.
          </motion.p>
        </div>
      </section>

      {/* Return Window */}
      <section className="w-full bg-white py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <RotateCcw className="w-10 h-10 text-primary" />
              </div>
              <h2 className="font-heading text-5xl text-charcoal mb-4">
                30-Day Return Window
              </h2>
              <p className="font-paragraph text-xl text-foreground/80 max-w-2xl mx-auto">
                We offer a 30-day return period from delivery date. Returns must be unused, in original packaging, with all accessories and documentation.
              </p>
            </motion.div>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading text-3xl text-charcoal mb-6">
                  Return Eligibility
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="font-paragraph text-lg text-foreground/80">
                      Items must be in original, unused condition with all original packaging and accessories
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="font-paragraph text-lg text-foreground/80">
                      Equipment must not show signs of installation or use
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="font-paragraph text-lg text-foreground/80">
                      All manuals, warranty cards, and documentation must be included
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="font-paragraph text-lg text-foreground/80">
                      Return must be initiated within 30 days of delivery
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading text-3xl text-charcoal mb-6">
                  Non-Returnable Items
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <p className="font-paragraph text-lg text-foreground/80">
                      Custom or special-order equipment
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <p className="font-paragraph text-lg text-foreground/80">
                      Items that have been used, installed, or show signs of wear
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <p className="font-paragraph text-lg text-foreground/80">
                      Equipment with missing parts or accessories
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <p className="font-paragraph text-lg text-foreground/80">
                      Clearance or final sale items
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading text-3xl text-charcoal mb-6">
                  Return Process
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="font-heading text-xl text-primary-foreground">1</span>
                    </div>
                    <div>
                      <h4 className="font-heading text-xl text-charcoal mb-2">
                        Contact Us
                      </h4>
                      <p className="font-paragraph text-base text-foreground/70">
                        Reach out to our customer service team to initiate your return. Provide your order number and reason for return.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="font-heading text-xl text-primary-foreground">2</span>
                    </div>
                    <div>
                      <h4 className="font-heading text-xl text-charcoal mb-2">
                        Receive Authorization
                      </h4>
                      <p className="font-paragraph text-base text-foreground/70">
                        We'll review your request and provide a Return Authorization (RA) number and shipping instructions.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="font-heading text-xl text-primary-foreground">3</span>
                    </div>
                    <div>
                      <h4 className="font-heading text-xl text-charcoal mb-2">
                        Pack and Ship
                      </h4>
                      <p className="font-paragraph text-base text-foreground/70">
                        Carefully pack the item in its original packaging and ship it back using the provided instructions.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="font-heading text-xl text-primary-foreground">4</span>
                    </div>
                    <div>
                      <h4 className="font-heading text-xl text-charcoal mb-2">
                        Receive Refund
                      </h4>
                      <p className="font-paragraph text-base text-foreground/70">
                        Once we receive and inspect your return, we'll process your refund within 5-7 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading text-3xl text-charcoal mb-6">
                  Warranty Coverage
                </h3>
                <div className="space-y-4 font-paragraph text-lg text-foreground/80">
                  <p>
                    <strong>2-Year Comprehensive Warranty:</strong> All equipment includes a 2-year manufacturer warranty covering defects in materials and workmanship. Warranty service includes parts and labor.
                  </p>
                  <p>
                    <strong>What's Covered:</strong> Manufacturing defects, component failures under normal use, and electrical/mechanical malfunctions.
                  </p>
                  <p>
                    <strong>What's Not Covered:</strong> Damage from misuse, unauthorized modifications, normal wear and tear, or failure to follow maintenance guidelines.
                  </p>
                  <p>
                    <strong>Extended Warranty:</strong> Extended warranty plans available at purchase for up to 5 years of coverage. Contact us for pricing.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading text-3xl text-charcoal mb-6">
                  Refund Information
                </h3>
                <div className="space-y-4 font-paragraph text-lg text-foreground/80">
                  <p>
                    Refunds issued to original payment method within 5-7 business days after we receive and inspect your return.
                  </p>
                  <p>
                    <strong>Restocking Fee:</strong> 15% restocking fee applies to returns (waived for defective items or our error).
                  </p>
                  <p>
                    <strong>Shipping Costs:</strong> Original shipping is non-refundable. Return shipping is customer's responsibility unless return is due to defect or our error. We provide prepaid return labels for defective items.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-secondary p-8 rounded"
              >
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading text-2xl text-charcoal mb-3">
                      Damaged or Defective Items
                    </h4>
                    <p className="font-paragraph text-base text-foreground/80">
                      If you receive damaged or defective equipment, please contact us immediately with photos of the damage. We will arrange for a replacement or full refund at no cost to you, including return shipping.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full bg-primary py-20">
        <div className="max-w-[100rem] mx-auto px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-primary-foreground mb-6"
          >
            Need Help with a Return?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-paragraph text-xl text-primary-foreground/90 max-w-3xl mx-auto"
          >
            Our customer service team is ready to assist you with your return
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
