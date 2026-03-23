import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    // Reset submitted state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@luxespaequipment.com',
      description: 'We typically respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: "855-LUXE652",
      description: 'Monday - Friday, 9am - 6pm EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '113 S Perry Street Suite 206, Lawrenceville, GA 30046',
      description: 'Our showroom location'
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
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-paragraph text-xl text-foreground/80 max-w-4xl mx-auto"
          >
            Have questions? We're here to help you find the perfect equipment for your practice
          </motion.p>
        </div>
      </section>
      {/* Contact Info Cards */}
      <section className="w-full bg-white py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-background border-0 p-8 text-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl text-charcoal mb-3">
                    {info.title}
                  </h3>
                  <p className="font-paragraph text-lg text-foreground mb-2">
                    {info.content}
                  </p>

                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <section className="w-full bg-background py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-5xl text-charcoal mb-4">
                Send Us a Message
              </h2>
              <p className="font-paragraph text-lg text-foreground/70 mb-6">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded text-green-800 text-center font-paragraph"
                >
                  ✓ Thank you! We've received your message and will respond within 24 hours.
                </motion.div>
              )}
              <Card className="bg-white border-0 p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-paragraph text-sm text-charcoal mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full font-paragraph"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-paragraph text-sm text-charcoal mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full font-paragraph"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block font-paragraph text-sm text-charcoal mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full font-paragraph"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block font-paragraph text-sm text-charcoal mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full font-paragraph"
                        placeholder="Equipment inquiry"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-paragraph text-sm text-charcoal mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full font-paragraph resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-paragraph text-lg py-6 rounded transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Business Hours */}
      <section className="w-full bg-primary py-20">
        <div className="max-w-[100rem] mx-auto px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-primary-foreground mb-8"
          >
            Business Hours
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-paragraph text-xl text-primary-foreground/90 space-y-2"
          >
            <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
            <p>Saturday: 10:00 AM - 4:00 PM EST</p>
            <p>Sunday: Closed</p>
          </motion.div>
        </div>
      </section>
      <Footer />
      {/* Sticky CTA Bar */}
      <StickyCTA />
    </div>
  );
}
