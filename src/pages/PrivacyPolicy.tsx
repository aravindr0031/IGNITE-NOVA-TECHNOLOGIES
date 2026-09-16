import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';

export function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading title="Privacy Policy" className="mb-8" />
        <div className="prose prose-invert max-w-none text-theme-white/70 space-y-8">
          <p className="text-sm">Last Updated: September 2026</p>
          
          <section>
            <h2 className="text-2xl font-bold text-theme-white mb-4">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us. This may include your name, email address, phone number, company name, and project details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-theme-white mb-4">2. How We Use Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services. This includes responding to your inquiries, sending technical notices, and providing customer support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-theme-white mb-4">3. Data Protection</h2>
            <p>
              We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-theme-white mb-4">4. Cookies</h2>
            <p>
              Our website uses "cookies" and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-theme-white mb-4">5. Third-Party Services</h2>
            <p>
              We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-theme-white mb-4">6. Data Retention</h2>
            <p>
              We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-theme-white mb-4">7. User Rights</h2>
            <p>
              You have the right to access, update, or delete the information we have on you. If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-theme-white mb-4">8. Contact Information</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at ignitenova.tech@gmail.com.
            </p>
          </section>
          
          <div className="p-4 bg-theme-white/5 border border-theme-white/10 rounded-lg text-sm">
            <strong>Note:</strong> This is placeholder text and should be reviewed by legal counsel before the website goes live.
          </div>
        </div>
      </motion.div>
    </div>
  );
}
