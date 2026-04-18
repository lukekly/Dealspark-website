import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy and Cookie Policy',
  description:
    'DealSpark privacy and cookie policy: how we collect, use, and protect your personal data.',
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="section-label inline-flex mb-8 hover:border-accent/50 transition-colors">
            ← Back to DealSpark
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Privacy and Cookie Policy
          </h1>
          <p className="text-white/40 text-sm">
            Last updated: 1st September 2025
          </p>
        </div>

        <div className="prose-dark">
          <p>
            DealSpark Ltd (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to
            protecting your personal data and respecting your privacy. This
            Privacy and Cookie Policy explains how we collect, use, store, and
            protect information about you when you use our website at
            dealspark.io or engage with our services.
          </p>

          <h2>1. Who We Are</h2>
          <p>
            DealSpark is an Ireland-based B2B lead generation service provider.
            We specialise in generating qualified pipeline for SaaS, tech,
            and professional service companies.
          </p>
          <ul>
            <li><strong>Registered Business Name:</strong> DealSpark Ltd</li>
            <li>
              <strong>Registered Office:</strong> Unit 2, 12A Lower Main Street,
              Lucan, Dublin, K78 X5P8, Ireland
            </li>
            <li>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:support@dealspark.io"
                className="text-accent hover:text-purple-300 transition-colors"
              >
                support@dealspark.io
              </a>
            </li>
          </ul>
          <p>
            For the purposes of GDPR and applicable data protection legislation,
            DealSpark Ltd is the data controller of your personal data.
          </p>

          <h2>2. What We Collect</h2>
          <p>We may collect the following types of personal data:</p>
          <ul>
            <li>
              <strong>Contact details:</strong> name, email address, phone
              number, and job title
            </li>
            <li>
              <strong>Business information:</strong> company name, industry, and
              location
            </li>
            <li>
              <strong>Technical data:</strong> IP address, browser type, and
              pages visited
            </li>
            <li>
              <strong>Communication data:</strong> messages sent via our website
              or email
            </li>
            <li>
              <strong>Publicly available data:</strong> information from LinkedIn
              or other sources relevant to prospecting
            </li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>We use your personal data to:</p>
          <ul>
            <li>Respond to enquiries and deliver our services</li>
            <li>Build targeted prospect lists and outbound campaigns</li>
            <li>Improve our website and marketing</li>
            <li>Send occasional updates if you have opted in</li>
            <li>Comply with legal and contractual obligations</li>
          </ul>
          <p>
            We never sell your personal data. We may share it only with trusted
            service providers who support our operations, or with regulatory
            authorities if required by law.
          </p>

          <h2>4. Legal Basis for Processing (GDPR)</h2>
          <p>
            We process personal data under the following legal bases:
          </p>
          <ul>
            <li>
              <strong>Consent</strong> for marketing emails
            </li>
            <li>
              <strong>Performance of a contract</strong> for providing booked
              meetings and related services
            </li>
            <li>
              <strong>Legitimate interests</strong> for business development and
              outbound prospecting activities
            </li>
            <li>
              <strong>Legal obligations</strong> for record keeping and
              regulatory compliance
            </li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>
            We keep personal data only for as long as is necessary for the
            purpose for which it was collected, or as required by law. When data
            is no longer required, it is securely deleted or anonymised.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            Under GDPR, you have the right to access, correct, delete, or
            restrict the processing of your personal data, and to withdraw
            consent at any time. To exercise any of these rights, please contact
            us at{' '}
            <a
              href="mailto:support@dealspark.io"
              className="text-accent hover:text-purple-300 transition-colors"
            >
              support@dealspark.io
            </a>
            . We will respond within 30 days.
          </p>
          <p>
            You also have the right to lodge a complaint with the Data
            Protection Commission (Ireland) at{' '}
            <a
              href="https://www.dataprotection.ie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-purple-300 transition-colors"
            >
              dataprotection.ie
            </a>
            .
          </p>

          <h2>7. Security</h2>
          <p>
            We take appropriate technical and organisational measures to protect
            personal data against loss, misuse, unauthorised access, disclosure,
            alteration, or destruction. Access to personal data is restricted to
            those who need it to perform their role.
          </p>

          <h2>8. Third-Party Services</h2>
          <p>
            We may use trusted third-party service providers (such as hosting
            infrastructure, CRM tools, and email services) to operate our
            website and business. These providers are bound by data processing
            agreements and may only process your data on our instructions.
          </p>
          <p>
            Where we use service providers outside the European Economic Area
            (EEA), we ensure appropriate safeguards are in place, such as
            Standard Contractual Clauses approved by the European Commission.
          </p>

          <h2>9. Cookie Policy</h2>
          <p>
            Cookies are small text files stored on your device when you visit a
            website. We use cookies to:
          </p>
          <ul>
            <li>Improve website performance and functionality</li>
            <li>Track anonymous visitor behaviour for analytics purposes</li>
            <li>Remember your preferences</li>
          </ul>
          <p>
            You can manage or disable cookies at any time through your browser
            settings. Please note that disabling certain cookies may affect the
            functionality of the website. Non-essential cookies are only set
            with your prior consent, which you can manage via our cookie consent
            banner.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy and Cookie Policy from time to time. We
            will notify you of significant changes by updating the &quot;Last
            updated&quot; date at the top of this page.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests related to this
            policy or your personal data, please contact us:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:support@dealspark.io"
                className="text-accent hover:text-purple-300 transition-colors"
              >
                support@dealspark.io
              </a>
            </li>
            <li>
              <strong>Post:</strong> DealSpark Ltd, Unit 2, 12A Lower Main
              Street, Lucan, Dublin, K78 X5P8, Ireland
            </li>
          </ul>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06]">
          <Link href="/" className="btn-outline text-sm">
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
