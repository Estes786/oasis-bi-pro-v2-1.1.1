export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="bg-white rounded-xl shadow-md p-8">
          <p className="text-gray-600 mb-6">
            <strong>Effective Date:</strong> November 15, 2025
            <br />
            <strong>Last Updated:</strong> November 15, 2025
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing and using OASIS BI PRO ("Service"), you accept and agree to be bound by these Terms of Service.
            If you do not agree, do not use the Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-4">2. Service Description</h2>
          <p className="text-gray-700 mb-4">
            OASIS BI PRO is a SaaS Business Intelligence and Analytics Platform that provides:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Real-time analytics dashboards and data visualization</li>
            <li>AI-powered insights, anomaly detection, and forecasting</li>
            <li>Multi-touch attribution and customer journey analytics</li>
            <li>Data integrations with third-party platforms</li>
            <li>Automated reporting and team collaboration features</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-4">3. Account Registration</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>You must provide accurate and complete information</li>
            <li>You are responsible for maintaining account security</li>
            <li>You must be at least 18 years old to use the Service</li>
            <li>One person or entity may not maintain more than one free account</li>
            <li>You must notify us immediately of any unauthorized access</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-4">4. Subscription Plans and Billing</h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">4.1 Plans</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>
              <strong>Starter:</strong> Rp 299,000/month
            </li>
            <li>
              <strong>Professional:</strong> Rp 999,000/month
            </li>
            <li>
              <strong>Enterprise:</strong> Rp 3,999,000/month
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">4.2 Billing</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Subscriptions are billed monthly in advance</li>
            <li>Payments processed via Midtrans payment gateway</li>
            <li>Automatic renewal unless canceled</li>
            <li>Price changes apply from next billing cycle</li>
            <li>Failed payments may result in service suspension</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">4.3 Free Trial</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>14-day free trial available for new customers</li>
            <li>No credit card required for trial</li>
            <li>Full access to plan features during trial</li>
            <li>Auto-converts to paid plan unless canceled</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-4">5. Refund Policy</h2>
          <p className="text-gray-700 mb-4">
            We offer a 14-day money-back guarantee. See our{" "}
            <a href="/legal/refund" className="text-blue-600 hover:underline">
              Refund Policy
            </a>{" "}
            for details.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-4">6. Acceptable Use</h2>
          <p className="text-gray-700 mb-4">You agree NOT to:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Violate any laws or regulations</li>
            <li>Infringe intellectual property rights</li>
            <li>Upload malicious code or viruses</li>
            <li>Attempt to gain unauthorized access</li>
            <li>Interfere with Service operation</li>
            <li>Use for illegal or fraudulent purposes</li>
            <li>Share account credentials</li>
            <li>Reverse engineer or copy the Service</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-4">7. Data Ownership and Usage</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>
              <strong>Your Data:</strong> You retain ownership of all data you upload
            </li>
            <li>
              <strong>Our Usage:</strong> We process data only to provide Service
            </li>
            <li>
              <strong>Anonymized Data:</strong> We may use aggregated data for analytics
            </li>
            <li>
              <strong>Data Export:</strong> You can export your data at any time
            </li>
            <li>
              <strong>Data Deletion:</strong> We delete your data upon account termination (except as required by law)
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-4">8. Intellectual Property</h2>
          <p className="text-gray-700 mb-4">
            All Service content, features, and functionality are owned by OASIS BI PRO. You may not copy, modify, or
            distribute without permission.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-4">9. Service Availability</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>
              <strong>Uptime Target:</strong> 99.9% (Professional), 99.95% (Enterprise)
            </li>
            <li>
              <strong>Maintenance:</strong> Scheduled maintenance with advance notice
            </li>
            <li>
              <strong>No Warranty:</strong> Service provided "as is" without warranty
            </li>
            <li>
              <strong>Downtime:</strong> We are not liable for downtime or data loss
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-4">10. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            To the maximum extent permitted by law, OASIS BI PRO shall not be liable for:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Indirect, incidental, or consequential damages</li>
            <li>Loss of profits, revenue, data, or business opportunities</li>
            <li>Service interruptions or errors</li>
            <li>Third-party actions or content</li>
          </ul>
          <p className="text-gray-700 mb-4">
            <strong>Maximum Liability:</strong> Our total liability is limited to amounts paid by you in the 12 months
            preceding the claim.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-4">11. Indemnification</h2>
          <p className="text-gray-700 mb-4">You agree to indemnify OASIS BI PRO against claims arising from your:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Use of the Service</li>
            <li>Violation of these Terms</li>
            <li>Violation of third-party rights</li>
            <li>Content you upload or share</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-4">12. Termination</h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">12.1 By You</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Cancel anytime via account settings</li>
            <li>Cancellation effective at end of billing period</li>
            <li>No refunds for unused time (except money-back guarantee)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">12.2 By Us</h3>
          <p className="text-gray-700 mb-4">We may suspend or terminate your account for:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Violation of Terms</li>
            <li>Non-payment</li>
            <li>Illegal activity</li>
            <li>Abuse of Service</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-4">13. Changes to Terms</h2>
          <p className="text-gray-700 mb-4">
            We may modify these Terms at any time. Material changes will be notified via:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Email to registered address</li>
            <li>Prominent notice on platform</li>
            <li>30-day advance notice for significant changes</li>
          </ul>
          <p className="text-gray-700 mb-4">Continued use after changes constitutes acceptance of new Terms.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-4">14. Governing Law</h2>
          <p className="text-gray-700 mb-4">
            These Terms are governed by the laws of Indonesia. Disputes will be resolved through:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Good faith negotiation</li>
            <li>Mediation in Jakarta, Indonesia</li>
            <li>Arbitration under Indonesian law</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-4">15. Contact</h2>
          <p className="text-gray-700 mb-4">For questions about these Terms:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>
              <strong>Email:</strong> legal@oasisbipro.com
            </li>
            <li>
              <strong>Support:</strong> support@oasisbipro.com
            </li>
            <li>
              <strong>WhatsApp:</strong> +62 857-1265-8316
            </li>
          </ul>

          <p className="mt-8 pt-8 border-t border-gray-200 text-gray-600">
            <strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and OASIS BI PRO.
          </p>
        </div>
      </div>
    </div>
  )
}
