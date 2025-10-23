import { useState, useEffect } from 'react';
import { Shield, Lock, FileText, CheckCircle, AlertCircle, Mail, Globe, ChevronDown, Users, CreditCard, Tag, XCircle, Scale, Gavel } from 'lucide-react';
import SEO from '../components/SEO';
import FloatingElement from '../components/FloatingElement';

const TermsOfService = () => {
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
        title="Terms & Conditions - Reelface"
        description="Our terms and conditions outline the rules and guidelines for using Reelface services and campaigns."
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
                <Scale className="w-16 h-16 text-red-600" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-4">
                Terms & Conditions
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Rules and guidelines for using Reelface services and campaigns
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
                Welcome to Reelface
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to Reelface ("we," "our," or "us"). By accessing or using our website, services, or campaigns, you agree to comply with the following Terms & Conditions.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
                Please read them carefully.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-6">
                <PolicySection title="1. Eligibility" icon={Users} id="eligibility">
                  <div className="pt-4">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">You must be at least 18 years old to use Reelface services.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">By registering as a crowd member or brand, you confirm that you meet this requirement.</span>
                      </li>
                    </ul>
                  </div>
                </PolicySection>

                <PolicySection title="2. Account Registration" icon={Shield} id="registration">
                  <div className="pt-4">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Users must provide accurate, current, and complete information during registration.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">You are responsible for maintaining the confidentiality of your account login and password.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Any activity under your account is your responsibility.</span>
                      </li>
                    </ul>
                  </div>
                </PolicySection>

                <PolicySection title="3. User Conduct" icon={CheckCircle} id="conduct">
                  <div className="pt-4">
                    <p className="mb-4 text-gray-800 leading-relaxed">
                      As a Reelface user, you agree to:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Post genuine content in campaigns, without violating laws or third-party rights.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Not impersonate others, create fake accounts, or manipulate engagement metrics.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Follow instructions provided by Reelface for campaign participation.</span>
                      </li>
                    </ul>
                  </div>
                </PolicySection>

                <PolicySection title="4. Brand Responsibilities" icon={Tag} id="brand-responsibilities">
                  <div className="pt-4">
                    <p className="mb-4 text-gray-800 leading-relaxed">
                      Brands participating in Reelface campaigns must:
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4 py-2">
                        <p className="text-gray-700">Provide accurate, lawful, and non-infringing content for campaigns.</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4 py-2">
                        <p className="text-gray-700">Ensure all promotions comply with local advertising laws and regulations.</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4 py-2">
                        <p className="text-gray-700">Cover any costs for crowd travel, food, or additional perks if the campaign involves in-person visits.</p>
                      </div>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="5. Content Ownership & Rights" icon={Lock} id="content-rights">
                  <div className="pt-4">
                    <div className="space-y-4">
                      <div className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-xl border border-purple-100">
                        <h4 className="font-semibold text-gray-900 mb-2">Content Ownership</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Crowd members retain ownership of the content they create.
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl border border-blue-100">
                        <h4 className="font-semibold text-gray-900 mb-2">License Grant</h4>
                        <p className="text-gray-700 leading-relaxed">
                          By participating, users grant Reelface a worldwide, royalty-free, non-exclusive license to use, display, reproduce, and distribute the content for marketing, campaigns, or promotional purposes.
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-xl border border-green-100">
                        <h4 className="font-semibold text-gray-900 mb-2">Brand Usage</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Brands may only use campaign content as authorized via Reelface.
                        </p>
                      </div>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="6. Payments" icon={CreditCard} id="payments">
                  <div className="pt-4">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Compensation</h4>
                          <p className="text-gray-700">Crowd members are compensated according to the campaign payment terms provided by Reelface.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <FileText className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Processing</h4>
                          <p className="text-gray-700">Payments will be processed after content verification and approval by Reelface.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                        <div className="p-2 bg-red-100 rounded-lg">
                          <AlertCircle className="w-5 h-5 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Withholding Rights</h4>
                          <p className="text-gray-700">Reelface reserves the right to withhold payments for content that violates T&C or is incomplete.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="7. Campaign Rules" icon={FileText} id="campaign-rules">
                  <div className="pt-4">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-gray-700">Reelface reserves the right to approve, reject, or modify campaigns at its discretion.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-gray-700">Campaign timelines, content format, and posting instructions must be followed to qualify for compensation.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-gray-700">Users must tag and credit brands properly as instructed.</span>
                      </li>
                    </ul>
                  </div>
                </PolicySection>

                <PolicySection title="8. Disclaimers & Liability" icon={AlertCircle} id="disclaimers">
                  <div className="pt-4">
                    <div className="space-y-4">
                      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r-xl">
                        <h4 className="font-semibold text-yellow-800 mb-2">Service Disclaimer</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Reelface provides services "as is" and does not guarantee specific results or outcomes from campaigns.
                        </p>
                      </div>
                      <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-r-xl">
                        <h4 className="font-semibold text-orange-800 mb-2">Limitation of Liability</h4>
                        <p className="text-gray-700 leading-relaxed">
                          We are not liable for any indirect, incidental, or consequential damages arising from use of the platform.
                        </p>
                      </div>
                      <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl">
                        <h4 className="font-semibold text-red-800 mb-2">Indemnification</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Users and brands agree to indemnify and hold Reelface harmless from any legal claims or disputes arising from their actions or content.
                        </p>
                      </div>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="9. Termination" icon={XCircle} id="termination">
                  <div className="pt-4">
                    <p className="mb-4 text-gray-800 leading-relaxed">
                      Reelface may suspend or terminate accounts for:
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                        <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Violation of T&C or laws</span>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                        <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Fraudulent or abusive behavior</span>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                        <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Providing false information</span>
                      </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <p className="text-gray-700">
                        <span className="font-semibold">User Termination:</span> Users may terminate their account by contacting Reelface support.
                      </p>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="10. Privacy" icon={Shield} id="privacy">
                  <div className="pt-4">
                    <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-green-100 rounded-xl">
                          <Lock className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 text-lg">Privacy Policy</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Your use of Reelface is subject to our Privacy Policy, which explains how we collect, use, and protect your information.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="11. Governing Law & Jurisdiction" icon={Gavel} id="governing-law">
                  <div className="pt-4">
                    <div className="space-y-4">
                      <div className="bg-gradient-to-br from-indigo-50 to-white p-5 rounded-xl border border-indigo-100">
                        <h4 className="font-semibold text-gray-900 mb-2">Governing Law</h4>
                        <p className="text-gray-700 leading-relaxed">
                          These Terms & Conditions are governed by the laws of India.
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-xl border border-purple-100">
                        <h4 className="font-semibold text-gray-900 mb-2">Jurisdiction</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Any disputes arising from these Terms will be subject to the exclusive jurisdiction of courts in Hyderabad, India.
                        </p>
                      </div>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="12. Changes to Terms" icon={FileText} id="changes">
                  <div className="pt-4">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-gray-700">Reelface may update these T&C at any time.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-gray-700">Updated Terms will be posted on the website with a revised Effective Date.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-gray-700">Continued use of Reelface constitutes acceptance of the updated Terms.</span>
                      </div>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="13. Contact" icon={Mail} id="contact">
                  <div className="pt-4">
                    <div className="bg-gradient-to-br from-red-50 via-white to-red-50 border border-red-200 rounded-2xl p-8">
                      <div className="text-center mb-6">
                        <div className="inline-flex p-4 bg-red-100 rounded-full mb-4">
                          <Mail className="w-8 h-8 text-red-600" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h4>
                        <p className="text-gray-700">
                          For questions regarding these Terms & Conditions:
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

export default TermsOfService;
