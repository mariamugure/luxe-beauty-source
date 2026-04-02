import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="w-full max-w-[100rem] mx-auto px-4 py-16 md:py-24">
        {/* Page Title */}
        <div className="mb-12 md:mb-16">
          <h1 className="font-heading text-5xl md:text-6xl text-charcoal mb-4">
            Privacy Policy
          </h1>
          <p className="font-paragraph text-lg text-secondary-foreground">
            Last Updated: April 2, 2026
          </p>
        </div>

        {/* General Privacy Policy Introduction */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
            General Privacy Policy
          </h2>
          <div className="font-paragraph text-base md:text-lg text-secondary-foreground space-y-4">
            <p>
              At Luxe Spa Equipment, we are committed to protecting your privacy and ensuring you have a positive experience on our website and when using our services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and interact with our business communications and messaging programs.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our services. By accessing and using our services, you acknowledge that you have read, understood, and agree to be bound by all the provisions of this Privacy Policy.
            </p>
          </div>
        </section>

        {/* Information We Collect */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
            Information We Collect
          </h2>
          <div className="font-paragraph text-base md:text-lg text-secondary-foreground space-y-4">
            <p>
              We collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Register for our services or create an account</li>
              <li>Subscribe to our messaging program</li>
              <li>Make a purchase or request information</li>
              <li>Contact us with inquiries or feedback</li>
              <li>Opt-in to receive SMS communications</li>
            </ul>
            <p>
              The information we collect may include your name, email address, phone number, mailing address, and other contact information necessary to provide you with our services and communications.
            </p>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
            How We Use Your Information
          </h2>
          <div className="font-paragraph text-base md:text-lg text-secondary-foreground space-y-4">
            <p>
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>To provide and maintain our services</li>
              <li>To send business communications, appointment reminders, and customer service messages</li>
              <li>To process transactions and send related information</li>
              <li>To respond to your inquiries and requests</li>
              <li>To improve our services and customer experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>
        </section>

        {/* Data Sharing */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
            Data Sharing
          </h2>
          <div className="font-paragraph text-base md:text-lg text-secondary-foreground space-y-4">
            <p className="font-semibold text-charcoal">
              Your Privacy is Our Priority
            </p>
            <p>
              We are committed to protecting your personal information. <span className="font-semibold">Customer data is not shared with third parties for marketing purposes.</span> Your information is used exclusively to provide you with the services you have requested and to communicate with you about your account and transactions.
            </p>
            <p className="font-semibold text-charcoal">
              Mobile Opt-In and Consent
            </p>
            <p>
              <span className="font-semibold">Your mobile opt-in consent and preferences are never shared with anyone.</span> When you opt-in to receive SMS communications from Luxe Spa Equipment, this consent is stored securely and used only by us to deliver the messages you have authorized. We do not sell, trade, or transfer your opt-in information to any third party.
            </p>
          </div>
        </section>

        {/* Messaging Terms and Conditions */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
            Messaging Terms and Conditions
          </h2>
          <div className="font-paragraph text-base md:text-lg text-secondary-foreground space-y-4">
            <p className="font-semibold text-charcoal">
              Program Description
            </p>
            <p>
              The Luxe Spa Equipment messaging program consists of business communications, appointment reminders, and customer service messages. By opting in to receive SMS messages, you agree to receive text messages from Luxe Spa Equipment at the phone number you provided.
            </p>
            
            <p className="font-semibold text-charcoal">
              Opting Out
            </p>
            <p>
              To stop receiving SMS messages from Luxe Spa Equipment, reply to any message with the word <span className="font-semibold">STOP</span>. You will receive a confirmation message, and we will cease sending you SMS messages. Standard message and data rates may apply.
            </p>
            
            <p className="font-semibold text-charcoal">
              Help and Support
            </p>
            <p>
              If you have questions about our messaging program or need assistance, reply to any message with the word <span className="font-semibold">HELP</span>, or contact us directly at <span className="font-semibold">info@luxespaequipment.com</span>.
            </p>
            
            <p className="font-semibold text-charcoal">
              Carrier Liability
            </p>
            <p>
              Message delivery is subject to effective transmission by your wireless carrier. <span className="font-semibold">Carriers are not liable for delayed or undelivered messages.</span> We are not responsible for any delays in message delivery or any messages that are not received.
            </p>
            
            <p className="font-semibold text-charcoal">
              Message and Data Rates
            </p>
            <p>
              <span className="font-semibold">Message and data rates may apply</span> depending on your wireless plan. Please contact your wireless carrier for information about your specific plan and any applicable charges.
            </p>
            
            <p className="font-semibold text-charcoal">
              Privacy Questions
            </p>
            <p>
              For questions regarding your privacy and how your information is handled in connection with our messaging program, please refer to this Privacy Policy. If you have additional questions not addressed here, please contact us at info@luxespaequipment.com.
            </p>
          </div>
        </section>

        {/* Contact Us */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
            Contact Us
          </h2>
          <div className="font-paragraph text-base md:text-lg text-secondary-foreground space-y-4">
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-secondary rounded-lg p-6 mt-6">
              <p className="font-semibold text-charcoal mb-2">Luxe Spa Equipment</p>
              <p className="text-charcoal">
                Email: <a href="mailto:info@luxespaequipment.com" className="text-primary hover:text-gold-accent transition-colors">info@luxespaequipment.com</a>
              </p>
            </div>
            <p className="mt-6">
              We will respond to your inquiry within a reasonable timeframe. Your privacy and satisfaction are important to us.
            </p>
          </div>
        </section>

        {/* Policy Updates */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
            Policy Updates
          </h2>
          <div className="font-paragraph text-base md:text-lg text-secondary-foreground space-y-4">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by updating the "Last Updated" date at the top of this policy. Your continued use of our services following the posting of revised Privacy Policy means that you accept and agree to the changes.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
