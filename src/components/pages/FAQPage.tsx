import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { BaseCrudService } from '@/integrations';
import { FAQs } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FAQPage() {
  const [faqs, setFaqs] = useState<FAQs[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    loadFaqs();
  }, []);

  const loadFaqs = async () => {
    try {
      const result = await BaseCrudService.getAll<FAQs>('faqs');
      setFaqs(result.items);
    } catch (error) {
      console.error('Error loading FAQs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category).filter(Boolean)))];
  
  const filteredFaqs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-paragraph text-xl text-foreground/80 max-w-4xl mx-auto"
          >
            Find answers to common questions about our products, services, and policies
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      {categories.length > 1 && (
        <section className="w-full bg-white py-8 border-b border-secondary">
          <div className="max-w-[100rem] mx-auto px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`font-paragraph text-base px-6 py-3 rounded transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-background text-foreground hover:bg-secondary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs List */}
      <section className="w-full bg-white py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="max-w-4xl mx-auto space-y-4" style={{ minHeight: isLoading ? '600px' : 'auto' }}>
            {isLoading ? null : filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Card className="bg-background border-0 overflow-hidden">
                    <button
                      onClick={() => toggleFaq(faq._id)}
                      className="w-full p-8 flex items-center justify-between text-left hover:bg-white/50 transition-colors"
                    >
                      <h3 className="font-heading text-2xl text-charcoal pr-4">
                        {faq.question}
                      </h3>
                      {expandedId === faq._id ? (
                        <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-primary flex-shrink-0" />
                      )}
                    </button>
                    {expandedId === faq._id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-8 pb-8"
                      >
                        <p className="font-paragraph text-lg text-foreground/80" dangerouslySetInnerHTML={{ __html: faq.answer || '' }} />
                        {faq.category && (
                          <div className="mt-4">
                            <span className="inline-block bg-primary/10 text-primary font-paragraph text-sm px-4 py-2 rounded">
                              {faq.category}
                            </span>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-16">
                <p className="font-paragraph text-xl text-foreground/60">
                  No FAQs found in this category
                </p>
              </div>
            )}
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
            Still Have Questions?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-paragraph text-xl text-primary-foreground/90 max-w-3xl mx-auto"
          >
            Our team is here to help answer any questions you may have
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
