import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';

export function TermsConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading title="Terms & Conditions" className="mb-8" />
        <div className="prose prose-invert max-w-none text-theme-white/70 space-y-8">
          <p className="text-sm">Last Updated: September 2026</p>
          
          <section>
            <h2 className="text-2xl font-bold text-theme-white mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-theme-white mb-4">2. Website Usage</h2>
            <p>
              You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-theme-white mb-4">3. Services</h2>
            <p>
              Ignite Nova Technologies provides digital design and software development services. Specific deliverables, timelines, and costs will be detailed in separate Statements of Work or Project Agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-theme-white mb-4">4. Intellectual Property</h2>
            <p>
              Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-theme-white mb-4">5. Payments</h2>
            <p>
              Payment terms are specific to each client agreement. Generally, we require an upfront deposit before commencing work, with subsequent payments tied to project milestones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-theme-white mb-4">6. Project Changes</h2>
            <p>
              Any changes to the scope of a project after an agreement has been signed must be requested in writing and may incur additional costs and timeline adjustments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-theme-white mb-4">7. User Responsibilities</h2>
            <p>
              Clients are responsible for providing all necessary information, assets, and approvals in a timely manner to ensure project schedules are met.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-theme-white mb-4">8. Limitation of Liability</h2>
            <p>
              Ignite Nova Technologies shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-theme-white mb-4">9. Termination</h2>
            <p>
              We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-theme-white mb-4">10. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of our operating jurisdiction, without regard to its conflict of law provisions.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-theme-white mb-4">11. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at ignitenova.tech@gmail.com.
            </p>
          </section>

          <div className="p-4 bg-theme-white/5 border border-theme-white/10 rounded-lg text-sm mt-8">
            <strong>Note:</strong> This is placeholder text and should be reviewed by legal counsel before the website goes live.
          </div>
        </div>
      </motion.div>
    </div>
  );
}
