import { useState, useEffect } from 'react';
import { Shield, Lock, Eye, FileText, CheckCircle, AlertCircle, Mail, Globe, ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';
import FloatingElement from '../components/FloatingElement';

const PrivacyPolicy = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const PolicySection = ({ title, children, icon: Icon, id }: { title: string, children: React.ReactNode, icon: React.ComponentType<any>, id?: string }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <div className="mb-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          id={id}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-red-600 to-red-700 rounded-xl text-white">
              <Icon className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          </div>
          <ChevronDown className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="px-6 pb-6">
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Privacy Policy - Reelface"
        description="Our privacy policy outlines how we collect, use, and protect your personal information."
      />

      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <FloatingElement delay={0}>
          <div className="absolute top-20 left-10 w-64 h-64 bg-red-100 rounded-full opacity-20 blur-3xl" />
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-200 rounded-full opacity-20 blur-3xl" />
        </FloatingElement>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex p-4 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl mb-6">
                <Shield className="w-16 h-16 text-red-600" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-4">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Effective Date: 15-10-2025
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-red-100 to-red-200 rounded-lg">
                  <FileText className="w-6 h-6 text-red-600" />
                </div>
                Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Reelface ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard the data of Crowd Members, Brands, and website visitors (collectively "users").
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                By using our platform, you agree to the terms outlined in this Privacy Policy.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-6">
                <PolicySection title="1. Information We Collect" icon={Eye} id="information-collect">
                  <div className="pt-4">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1 Personal Information</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Name, email address, phone number, social media handles, payment details, profile picture, and other identifying information
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">1.2 Non-Personal Information</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Device type, browser information, IP address, cookies, location data (with consent), and analytics data
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">1.3 Content & Campaign Data</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Crowd-generated content (photos, videos, captions), engagement metrics (views, likes, shares), and brand campaign participation
                        </p>
                      </div>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="2. How We Use Information" icon={FileText} id="how-we-use">
                  <div className="pt-4">
                    <p className="mb-4 text-gray-800 leading-relaxed">
                      We use your information to:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Facilitate Crowd and Brand participation in campaigns</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Process payments, rewards, or reimbursements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Improve platform features, analytics, and performance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Send updates, promotional content, and campaign notifications</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Ensure platform security and prevent fraud</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Comply with legal obligations</span>
                      </li>
                    </ul>
                  </div>
                </PolicySection>

                <PolicySection title="3. Information Sharing" icon={Lock} id="information-sharing">
                  <div className="pt-4">
                    <p className="mb-4 text-gray-800 leading-relaxed">
                      We may share information with:
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4 py-2">
                        <h4 className="font-semibold text-gray-900 mb-1">Brands</h4>
                        <p className="text-gray-700">Only the content, username, and engagement metrics necessary for campaigns</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4 py-2">
                        <h4 className="font-semibold text-gray-900 mb-1">Service Providers</h4>
                        <p className="text-gray-700">Payment processors, analytics providers, cloud hosting, or customer support providers</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4 py-2">
                        <h4 className="font-semibold text-gray-900 mb-1">Legal Authorities</h4>
                        <p className="text-gray-700">If required by law, regulation, or court order</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4 py-2">
                        <h4 className="font-semibold text-gray-900 mb-1">Business Transfers</h4>
                        <p className="text-gray-700">In case of merger, acquisition, or sale of assets</p>
                      </div>
                    </div>
                    <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 font-semibold">
                        We do NOT sell your personal information to third parties.
                      </p>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="4. Cookies and Tracking" icon={Globe} id="cookies">
                  <div className="pt-4">
                    <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 mb-4">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Reelface uses cookies, pixels, and similar technologies to:
                      </p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-gray-700 flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>Enhance user experience</span>
                        </li>
                        <li className="text-gray-700 flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>Track campaign performance</span>
                        </li>
                        <li className="text-gray-700 flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>Show relevant content and updates</span>
                        </li>
                      </ul>
                    </div>
                    <p className="text-gray-600 text-sm italic">
                      Users may disable cookies via browser settings; however, this may limit some features of the website.
                    </p>
                  </div>
                </PolicySection>

                <PolicySection title="5. Data Security" icon={Shield} id="security">
                  <div className="pt-4">
                    <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100 mb-4">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        We implement industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-green-200">
                          <Lock className="w-5 h-5 text-green-600" />
                          <span className="text-gray-700 font-medium">SSL Encryption</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-green-200">
                          <Shield className="w-5 h-5 text-green-600" />
                          <span className="text-gray-700 font-medium">Secure Servers</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-green-200">
                          <Lock className="w-5 h-5 text-green-600" />
                          <span className="text-gray-700 font-medium">Access Controls</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-green-200">
                          <Shield className="w-5 h-5 text-green-600" />
                          <span className="text-gray-700 font-medium">Regular Audits</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">
                        <strong>Note:</strong> However, no online system is 100% secure, and we cannot guarantee absolute protection.
                      </p>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="6. User Rights" icon={CheckCircle} id="user-rights">
                  <div className="pt-4">
                    <p className="mb-4 text-gray-800 leading-relaxed">
                      You have the right to:
                    </p>
                    <ul className="space-y-2 ml-6 mb-6">
                      <li className="text-gray-700 flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Access your personal information</span>
                      </li>
                      <li className="text-gray-700 flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Correct or update your personal information</span>
                      </li>
                      <li className="text-gray-700 flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Request deletion of your data (subject to legal or contractual obligations)</span>
                      </li>
                      <li className="text-gray-700 flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Opt-out of marketing communications</span>
                      </li>
                    </ul>
                    <p className="text-gray-600 text-sm">
                      To exercise these rights, contact us at: <a href="mailto:thereelface@gmail.com" className="text-red-600 hover:text-red-700 font-medium underline">thereelface@gmail.com</a>
                    </p>
                  </div>
                </PolicySection>

                <PolicySection title="7. Content Ownership & Rights" icon={Lock} id="content-rights">
                  <div className="pt-4">
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        Crowd members retain ownership of the content they create.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        By participating in Reelface campaigns, users grant Reelface a worldwide, royalty-free, non-exclusive license to use, reproduce, display, distribute, and promote their content for marketing, campaigns, or promotional purposes.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Brands may use campaign content only as authorized through Reelface.
                      </p>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="8. Third-Party Links" icon={AlertCircle} id="third-party">
                  <div className="pt-4">
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-r-xl">
                      <p className="text-gray-700 leading-relaxed">
                        Our website may contain links to third-party websites or services. Reelface is not responsible for the privacy practices or content of such third parties.
                      </p>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="9. Children's Privacy" icon={Shield} id="children">
                  <div className="pt-4">
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-red-100 rounded-xl">
                          <AlertCircle className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 text-lg">Age Restriction</h4>
                          <p className="text-gray-700 leading-relaxed mb-3">
                            Reelface does not knowingly collect personal information from children under 18.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            If we discover such information, we will delete it immediately.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="10. Changes to Privacy Policy" icon={FileText} id="changes">
                  <div className="pt-4">
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Effective Date."
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Your continued use of Reelface constitutes acceptance of the updated policy.
                      </p>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="11. Contact Us" icon={Mail} id="contact">
                  <div className="pt-4">
                    <div className="bg-gradient-to-br from-red-50 via-white to-red-50 border border-red-200 rounded-2xl p-8">
                      <div className="text-center mb-6">
                        <div className="inline-flex p-4 bg-red-100 rounded-full mb-4">
                          <Mail className="w-8 h-8 text-red-600" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Get in Touch</h4>
                        <p className="text-gray-700">
                          For questions, complaints, or data requests, contact:
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-xl border border-red-100">
                          <Mail className="w-5 h-5 text-red-600" />
                          <a href="mailto:thereelface@gmail.com" className="text-red-600 hover:text-red-700 font-semibold text-lg">
                            thereelface@gmail.com
                          </a>
                        </div>
                        <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-xl border border-red-100">
                          <Globe className="w-5 h-5 text-red-600" />
                          <a href="https://thereelface.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 font-semibold text-lg">
                            thereelface.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </PolicySection>

              </div>
            </div>
          </div>
        </div>
      </section>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default PrivacyPolicy;
