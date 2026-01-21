import { motion } from 'framer-motion';
import { Truck, Package, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ShippingPage() {
  const shippingOptions = [
    {
      icon: Truck,
      title: 'Standard Shipping',
      time: '5-7 Business Days',
      description: 'Free on orders over $5,000. Reliable delivery to your business address.'
    },
    {
      icon: Package,
      title: 'Express Shipping',
      time: '2-3 Business Days',
      description: 'Expedited delivery for urgent orders. Additional fees apply.'
    },
    {
      icon: MapPin,
      title: 'White Glove Delivery',
      time: 'Scheduled',
      description: 'Professional installation and setup service available for premium equipment.'
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
            Shipping & Delivery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-paragraph text-xl text-foreground/80 max-w-4xl mx-auto"
          >
            Fast, reliable shipping to get your equipment to you safely and on time
          </motion.p>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="w-full bg-white py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-5xl text-charcoal text-center mb-16"
          >
            Shipping Options
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shippingOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <option.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-charcoal mb-2">
                  {option.title}
                </h3>
                <p className="font-paragraph text-lg text-primary mb-4">
                  {option.time}
                </p>
                <p className="font-paragraph text-base text-foreground/70">
                  {option.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Policy Details */}
      <section className="w-full bg-background py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl text-charcoal mb-6">
                Shipping Policy
              </h2>
              <div className="space-y-6 font-paragraph text-lg text-foreground/80">
                <p>
                  At LuxeSpa Pro, we understand that timely delivery of your equipment is crucial to your business operations. We work with trusted shipping partners to ensure your order arrives safely and on schedule.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-3xl text-charcoal mb-4">
                Processing Time
              </h3>
              <p className="font-paragraph text-lg text-foreground/80">
                Orders are typically processed within 1-2 business days. You will receive a confirmation email with tracking information once your order ships. Custom or special order items may require additional processing time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-3xl text-charcoal mb-4">
                Delivery Areas
              </h3>
              <p className="font-paragraph text-lg text-foreground/80 mb-4">
                We ship to all 50 US states and select international locations. Shipping costs and delivery times vary by destination and equipment size. International orders may be subject to customs fees and import duties.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-3xl text-charcoal mb-4">
                Tracking Your Order
              </h3>
              <p className="font-paragraph text-lg text-foreground/80">
                Once your order ships, you'll receive a tracking number via email. You can use this number to monitor your shipment's progress and estimated delivery date. For any shipping questions or concerns, our customer service team is here to help.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-3xl text-charcoal mb-4">
                Inspection Upon Delivery
              </h3>
              <p className="font-paragraph text-lg text-foreground/80">
                Please inspect your equipment immediately upon delivery. If you notice any damage or missing items, document it with photos and contact us within 48 hours. We will work with you and the carrier to resolve any issues promptly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-3xl text-charcoal mb-4">
                Installation Services
              </h3>
              <p className="font-paragraph text-lg text-foreground/80">
                Professional installation and setup services are available for most equipment. Our certified technicians can ensure your equipment is properly installed and calibrated. Contact us for pricing and availability in your area.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full bg-primary py-20">
        <div className="max-w-[100rem] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <Clock className="w-12 h-12 text-primary-foreground" />
            <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground">
              Questions About Shipping?
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-paragraph text-xl text-primary-foreground/90 max-w-3xl mx-auto"
          >
            Our team is here to help with any shipping or delivery questions
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
