import SEO from '@/components/SEO';
import { Shield, Lock, Eye, FileText, ArrowUp, ChevronRight, ChevronDown } from 'lucide-react';
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

const PrivacyPolicy = () => {
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
    { id: "introduction", title: "Introduction" },
    { id: "information-we-collect", title: "Information We Collect" },
    { id: "how-we-use", title: "How We Use Your Information" },
    { id: "disclosure", title: "Disclosure of Your Information" },
    { id: "security", title: "Security of Your Information" },
    { id: "children", title: "Policy for Children" },
    { id: "changes", title: "Changes to This Privacy Policy" },
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
        title="Privacy Policy - Cyberdetox"
        description="Our privacy policy outlines how we collect, use, and protect your personal information."
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
            <Shield className="h-16 w-16 text-white" />
          </div>
          <div className="absolute bottom-10 right-10 opacity-20">
            <Lock className="h-16 w-16 text-white" />
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FloatingElement animationType="fade" delay={0.2}>
              <h1 className="heading-xl mb-6">Privacy Policy</h1>
            </FloatingElement>
            <FloatingElement animationType="fade" delay={0.4}>
              <p className="text-xl text-white/90 mb-8">
                How we collect, use, and protect your personal information
              </p>
            </FloatingElement>
            <FloatingElement animationType="slide-up" delay={0.6}>
              <div className="flex justify-center space-x-6">
                <div className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                  <Shield className="h-7 w-7 animate-pulse-slow" />
                </div>
                <div className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                  <Lock className="h-7 w-7 animate-pulse-slow animation-delay-200" />
                </div>
                <div className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                  <Eye className="h-7 w-7 animate-pulse-slow animation-delay-400" />
                </div>
                <div className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                  <FileText className="h-7 w-7 animate-pulse-slow animation-delay-600" />
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
                    <h4 className="font-semibold mb-2 text-cyberpink">Need Help?</h4>
                    <p className="text-sm text-gray-600 mb-3">If you have any questions about our privacy practices, please contact us.</p>
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
                      <FileText className="h-7 w-7 text-cyberpink" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-1">Privacy Policy Overview</h2>
                      <p className="text-gray-600 font-medium">Last Updated: June 1, 2023</p>
                    </div>
                  </div>
                  <p className="text-gray-900 text-lg leading-relaxed font-medium">
                    This document outlines how Cyberdetox collects, uses, and protects your personal information.
                    We are committed to ensuring the privacy and security of all user data.
                  </p>
                </div>
              </FloatingElement>

              {/* Policy Sections */}
              <div className="space-y-6">
                <PolicySection title="Introduction" icon={Shield} id="introduction">
                  <div id="introduction" className="pt-4">
                    <p className="mb-4 text-gray-800 leading-relaxed">
                      At <span className="font-semibold text-cyberpink">Cyberdetox</span>, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                    </p>
                    <p className="mb-4 text-gray-800 leading-relaxed">
                      We are committed to protecting your personal data and ensuring your information is handled in accordance with applicable data protection laws. We've designed this policy to be transparent about our practices and to empower you to make informed decisions about your personal information.
                    </p>
                    <div className="bg-gradient-to-r from-cyberpink/5 to-cyberpurple/5 p-4 rounded-lg mb-4 border-l-4 border-cyberpink">
                      <p className="text-gray-800 font-medium">
                        Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      This policy applies to all information collected through our website, mobile applications, and any related services, sales, marketing, or events.
                    </p>
                  </div>
                </PolicySection>

                <PolicySection title="Information We Collect" icon={Eye} id="information-we-collect">
                  <div id="information-we-collect" className="pt-4">
                    <h3 className="text-xl font-bold text-cyberpink mb-4 tracking-tight">Types of Information</h3>
                    <p className="mb-5 text-gray-900 leading-relaxed text-base font-medium">
                      We collect several types of information from and about users of our website, including information:
                    </p>
                    <div className="mb-8 bg-white shadow-md rounded-lg p-6 border border-gray-200">
                      <h4 className="font-bold text-cyberpink mb-3 text-lg">Personal Information</h4>
                      <p className="mb-4 text-gray-900 leading-relaxed font-medium">
                        We may collect personal information that you voluntarily provide to us when you interact with our services in the following ways:
                      </p>
                      <ul className="list-none mb-4 space-y-2">
                        {[
                          { action: "Register on our website", desc: "When you create an account, we collect information to identify you and secure your account" },
                          { action: "Subscribe to our newsletter", desc: "When you opt-in to receive updates and marketing communications" },
                          { action: "Request information or assistance", desc: "When you submit inquiries through our contact forms or support channels" },
                          { action: "Participate in activities on our website", desc: "When you engage with interactive features, surveys, or promotions" },
                          { action: "Contact us", desc: "When you reach out to our team directly via email, phone, or other communication methods" }
                        ].map((item, index) => (
                          <li key={index} className="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-gradient-to-r from-cyberpink to-cyberpurple text-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-4 shadow-sm">
                              <span className="text-xs font-bold">{index + 1}</span>
                            </div>
                            <div>
                              <span className="font-bold text-gray-900">{item.action}</span>
                              <p className="text-base text-gray-700 mt-1 leading-relaxed">{item.desc}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <h3 className="text-xl font-bold text-cyberpink mb-4 tracking-tight">Categories of Personal Information</h3>
                    <p className="mb-5 text-gray-900 leading-relaxed text-base font-medium">
                      The personal information we may collect includes but is not limited to:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {[
                        {
                          type: "Name",
                          desc: "Your first and last name, username, or similar identifier",
                          icon: "👤"
                        },
                        {
                          type: "Email address",
                          desc: "Your personal or business email address for communications",
                          icon: "✉️"
                        },
                        {
                          type: "Phone number",
                          desc: "Your contact number for account verification or support",
                          icon: "📱"
                        },
                        {
                          type: "Company name",
                          desc: "The organization you represent or are affiliated with",
                          icon: "🏢"
                        },
                        {
                          type: "Job title",
                          desc: "Your professional role or position",
                          icon: "💼"
                        },
                        {
                          type: "IP address",
                          desc: "Your device's internet protocol address",
                          icon: "🌐"
                        },
                        {
                          type: "Browser type",
                          desc: "Information about your web browser",
                          icon: "🔍"
                        },
                        {
                          type: "Operating system",
                          desc: "Information about your device's operating system",
                          icon: "💻"
                        }
                      ].map((item, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-5 border border-gray-200 hover:shadow-lg transition-shadow">
                          <div className="flex items-start">
                            <div className="bg-gradient-to-r from-cyberpink/15 to-cyberpurple/15 p-3 rounded-full mr-4 text-xl shadow-sm">
                              {item.icon}
                            </div>
                            <div>
                              <h4 className="font-bold text-cyberpink text-lg">{item.type}</h4>
                              <p className="text-base text-gray-800 mt-2 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg border-l-5 border-yellow-500 shadow-md">
                      <h4 className="font-bold text-yellow-800 mb-3 text-lg">Automatic Data Collection</h4>
                      <p className="text-yellow-900 text-base leading-relaxed font-medium">
                        In addition to the information you provide, we may automatically collect certain information about your device, browsing actions, and patterns. This data is collected using cookies, server logs, and other similar technologies as you navigate through our website.
                      </p>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="How We Use Your Information" icon={FileText} id="how-we-use">
                  <div id="how-we-use" className="pt-4">
                    <h3 className="text-lg font-semibold text-cyberpink mb-3">Purpose of Data Collection</h3>
                    <p className="mb-4 text-gray-800 leading-relaxed">
                      At Cyberdetox, we believe in transparency regarding how we use your personal information. We process your data for specific, legitimate purposes, including:
                    </p>

                    <div className="mb-6 bg-white shadow-sm rounded-lg p-5 border border-gray-100">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          {
                            title: "Service Provision",
                            desc: "Provide, operate, and maintain our website and services in a secure and efficient manner",
                            icon: "🔧"
                          },
                          {
                            title: "Service Enhancement",
                            desc: "Improve, personalize, and expand our website and services based on user preferences",
                            icon: "⚙️"
                          },
                          {
                            title: "Usage Analysis",
                            desc: "Understand and analyze how you interact with our website to improve user experience",
                            icon: "📊"
                          },
                          {
                            title: "Product Development",
                            desc: "Develop new products, services, features, and functionality to meet user needs",
                            icon: "💡"
                          },
                          {
                            title: "Communication",
                            desc: "Communicate with you about our services, updates, and other important information",
                            icon: "📨"
                          },
                          {
                            title: "Transaction Processing",
                            desc: "Process and complete transactions and send related information including purchase confirmations",
                            icon: "💳"
                          },
                          {
                            title: "Marketing",
                            desc: "Send you marketing and promotional communications (with your consent where required by law)",
                            icon: "📢"
                          },
                          {
                            title: "Security",
                            desc: "Detect, prevent, and address technical issues, fraud, and security breaches",
                            icon: "🔒"
                          }
                        ].map((item, index) => (
                          <div key={index} className="bg-gradient-to-r from-cyberpink/5 to-cyberpurple/5 p-4 rounded-lg">
                            <div className="flex items-start">
                              <div className="bg-white shadow-sm rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-3 text-xl border border-gray-100">
                                {item.icon}
                              </div>
                              <div>
                                <h4 className="font-semibold text-cyberpink">{item.title}</h4>
                                <p className="text-sm text-gray-700 mt-1 leading-relaxed">{item.desc}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-cyberpink mb-3">Legal Basis for Processing</h3>
                    <p className="mb-4 text-gray-800 leading-relaxed">
                      We process your personal information based on one or more of the following legal grounds:
                    </p>

                    <div className="space-y-3 mb-6">
                      {[
                        {
                          basis: "Consent",
                          desc: "You have given us permission to process your personal data for specific purposes"
                        },
                        {
                          basis: "Contract Fulfillment",
                          desc: "Processing is necessary to fulfill our contractual obligations to you or to take steps at your request before entering into a contract"
                        },
                        {
                          basis: "Legitimate Interests",
                          desc: "Processing is necessary for our legitimate interests or those of a third party, provided your interests and fundamental rights do not override those interests"
                        },
                        {
                          basis: "Legal Obligation",
                          desc: "Processing is necessary to comply with our legal obligations"
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start bg-white shadow-sm rounded-lg p-4 border border-gray-100">
                          <div className="bg-gradient-to-r from-cyberpink to-cyberpurple text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                            <span className="text-sm font-bold">{index + 1}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-cyberpink">{item.basis}</h4>
                            <p className="text-gray-700 mt-1 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 p-4 rounded-lg border-l-4 border-cyberpink">
                      <h4 className="font-semibold mb-2">Data Retention</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
                      </p>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="Disclosure of Your Information" icon={Lock} id="disclosure">
                  <div id="disclosure" className="pt-4">
                    <h3 className="text-lg font-semibold text-cyberpink mb-3">Information Sharing Practices</h3>
                    <p className="mb-4 text-gray-800 leading-relaxed">
                      We respect your privacy and are committed to protecting your personal information. However, there are certain circumstances where we may need to share your data with third parties. We may disclose your information in the following situations:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                      <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 p-3">
                          <div className="flex items-center">
                            <div className="bg-white p-2 rounded-full mr-3">
                              <Shield className="h-5 w-5 text-cyberpink" />
                            </div>
                            <h4 className="font-semibold text-cyberpink">Legal Requirements</h4>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-gray-700 text-sm leading-relaxed">
                            If we believe the release of information is necessary to:
                          </p>
                          <ul className="mt-2 space-y-1 text-sm text-gray-700">
                            <li className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-cyberpink rounded-full mr-2"></div>
                              <span>Comply with applicable laws and regulations</span>
                            </li>
                            <li className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-cyberpink rounded-full mr-2"></div>
                              <span>Enforce our site policies and terms</span>
                            </li>
                            <li className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-cyberpink rounded-full mr-2"></div>
                              <span>Respond to legal process or government request</span>
                            </li>
                            <li className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-cyberpink rounded-full mr-2"></div>
                              <span>Protect our or others' rights, property, or safety</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 p-3">
                          <div className="flex items-center">
                            <div className="bg-white p-2 rounded-full mr-3">
                              <FileText className="h-5 w-5 text-cyberpink" />
                            </div>
                            <h4 className="font-semibold text-cyberpink">Business Transfers</h4>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-gray-700 text-sm leading-relaxed">
                            If Cyberdetox or our assets are acquired by a third party, personal information held by us about our users may be one of the transferred assets. In such cases:
                          </p>
                          <ul className="mt-2 space-y-1 text-sm text-gray-700">
                            <li className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-cyberpink rounded-full mr-2"></div>
                              <span>We will notify you via email and/or notice on our website</span>
                            </li>
                            <li className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-cyberpink rounded-full mr-2"></div>
                              <span>Your information would remain subject to the promises made in any pre-existing Privacy Policy</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 p-3">
                          <div className="flex items-center">
                            <div className="bg-white p-2 rounded-full mr-3">
                              <Lock className="h-5 w-5 text-cyberpink" />
                            </div>
                            <h4 className="font-semibold text-cyberpink">Third-Party Service Providers</h4>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-gray-700 text-sm leading-relaxed">
                            We may share your information with trusted third parties who assist us in operating our website, conducting our business, or providing services to you, so long as those parties agree to keep this information confidential. These third parties may include:
                          </p>
                          <ul className="mt-2 space-y-1 text-sm text-gray-700">
                            <li className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-cyberpink rounded-full mr-2"></div>
                              <span>Cloud hosting and infrastructure providers</span>
                            </li>
                            <li className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-cyberpink rounded-full mr-2"></div>
                              <span>Payment processors</span>
                            </li>
                            <li className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-cyberpink rounded-full mr-2"></div>
                              <span>Analytics and marketing service providers</span>
                            </li>
                            <li className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-cyberpink rounded-full mr-2"></div>
                              <span>Customer support services</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 p-3">
                          <div className="flex items-center">
                            <div className="bg-white p-2 rounded-full mr-3">
                              <Eye className="h-5 w-5 text-cyberpink" />
                            </div>
                            <h4 className="font-semibold text-cyberpink">With Your Consent</h4>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-gray-700 text-sm leading-relaxed">
                            We may disclose your personal information for any other purpose with your consent. Your consent may be obtained in various ways, including but not limited to:
                          </p>
                          <ul className="mt-2 space-y-1 text-sm text-gray-700">
                            <li className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-cyberpink rounded-full mr-2"></div>
                              <span>Through our website or applications</span>
                            </li>
                            <li className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-cyberpink rounded-full mr-2"></div>
                              <span>In writing</span>
                            </li>
                            <li className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-cyberpink rounded-full mr-2"></div>
                              <span>Verbally</span>
                            </li>
                            <li className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-cyberpink rounded-full mr-2"></div>
                              <span>Through opt-in processes</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mb-4">
                      <h4 className="font-semibold text-yellow-700 mb-2">Important Notice About Third Parties</h4>
                      <p className="text-yellow-800 text-sm leading-relaxed">
                        Please note that once your information is shared with a third party, the use of your information by that third party is subject to their privacy policies and practices. We encourage you to review the privacy policies of any third party to whom you provide information.
                      </p>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="Security of Your Information" icon={Shield} id="security">
                  <div id="security" className="pt-4">
                    <h3 className="text-lg font-semibold text-cyberpink mb-3">Our Security Commitment</h3>
                    <p className="mb-4 text-gray-800 leading-relaxed">
                      At Cyberdetox, protecting your personal information is a top priority. We implement comprehensive security measures to safeguard your data against unauthorized access, alteration, disclosure, or destruction.
                    </p>

                    <div className="bg-white shadow-sm rounded-lg p-5 border border-gray-100 mb-6">
                      <h4 className="font-semibold text-cyberpink mb-3">Security Measures We Implement</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          {
                            title: "Technical Safeguards",
                            measures: [
                              "SSL/TLS encryption for data transmission",
                              "Firewalls and intrusion detection systems",
                              "Regular security assessments and penetration testing",
                              "Secure authentication mechanisms"
                            ],
                            icon: "🔒"
                          },
                          {
                            title: "Administrative Controls",
                            measures: [
                              "Strict access control policies",
                              "Regular security training for employees",
                              "Background checks for personnel",
                              "Documented security procedures"
                            ],
                            icon: "📋"
                          },
                          {
                            title: "Physical Security",
                            measures: [
                              "Secure data centers with controlled access",
                              "Surveillance systems",
                              "Environmental safeguards",
                              "Disaster recovery protocols"
                            ],
                            icon: "🏢"
                          }
                        ].map((category, index) => (
                          <div key={index} className="bg-gradient-to-r from-cyberpink/5 to-cyberpurple/5 p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                              <div className="bg-white shadow-sm rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-2 text-xl border border-gray-100">
                                {category.icon}
                              </div>
                              <h5 className="font-semibold text-cyberpink">{category.title}</h5>
                            </div>
                            <ul className="space-y-1">
                              {category.measures.map((measure, idx) => (
                                <li key={idx} className="flex items-center text-sm text-gray-700">
                                  <div className="w-1.5 h-1.5 bg-cyberpink rounded-full mr-2 flex-shrink-0"></div>
                                  <span>{measure}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 p-5 rounded-lg border-l-4 border-cyberpink mb-6">
                      <div className="flex items-start">
                        <div className="text-3xl mr-4">💬</div>
                        <div>
                          <h4 className="font-semibold mb-2">Our Promise</h4>
                          <p className="text-gray-700 italic leading-relaxed">
                            "We are committed to ensuring that your information is secure. We have implemented suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online. Our security practices are regularly reviewed and enhanced to maintain the highest standards of data protection."
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-cyberpink mb-3">Your Role in Security</h3>
                    <p className="mb-4 text-gray-800 leading-relaxed">
                      While we implement strong security measures, the security of your information also depends on you. We encourage you to:
                    </p>

                    <div className="space-y-3 mb-6">
                      {[
                        "Use strong, unique passwords for your account",
                        "Keep your login credentials confidential",
                        "Log out of your account after using shared computers",
                        "Be cautious about sharing personal information",
                        "Keep your devices and software updated"
                      ].map((tip, index) => (
                        <div key={index} className="flex items-center bg-white shadow-sm rounded-lg p-3 border border-gray-100">
                          <div className="bg-gradient-to-r from-cyberpink to-cyberpurple text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                            <span className="text-xs font-bold">✓</span>
                          </div>
                          <p className="text-gray-700">{tip}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold text-yellow-700 mb-2">Security Disclaimer</h4>
                      <p className="text-yellow-800 text-sm leading-relaxed">
                        While we strive to use commercially acceptable means to protect your personal information, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure. Despite our best efforts, we cannot guarantee absolute security. If you have reason to believe that your interaction with us is no longer secure, please immediately notify us.
                      </p>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="Policy for Children" icon={Shield} id="children">
                  <div id="children" className="pt-4">
                    <h3 className="text-xl font-bold text-cyberpink mb-4 tracking-tight">Children's Privacy Protection</h3>
                    <p className="mb-5 text-gray-900 leading-relaxed text-base font-medium">
                      Cyberdetox is committed to protecting the privacy of children who use our website and services. We recognize the importance of safeguarding the personal information of minors.
                    </p>

                    <div className="bg-white shadow-sm rounded-lg p-5 border border-gray-100 mb-6">
                      <div className="flex items-start">
                        <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 p-3 rounded-full mr-4 flex-shrink-0">
                          <Shield className="h-6 w-6 text-cyberpink" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-cyberpink mb-2">Our Commitment to Children's Privacy</h4>
                          <p className="text-gray-700 leading-relaxed mb-4">
                            Our website and services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13 years of age. We are committed to complying with the Children's Online Privacy Protection Act (COPPA) and other applicable laws protecting children's privacy.
                          </p>
                          <div className="bg-gradient-to-r from-cyberpink/5 to-cyberpurple/5 p-4 rounded-lg">
                            <h5 className="font-medium text-cyberpink mb-2">If You Are a Parent or Guardian</h5>
                            <p className="text-gray-700 text-sm">
                              If you believe we have collected information from your child under the age of 13 without your consent, please contact us immediately at <a href="mailto:privacy@cyberdetox.com" className="text-cyberpink hover:underline">privacy@cyberdetox.com</a>. We will take prompt steps to remove that information from our servers.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold text-yellow-700 mb-2">Important Notice</h4>
                      <p className="text-yellow-800 text-sm leading-relaxed">
                        If you are under 13 years of age, please do not submit any personal information through our website or services. We encourage parents and legal guardians to monitor their children's Internet usage and to help enforce our Privacy Policy by instructing their children never to provide personal information on our website without their permission.
                      </p>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="Changes to This Privacy Policy" icon={FileText} id="changes">
                  <div id="changes" className="pt-4">
                    <h3 className="text-lg font-semibold text-cyberpink mb-3">Policy Updates</h3>
                    <p className="mb-4 text-gray-800 leading-relaxed">
                      We may update this Privacy Policy from time to time to reflect changes to our information practices. We encourage you to periodically review this page for the latest information on our privacy practices.
                    </p>

                    <div className="bg-white shadow-sm rounded-lg p-5 border border-gray-100 mb-6">
                      <h4 className="font-semibold text-cyberpink mb-3">How We Notify You of Changes</h4>
                      <div className="space-y-4">
                        {[
                          {
                            method: "Website Notice",
                            desc: "We will post the new Privacy Policy on this page with a prominent notice of the changes",
                            icon: "🌐"
                          },
                          {
                            method: "Email Notification",
                            desc: "For significant changes, we may send an email notification to the address associated with your account",
                            icon: "📧"
                          },
                          {
                            method: "Last Updated Date",
                            desc: "We will update the \"Last Updated\" date at the top of this Privacy Policy",
                            icon: "📅"
                          },
                          {
                            method: "Service Notifications",
                            desc: "We may display a notification within our services to inform you of important changes",
                            icon: "🔔"
                          }
                        ].map((item, index) => (
                          <div key={index} className="flex items-start">
                            <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 p-2 rounded-full mr-3 text-xl flex-shrink-0">
                              {item.icon}
                            </div>
                            <div>
                              <h5 className="font-medium text-cyberpink">{item.method}</h5>
                              <p className="text-gray-700 text-sm">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 p-4 rounded-lg border-l-4 border-cyberpink mb-4">
                      <p className="text-gray-700 leading-relaxed">
                        Your continued use of our website and services after any changes to this Privacy Policy constitutes your acceptance of the new terms. If you do not agree with the revised policy, please discontinue use of our website and services.
                      </p>
                    </div>

                    <p className="text-sm text-gray-600 italic">
                      We recommend that you print a copy of this Privacy Policy for your records.
                    </p>
                  </div>
                </PolicySection>

                <PolicySection title="Contact Us" icon={FileText} id="contact">
                  <div id="contact" className="pt-4">
                    <h3 className="text-lg font-semibold text-cyberpink mb-3">Get in Touch</h3>
                    <p className="mb-4 text-gray-800 leading-relaxed">
                      If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please don't hesitate to contact us. We are committed to addressing your inquiries promptly and thoroughly.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100">
                        <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 p-4">
                          <h4 className="font-semibold text-cyberpink">Contact Information</h4>
                        </div>
                        <div className="p-5">
                          <div className="space-y-4">
                            <div className="flex items-start">
                              <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 p-2 rounded-full mr-3 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyberpink" viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-700">Email</h5>
                                <a href="mailto:privacy@cyberdetox.com" className="text-cyberpink hover:underline">privacy@cyberdetox.com</a>
                                <p className="text-xs text-gray-500 mt-1">For privacy-related inquiries</p>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 p-2 rounded-full mr-3 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyberpink" viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-700">Phone</h5>
                                <a href="tel:+11234567890" className="text-cyberpink hover:underline">+1 (123) 456-7890</a>
                                <p className="text-xs text-gray-500 mt-1">Monday-Friday, 9am-5pm EST</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100">
                        <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 p-4">
                          <h4 className="font-semibold text-cyberpink">Mailing Address</h4>
                        </div>
                        <div className="p-5">
                          <div className="flex items-start">
                            <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 p-2 rounded-full mr-3 flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyberpink" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-700">Headquarters</h5>
                              <address className="not-italic text-gray-700 leading-relaxed">
                                Cyberdetox, Inc.<br />
                                123 Digital Avenue<br />
                                Tech District<br />
                                Innovation City, CA 94105<br />
                                USA
                              </address>
                            </div>
                          </div>

                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="text-sm text-gray-600">
                              For formal privacy requests, including data access, correction, or deletion requests, please send a written request to this address or email us at <a href="mailto:privacy@cyberdetox.com" className="text-cyberpink hover:underline">privacy@cyberdetox.com</a>.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-cyberpink/5 to-cyberpurple/5 p-4 rounded-lg">
                      <h4 className="font-semibold text-cyberpink mb-2">Response Time</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        We strive to respond to all legitimate inquiries within 30 days. Occasionally, it may take us longer if your request is particularly complex or you have made multiple requests. In this case, we will notify you and keep you updated.
                      </p>
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

export default PrivacyPolicy;
