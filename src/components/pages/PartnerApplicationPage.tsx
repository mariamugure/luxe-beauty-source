import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function PartnerApplicationPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    distributionExperience: '',
    targetMarkets: '',
    productInterest: '',
    annualVolume: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Send email via contact form
      const emailBody = `
Partner Application Submission

Company Name: ${formData.companyName}
Contact Name: ${formData.contactName}
Email: ${formData.email}
Phone: ${formData.phone}
Country: ${formData.country}

Distribution Experience: ${formData.distributionExperience}
Target Markets: ${formData.targetMarkets}
Product Interest: ${formData.productInterest}
Expected Annual Volume: ${formData.annualVolume}

Additional Message:
${formData.message}
      `;

      // Create mailto link as fallback
      const mailtoLink = `mailto:info@luxespaequipment.com?subject=Partner Application - ${formData.companyName}&body=${encodeURIComponent(emailBody)}`;
      
      // In a real app, you'd send this via an API endpoint
      // For now, we'll show success and provide the mailto link
      window.location.href = mailtoLink;
      
      setSubmitted(true);
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        country: '',
        distributionExperience: '',
        targetMarkets: '',
        productInterest: '',
        annualVolume: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to submit application. Please try again.');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Partner Application
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-secondary max-w-2xl leading-relaxed">
              Join our network of authorized distributors. Complete this application and our partnership team will review your submission within 2-3 business days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="w-full py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Success Message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg flex items-start gap-4"
              >
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-heading text-lg text-green-900 mb-2">Application Submitted!</h3>
                  <p className="font-paragraph text-green-800">
                    Thank you for your interest. Our partnership team will review your application and contact you within 2-3 business days.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-6 bg-red-50 border border-red-200 rounded-lg flex items-start gap-4"
              >
                <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-heading text-lg text-red-900 mb-2">Error</h3>
                  <p className="font-paragraph text-red-800">{error}</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Company Information */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="font-heading text-3xl text-charcoal">Company Information</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-paragraph text-sm font-semibold text-charcoal mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary rounded-lg font-paragraph text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block font-paragraph text-sm font-semibold text-charcoal mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary rounded-lg font-paragraph text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Country of operation"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <h2 className="font-heading text-3xl text-charcoal">Contact Information</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-paragraph text-sm font-semibold text-charcoal mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary rounded-lg font-paragraph text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block font-paragraph text-sm font-semibold text-charcoal mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary rounded-lg font-paragraph text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block font-paragraph text-sm font-semibold text-charcoal mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary rounded-lg font-paragraph text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Distribution Details */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="font-heading text-3xl text-charcoal">Distribution Details</h2>

                <div>
                  <label className="block font-paragraph text-sm font-semibold text-charcoal mb-2">
                    Distribution Experience *
                  </label>
                  <textarea
                    name="distributionExperience"
                    value={formData.distributionExperience}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-secondary rounded-lg font-paragraph text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Describe your experience in distribution, including years in business and relevant markets"
                  />
                </div>

                <div>
                  <label className="block font-paragraph text-sm font-semibold text-charcoal mb-2">
                    Target Markets *
                  </label>
                  <input
                    type="text"
                    name="targetMarkets"
                    value={formData.targetMarkets}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary rounded-lg font-paragraph text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="e.g., Medical spas, wellness clinics, beauty studios"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-paragraph text-sm font-semibold text-charcoal mb-2">
                      Product Interest *
                    </label>
                    <input
                      type="text"
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary rounded-lg font-paragraph text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="e.g., Cryotherapy, laser, hydra-facial"
                    />
                  </div>

                  <div>
                    <label className="block font-paragraph text-sm font-semibold text-charcoal mb-2">
                      Expected Annual Volume *
                    </label>
                    <select
                      name="annualVolume"
                      value={formData.annualVolume}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary rounded-lg font-paragraph text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select volume range</option>
                      <option value="50-100">50-100 units</option>
                      <option value="100-250">100-250 units</option>
                      <option value="250-500">250-500 units</option>
                      <option value="500+">500+ units</option>
                    </select>
                  </div>
                </div>
              </motion.div>

              {/* Additional Information */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                <h2 className="font-heading text-3xl text-charcoal">Additional Information</h2>

                <div>
                  <label className="block font-paragraph text-sm font-semibold text-charcoal mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-secondary rounded-lg font-paragraph text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us more about your business, vision, or any questions you have"
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-4 pt-8"
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-paragraph font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
              </motion.div>

              <p className="font-paragraph text-sm text-secondary-foreground pt-4">
                * Required fields. We typically respond to partnership inquiries within 2-3 business days.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
