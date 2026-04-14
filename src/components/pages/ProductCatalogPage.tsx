import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Globe, Award, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';

interface ProductSpec {
  _id: string;
  productName?: string;
  manufacturer?: string;
  countryOfOrigin?: string;
  certifications?: string;
  specifications?: string;
  downloadUrl?: string;
}

export default function ProductCatalogPage() {
  const [products, setProducts] = useState<ProductSpec[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const result = await BaseCrudService.getAll<ProductSpec>('productspecs');
        setProducts(result.items || []);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-charcoal to-charcoal/90 text-white py-24 md:py-40">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-3xl"
          >
            <h1 className="font-heading text-6xl md:text-8xl leading-tight">
              Product Specifications
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-secondary max-w-2xl leading-relaxed">
              Detailed sourcing information and technical specifications for all our professional-grade spa equipment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full py-20 md:py-32 bg-white">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          {isLoading ? (
            <div className="flex items-center justify-center min-h-96">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : products.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {products.map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-2 border-primary/20 hover:border-primary/50 rounded-xl p-8 md:p-12 transition-all duration-300"
                >
                  {/* Product Header */}
                  <div className="mb-8">
                    <h2 className="font-heading text-4xl text-charcoal mb-2">
                      {product.productName}
                    </h2>
                    <div className="flex flex-wrap gap-4 text-sm">
                      {product.manufacturer && (
                        <div className="flex items-center gap-2 text-secondary-foreground">
                          <span className="font-paragraph font-semibold">Manufacturer:</span>
                          <span className="font-paragraph">{product.manufacturer}</span>
                        </div>
                      )}
                      {product.countryOfOrigin && (
                        <div className="flex items-center gap-2 text-secondary-foreground">
                          <Globe size={16} className="text-primary" />
                          <span className="font-paragraph">{product.countryOfOrigin}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Certifications */}
                    {product.certifications && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <Award className="text-primary" size={20} />
                          </div>
                          <h3 className="font-heading text-lg text-charcoal">Certifications</h3>
                        </div>
                        <p className="font-paragraph text-secondary-foreground leading-relaxed">
                          {product.certifications}
                        </p>
                      </motion.div>
                    )}

                    {/* Specifications */}
                    {product.specifications && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <FileText className="text-primary" size={20} />
                          </div>
                          <h3 className="font-heading text-lg text-charcoal">Specifications</h3>
                        </div>
                        <p className="font-paragraph text-secondary-foreground leading-relaxed whitespace-pre-wrap">
                          {product.specifications}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Download Button */}
                  {product.downloadUrl && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="pt-8 border-t border-primary/10"
                    >
                      <a
                        href={product.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-paragraph font-semibold transition-all duration-300 group"
                      >
                        <Download size={20} />
                        Download Full Specification Sheet
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="font-paragraph text-lg text-secondary-foreground">
                Product specifications coming soon.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
