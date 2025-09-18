import SEO from '@/components/SEO';
import { FileText, Scale, AlertCircle, CheckCircle, ArrowUp, ChevronRight, ChevronDown, Shield, Lock } from 'lucide-react';
import FloatingElement from '@/components/FloatingElement';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Policy section component with collapsible content
const PolicySection = ({ title, children, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8 bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div
        className="p-6 flex items-center justify-between cursor-pointer bg-gradient-to-r from-white to-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-cyberpink/15 to-cyberpurple/15 p-3 rounded-full mr-4 shadow-sm">
            <Icon className="h-6 w-6 text-cyberpink" />
          </div>
          <h2 className="text-xl font-extrabold tracking-tight m-0 text-gray-900">{title}</h2>
        </div>
        <ChevronDown className={`h-5 w-5 text-cyberpink transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
      </div>
      <div className={`px-8 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[2000px] pb-8' : 'max-h-0'}`}>
        {children}
      </div>
    </div>
  );
};

const TermsOfService = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll to show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Table of contents items
  const tocItems = [
    { id: "agreement", title: "Agreement to Terms" },
    { id: "intellectual-property", title: "Intellectual Property" },
    { id: "user-representations", title: "User Representations" },
    { id: "prohibited-activities", title: "Prohibited Activities" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "indemnification", title: "Indemnification" },
    { id: "termination", title: "Term and Termination" },
    { id: "changes", title: "Changes to Terms" },
    { id: "contact", title: "Contact Us" }
  ];

  // Scroll to section function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Terms of Service - ReelFace"
        description="Our terms of service outline the rules and guidelines for using our website and services."
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyberpink to-cyberpurple text-white py-24 md:py-32 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyberorange/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyberpurple/20 blur-3xl animate-pulse-slow animation-delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-white/5 blur-xl animate-float"></div>
          <div className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-cyberpink/10 blur-2xl animate-float animation-delay-500"></div>

          {/* Decorative elements */}
          <div className="absolute top-10 left-10 opacity-20">
            <Scale className="h-16 w-16 text-white" />
          </div>
          <div className="absolute bottom-10 right-10 opacity-20">
            <FileText className="h-16 w-16 text-white" />
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FloatingElement animationType="fade" delay={0.2}>
              <h1 className="heading-xl mb-6">Terms of Service</h1>
            </FloatingElement>
            <FloatingElement animationType="fade" delay={0.4}>
              <p className="text-xl text-white/90 mb-8">
                Rules and guidelines for using our website and services
              </p>
            </FloatingElement>
            <FloatingElement animationType="slide-up" delay={0.6}>
              <div className="flex justify-center space-x-6">
                <div className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                  <FileText className="h-7 w-7 animate-pulse-slow" />
                </div>
                <div className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                  <Scale className="h-7 w-7 animate-pulse-slow animation-delay-200" />
                </div>
                <div className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                  <AlertCircle className="h-7 w-7 animate-pulse-slow animation-delay-400" />
                </div>
                <div className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                  <CheckCircle className="h-7 w-7 animate-pulse-slow animation-delay-600" />
                </div>
              </div>
            </FloatingElement>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents Sidebar */}
            <div className="lg:col-span-1">
              <FloatingElement animationType="slide-right" delay={0.3}>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
                  <h3 className="text-lg font-bold mb-4 text-cyberpink">Table of Contents</h3>
                  <ul className="space-y-2">
                    {tocItems.map((item, index) => (
                      <li key={index}>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className="text-gray-700 hover:text-cyberpink flex items-center w-full text-left transition-colors"
                        >
                          <ChevronRight className="h-4 w-4 mr-2 text-cyberpink" />
                          {item.title}
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 p-4 bg-gradient-to-r from-cyberpink/5 to-cyberpurple/5 rounded-lg">
                    <h4 className="font-semibold mb-2 text-cyberpink">Need Legal Assistance?</h4>
                    <p className="text-sm text-gray-600 mb-3">If you have any questions about our terms, please contact our legal team.</p>
                    <Link to="/contact" className="text-sm text-cyberpink hover:underline flex items-center">
                      Contact Us <ChevronRight className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </FloatingElement>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <FloatingElement animationType="fade" delay={0.2}>
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-cyberpink/15 to-cyberpurple/15 p-4 rounded-full mr-5 shadow-sm">
                      <Scale className="h-7 w-7 text-cyberpink" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-1">Terms of Service Overview</h2>
                      <p className="text-gray-600 font-medium">Last Updated: June 1, 2023</p>
                    </div>
                  </div>
                  <p className="text-gray-900 text-lg leading-relaxed font-medium">
                    This document outlines the rules and guidelines for using the ReelFace website and services.
                    By accessing our website, you agree to be bound by these terms.
                  </p>
                </div>
              </FloatingElement>

              {/* Policy Sections */}
              <div className="space-y-6">
                <PolicySection title="Agreement to Terms" icon={CheckCircle} id="agreement">
                  <div id="agreement" className="pt-4">
                    <h3 className="text-lg font-semibold text-cyberpink mb-3">Binding Legal Agreement</h3>
                    <p className="mb-4 text-gray-800 leading-relaxed">
                      Welcome to ReelFace. These Terms of Service ("Terms") govern your access to and use of the ReelFace website, applications, and services (collectively, the "Services"). Please read these Terms carefully.
                    </p>

                    <div className="bg-white shadow-sm rounded-lg p-5 border border-gray-100 mb-6">
                      <h4 className="font-semibold text-cyberpink mb-3">Legal Agreement</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and <span className="font-semibold">ReelFace, Inc.</span> ("Company", "we", "us", or "our"), concerning your access to and use of our website and services.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        By accessing or using our Services, you agree to be bound by these Terms and by our Privacy Policy, which is incorporated herein by reference. If you do not agree with any part of these Terms, you may not access or use our Services.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium text-cyberpink mb-2">Eligibility</h5>
                        <p className="text-gray-700 text-sm">
                          By agreeing to these Terms, you represent and warrant that:
                        </p>
                        <ul className="mt-2 space-y-1 text-sm text-gray-700">
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-cyberpink rounded-full mr-2"></div>
                            <span>You are at least 18 years of age</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-cyberpink rounded-full mr-2"></div>
                            <span>You have the legal capacity to enter into a binding agreement</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-cyberpink rounded-full mr-2"></div>
                            <span>You are not a minor in the jurisdiction in which you reside</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-cyberpink rounded-full mr-2"></div>
                            <span>Your use of the Services does not violate any applicable law or regulation</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 p-5 rounded-lg border-l-4 border-cyberpink mb-6">
                      <div className="flex items-start">
                        <div className="text-3xl mr-4">💬</div>
                        <div>
                          <h4 className="font-semibold mb-2">Acceptance of Terms</h4>
                          <p className="text-gray-700 italic leading-relaxed">
                            "By using our services, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them. If you do not agree with any part of these terms, please do not use our website or services."
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold text-yellow-700 mb-2">Important Notice</h4>
                      <p className="text-yellow-800 text-sm leading-relaxed">
                        These Terms include important provisions that affect your legal rights, including a dispute resolution provision that requires arbitration on an individual basis to resolve disputes rather than jury trials or class actions. Please read these Terms carefully.
                      </p>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="Intellectual Property Rights" icon={Lock} id="intellectual-property">
                  <div id="intellectual-property" className="pt-4">
                    <h3 className="text-lg font-semibold text-cyberpink mb-3">Ownership of Content and Materials</h3>
                    <p className="mb-4 text-gray-800 leading-relaxed">
                      ReelFace values intellectual property rights and is committed to protecting them. This section outlines our ownership rights and your permitted use of our content and materials.
                    </p>

                    <div className="bg-white shadow-sm rounded-lg p-5 border border-gray-100 mb-6">
                      <h4 className="font-semibold text-cyberpink mb-3">Our Proprietary Rights</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Unless otherwise indicated, the ReelFace website, including all of its content and features, is owned and controlled by ReelFace, Inc. or its licensors. All rights not expressly granted herein are reserved.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        The website, its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by ReelFace, Inc., its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                      </p>

                      <div className="bg-gradient-to-r from-cyberpink/5 to-cyberpurple/5 p-4 rounded-lg mb-4">
                        <h5 className="font-medium text-cyberpink mb-2">Protected Elements Include:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                            <div className="bg-cyberpink/10 p-3 rounded-full inline-flex mb-3">
                              <FileText className="h-5 w-5 text-cyberpink" />
                            </div>
                            <h4 className="font-semibold mb-2">Content</h4>
                            <p className="text-sm text-gray-700">All text, articles, blog posts, images, graphics, photographs, videos, audio clips, and other media</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                            <div className="bg-cyberpink/10 p-3 rounded-full inline-flex mb-3">
                              <Lock className="h-5 w-5 text-cyberpink" />
                            </div>
                            <h4 className="font-semibold mb-2">Trademarks</h4>
                            <p className="text-sm text-gray-700">Our name, logo, product names, feature names, slogans, and all related names, logos, product and service names, designs, and slogans</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                            <div className="bg-cyberpink/10 p-3 rounded-full inline-flex mb-3">
                              <Shield className="h-5 w-5 text-cyberpink" />
                            </div>
                            <h4 className="font-semibold mb-2">Software</h4>
                            <p className="text-sm text-gray-700">All software, code, applications, algorithms, databases, functionality, and technical elements</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-cyberpink mb-3">License and Permitted Use</h3>
                    <p className="mb-4 text-gray-800 leading-relaxed">
                      Subject to these Terms of Service, we grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the website and its content for your personal, non-commercial use only.
                    </p>

                    <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100 mb-6">
                      <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 p-4">
                        <h4 className="font-semibold text-cyberpink">Restrictions on Use</h4>
                      </div>
                      <div className="p-5">
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Except as expressly permitted in these Terms of Service, you may not:
                        </p>
                        <div className="space-y-3">
                          {[
                            "Copy, modify, reproduce, republish, distribute, display, or transmit any content from our website",
                            "Sell, rent, lease, license, sublicense, or otherwise commercialize any content from our website",
                            "Scrape, data mine, or otherwise extract data from our website using automated means",
                            "Decompile, disassemble, or reverse engineer any software or other technology used in our website",
                            "Remove, alter, or obscure any copyright, trademark, or other proprietary notices",
                            "Use our content or materials in any way that could damage or disparage our reputation or goodwill"
                          ].map((restriction, index) => (
                            <div key={index} className="flex items-start">
                              <div className="bg-red-100 text-red-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                                <span className="text-xs font-bold">✕</span>
                              </div>
                              <p className="text-gray-700">{restriction}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mb-4">
                      <h4 className="font-semibold text-yellow-700 mb-2">Important Notice</h4>
                      <p className="text-yellow-800 text-sm leading-relaxed">
                        The Content and Marks are provided on the website "AS IS" for your information and personal use only. Any use of the Content or Marks other than as specifically authorized herein, without the prior written permission of ReelFace, is strictly prohibited and will terminate the license granted herein.
                      </p>
                    </div>

                    <p className="text-sm text-gray-600 italic">
                      If you wish to use any of our content or materials for commercial purposes, please contact us at <a href="mailto:legal@ReelFace.com" className="text-cyberpink hover:underline">legal@ReelFace.com</a> to request permission.
                    </p>
                  </div>
                </PolicySection>

                <PolicySection title="User Representations" icon={CheckCircle} id="user-representations">
                  <div id="user-representations" className="pt-4">
                    <p className="mb-4">
                      By using the website, you represent and warrant that:
                    </p>
                    <div className="space-y-3 mb-4">
                      {[
                        "All registration information you submit will be true, accurate, current, and complete",
                        "You will maintain the accuracy of such information and promptly update such registration information as necessary",
                        "You have the legal capacity and you agree to comply with these Terms of Service",
                        "You are not a minor in the jurisdiction in which you reside",
                        "You will not access the website through automated or non-human means",
                        "You will not use the website for any illegal or unauthorized purpose",
                        "Your use of the website will not violate any applicable law or regulation"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start bg-gray-50 p-3 rounded-lg">
                          <div className="bg-gradient-to-r from-cyberpink to-cyberpurple text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="Prohibited Activities" icon={AlertCircle} id="prohibited-activities">
                  <div id="prohibited-activities" className="pt-4">
                    <p className="mb-4">
                      You may not access or use the website for any purpose other than that for which we make the website available. The website may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                    </p>
                    <p className="mb-4">
                      As a user of the website, you agree not to:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      {[
                        "Systematically retrieve data or other content from the website to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us",
                        "Make any unauthorized use of the website, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses",
                        "Use the website to advertise or offer to sell goods and services",
                        "Circumvent, disable, or otherwise interfere with security-related features of the website",
                        "Engage in unauthorized framing of or linking to the website",
                        "Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords",
                        "Make improper use of our support services or submit false reports of abuse or misconduct",
                        "Engage in any automated use of the system, such as using scripts to send comments or messages",
                        "Interfere with, disrupt, or create an undue burden on the website or the networks or services connected to the website",
                        "Attempt to impersonate another user or person or use the username of another user"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="bg-red-100 text-red-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                            <span className="text-xs font-bold">✕</span>
                          </div>
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="Limitation of Liability" icon={Shield} id="liability">
                  <div id="liability" className="pt-4">
                    <p className="mb-4">
                      In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the website, even if we have been advised of the possibility of such damages.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold text-yellow-700 mb-2">Important Notice</h4>
                      <p className="text-yellow-800">
                        Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for certain types of damages. Therefore, some of the above limitations may not apply to you.
                      </p>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="Indemnification" icon={Shield} id="indemnification">
                  <div id="indemnification" className="pt-4">
                    <p className="mb-4">
                      You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of your use of the website, your breach of these Terms of Service, or your violation of any law or the rights of a third party.
                    </p>
                  </div>
                </PolicySection>

                <PolicySection title="Term and Termination" icon={FileText} id="termination">
                  <div id="termination" className="pt-4">
                    <p className="mb-4">
                      These Terms of Service shall remain in full force and effect while you use the website. We may terminate your access to the website, without cause or notice, which may result in the forfeiture and destruction of all information associated with you. All provisions of these Terms of Service which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                    </p>
                  </div>
                </PolicySection>

                <PolicySection title="Changes to Terms" icon={FileText} id="changes">
                  <div id="changes" className="pt-4">
                    <p className="mb-4">
                      We reserve the right, in our sole discretion, to change or modify these terms at any time. If we make changes to these terms, we will provide notice of such changes, such as by sending an email notification, providing notice through the website, or updating the "Last Updated" date at the beginning of these terms. Your continued use of the website following the posting of revised terms means that you accept and agree to the changes.
                    </p>
                  </div>
                </PolicySection>

                <PolicySection title="Contact Us" icon={FileText} id="contact">
                  <div id="contact" className="pt-4">
                    <p className="mb-4">
                      If you have questions or concerns about these Terms of Service, please contact us at:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center mb-3">
                        <span className="font-semibold w-24">Email:</span>
                        <a href="mailto:legal@ReelFace.com" className="text-cyberpink hover:underline">legal@ReelFace.com</a>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center mb-3">
                        <span className="font-semibold w-24">Phone:</span>
                        <a href="tel:+11234567890" className="text-cyberpink hover:underline">+1 (123) 456-7890</a>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-start">
                        <span className="font-semibold w-24">Address:</span>
                        <address className="not-italic">
                          123 Digital Avenue<br />
                          Tech District<br />
                          Innovation City, CA 94105<br />
                          USA
                        </address>
                      </div>
                    </div>
                  </div>
                </PolicySection>
              </div>

              <div className="text-center mt-12 text-sm text-gray-500">
                <p>Last Updated: June 1, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-cyberpink to-cyberpurple text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-fade"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default TermsOfService;
