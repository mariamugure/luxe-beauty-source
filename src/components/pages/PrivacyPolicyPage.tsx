import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="w-full max-w-[100rem] mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <h1 className="font-heading text-5xl md:text-6xl text-charcoal mb-2">
            Privacy Policy
          </h1>
          <p className="font-paragraph text-lg text-secondary-foreground mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          {/* Introduction */}
          <section className="mb-12">
            <p className="font-paragraph text-base text-secondary-foreground leading-relaxed mb-6">
              At Luxe Spa Equipment, we are committed to protecting your privacy and ensuring you have a positive experience on our website and when using our services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services, including our SMS messaging program.
            </p>
          </section>

          {/* Data Sharing Section */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-charcoal mb-6">
              Data Sharing
            </h2>
            <div className="space-y-4">
              <p className="font-paragraph text-base text-secondary-foreground leading-relaxed">
                • Customer data is not shared with 3rd parties for promotional or marketing purposes.
              </p>
              <p className="font-paragraph text-base text-secondary-foreground leading-relaxed">
                • Mobile opt-in and consent are never shared with anyone for any purpose. Any information sharing that may be mentioned elsewhere in this policy excludes mobile opt-in data.
              </p>
            </div>
          </section>

          {/* SMS Terms Section */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-charcoal mb-6">
              Luxe Spa Equipment Messaging Terms and Conditions
            </h2>
            
            <div className="space-y-6">
              {/* Term 1 */}
              <div>
                <h3 className="font-heading text-xl text-charcoal mb-3">
                  1. Messaging Program Overview
                </h3>
                <p className="font-paragraph text-base text-secondary-foreground leading-relaxed">
                  The messaging program consists of general conversational messaging to answer questions and provide support to customers, promotional offers or discounts, any promotion of your products/services.
                </p>
              </div>

              {/* Term 2 */}
              <div>
                <h3 className="font-heading text-xl text-charcoal mb-3">
                  2. Cancellation of SMS Service
                </h3>
                <p className="font-paragraph text-base text-secondary-foreground leading-relaxed">
                  You can cancel the SMS service at any time. Just text 'STOP' to the phone number from which you received messages. After you send the SMS message 'STOP' to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again.
                </p>
              </div>

              {/* Term 3 */}
              <div>
                <h3 className="font-heading text-xl text-charcoal mb-3">
                  3. Help and Support
                </h3>
                <p className="font-paragraph text-base text-secondary-foreground leading-relaxed">
                  If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at <a href="mailto:mariambugua@luxespaequipment.com" className="text-primary hover:text-gold-accent transition-colors">mariambugua@luxespaequipment.com</a>.
                </p>
              </div>

              {/* Term 4 */}
              <div>
                <h3 className="font-heading text-xl text-charcoal mb-3">
                  4. Carrier Liability
                </h3>
                <p className="font-paragraph text-base text-secondary-foreground leading-relaxed">
                  Carriers are not liable for delayed or undelivered messages.
                </p>
              </div>

              {/* Term 5 */}
              <div>
                <h3 className="font-heading text-xl text-charcoal mb-3">
                  5. Message and Data Rates
                </h3>
                <p className="font-paragraph text-base text-secondary-foreground leading-relaxed">
                  As always, message and data rates may apply for any messages sent to you from us and to us from you. Message frequency will vary based on communication needs. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.
                </p>
              </div>

              {/* Term 6 */}
              <div>
                <h3 className="font-heading text-xl text-charcoal mb-3">
                  6. Privacy Questions
                </h3>
                <p className="font-paragraph text-base text-secondary-foreground leading-relaxed">
                  If you have any questions regarding privacy, please read our privacy policy contained in the rest of this document/page.
                </p>
              </div>
            </div>
          </section>

          {/* General Privacy Practices */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-charcoal mb-6">
              General Privacy Practices
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl text-charcoal mb-3">
                  Information We Collect
                </h3>
                <p className="font-paragraph text-base text-secondary-foreground leading-relaxed">
                  We collect information you provide directly to us, such as when you make a purchase, sign up for our SMS program, contact us for support, or interact with our website. This may include your name, email address, phone number, and payment information.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl text-charcoal mb-3">
                  How We Use Your Information
                </h3>
                <p className="font-paragraph text-base text-secondary-foreground leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services, process transactions, send transactional and promotional communications (including SMS messages if you've opted in), and respond to your inquiries and requests.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl text-charcoal mb-3">
                  Security
                </h3>
                <p className="font-paragraph text-base text-secondary-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl text-charcoal mb-3">
                  Your Rights
                </h3>
                <p className="font-paragraph text-base text-secondary-foreground leading-relaxed">
                  You have the right to access, update, or delete your personal information at any time. You can also opt out of receiving promotional communications from us by following the unsubscribe instructions in those communications or by contacting us directly.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl text-charcoal mb-3">
                  Contact Us
                </h3>
                <p className="font-paragraph text-base text-secondary-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at <a href="mailto:mariambugua@luxespaequipment.com" className="text-primary hover:text-gold-accent transition-colors">mariambugua@luxespaequipment.com</a>.
                </p>
              </div>
            </div>
          </section>

          {/* Policy Changes */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl text-charcoal mb-6">
              Changes to This Privacy Policy
            </h2>
            <p className="font-paragraph text-base text-secondary-foreground leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by updating the "Last updated" date at the top of this page. Your continued use of our website and services following the posting of revised Privacy Policy means that you accept and agree to the changes.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
