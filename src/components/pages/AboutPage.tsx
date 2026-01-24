import { motion } from 'framer-motion';
import { Award, Users, Globe, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We source only the finest professional-grade equipment that meets the highest industry standards.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your success is our priority. We provide exceptional support and guidance every step of the way.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving professionals worldwide with fast, reliable shipping and comprehensive warranties.'
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description: 'We are passionate about helping beauty professionals elevate their practice and client experience.'
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
            About Luxe Spa Equipment
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-paragraph text-xl text-foreground/80 max-w-4xl mx-auto"
          >
            Empowering beauty professionals with premium equipment and unwavering support
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full bg-white py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-5xl text-charcoal mb-8"
            >
              Our Story
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 font-paragraph text-lg text-foreground/80"
            >
              <p>
                Luxe Spa Equipment was founded with a singular vision: to provide beauty and spa professionals with access to the world's finest equipment, backed by exceptional service and support.
              </p>
              <p>
                We understand that your equipment is more than just tools—it's an investment in your business, your reputation, and your clients' experience. That's why we've curated a collection of premium, professional-grade devices that deliver outstanding results and stand the test of time.
              </p>
              <p>
                Our team brings decades of combined experience in the beauty and wellness industry. We don't just sell equipment; we partner with you to ensure you have everything you need to succeed and grow your practice.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-background py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-5xl text-charcoal text-center mb-16"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-charcoal mb-4">
                  {value.title}
                </h3>
                <p className="font-paragraph text-base text-foreground/70">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full bg-primary py-20">
        <div className="max-w-[100rem] mx-auto px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-primary-foreground mb-6"
          >
            Our Mission
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-paragraph text-xl text-primary-foreground/90 max-w-4xl mx-auto"
          >
            To empower beauty and wellness professionals with premium equipment, expert guidance, and exceptional support, enabling them to deliver transformative experiences and build thriving practices.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
