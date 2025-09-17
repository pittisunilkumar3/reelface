import SEO from '@/components/SEO';
import { Cookie, Info, Settings, Shield, ArrowUp, ChevronRight, ChevronDown, Lock, FileText } from 'lucide-react';
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

const CookiesPolicy = () => {
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
    { id: "what-are-cookies", title: "What Are Cookies" },
    { id: "how-we-use", title: "How We Use Cookies" },
    { id: "third-party", title: "Third-Party Cookies" },
    { id: "your-choices", title: "Your Choices" },
    { id: "control-preferences", title: "Control Preferences" },
    { id: "changes", title: "Changes to Policy" },
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
        title="Cookies Policy - Cyberdetox"
        description="Our cookies policy explains how we use cookies and similar technologies on our website."
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
            <Cookie className="h-16 w-16 text-white" />
          </div>
          <div className="absolute bottom-10 right-10 opacity-20">
            <Settings className="h-16 w-16 text-white" />
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FloatingElement animationType="fade" delay={0.2}>
              <h1 className="heading-xl mb-6">Cookies Policy</h1>
            </FloatingElement>
            <FloatingElement animationType="fade" delay={0.4}>
              <p className="text-xl text-white/90 mb-8">
                How we use cookies and similar technologies on our website
              </p>
            </FloatingElement>
            <FloatingElement animationType="slide-up" delay={0.6}>
              <div className="flex justify-center space-x-6">
                <div className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                  <Cookie className="h-7 w-7 animate-pulse-slow" />
                </div>
                <div className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                  <Info className="h-7 w-7 animate-pulse-slow animation-delay-200" />
                </div>
                <div className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                  <Settings className="h-7 w-7 animate-pulse-slow animation-delay-400" />
                </div>
                <div className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                  <Shield className="h-7 w-7 animate-pulse-slow animation-delay-600" />
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
                    <h4 className="font-semibold mb-2 text-cyberpink">Cookie Settings</h4>
                    <p className="text-sm text-gray-600 mb-3">You can adjust your cookie preferences in your browser settings.</p>
                    <Link to="/contact" className="text-sm text-cyberpink hover:underline flex items-center">
                      Learn More <ChevronRight className="h-3 w-3 ml-1" />
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
                      <Cookie className="h-7 w-7 text-cyberpink" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-1">Cookies Policy Overview</h2>
                      <p className="text-gray-600 font-medium">Last Updated: June 1, 2023</p>
                    </div>
                  </div>
                  <p className="text-gray-900 text-lg leading-relaxed font-medium">
                    This document explains how Cyberdetox uses cookies and similar technologies to recognize you when you visit our website.
                    It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                  </p>
                </div>
              </FloatingElement>

              {/* Policy Sections */}
              <div className="space-y-6">
                <PolicySection title="What Are Cookies" icon={Cookie} id="what-are-cookies">
                  <div id="what-are-cookies" className="pt-4">
                    <h3 className="text-xl font-bold text-cyberpink mb-4 tracking-tight">Understanding Cookies Technology</h3>
                    <p className="mb-5 text-gray-900 leading-relaxed text-base font-medium">
                      Cookies are an essential part of how modern websites function. This section explains what cookies are, how they work, and why they're important for your browsing experience.
                    </p>

                    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 mb-8">
                      <h4 className="font-bold text-cyberpink mb-3 text-lg">Definition and Purpose</h4>
                      <p className="text-gray-900 leading-relaxed mb-4 font-medium">
                        Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the website or a third-party to recognize you and make your next visit easier and the website more useful to you.
                      </p>
                      <p className="text-gray-900 leading-relaxed mb-4 font-medium">
                        Essentially, cookies are a user's identification card for the Cyberdetox servers. Cookies allow Cyberdetox to serve you better and more efficiently, and to personalize your experience on our site.
                      </p>

                      <div className="bg-gradient-to-r from-cyberpink/5 to-cyberpurple/5 p-4 rounded-lg mb-4">
                        <h5 className="font-medium text-cyberpink mb-2">Key Characteristics of Cookies:</h5>
                        <ul className="space-y-2">
                          {[
                            "Small text files stored on your device",
                            "Contain information about your browsing session",
                            "Help websites remember your preferences and settings",
                            "Enable personalized experiences across the web",
                            "Can be temporary (session cookies) or persistent (stored for longer periods)"
                          ].map((item, index) => (
                            <li key={index} className="flex items-center">
                              <div className="bg-white p-1.5 rounded-full mr-3 shadow-sm">
                                <div className="w-2.5 h-2.5 bg-cyberpink rounded-full"></div>
                              </div>
                              <span className="text-gray-900 font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100">
                        <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 p-4">
                          <h4 className="font-semibold text-cyberpink">How Cookies Work</h4>
                        </div>
                        <div className="p-5">
                          <div className="flex items-start mb-4">
                            <div className="bg-gradient-to-r from-cyberpink/20 to-cyberpurple/20 p-3 rounded-full mr-4 flex-shrink-0">
                              <Cookie className="h-6 w-6 text-cyberpink" />
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              When you visit our website, small text files are placed on your device. These files allow us to remember your preferences, analyze how you use our site, and provide personalized content and advertisements.
                            </p>
                          </div>
                          <div className="space-y-3">
                            {[
                              { step: "You visit our website", desc: "Your browser sends a request to our server" },
                              { step: "Our server responds", desc: "Along with the webpage, it sends a cookie to your browser" },
                              { step: "Your browser stores the cookie", desc: "The cookie is saved on your device" },
                              { step: "On your next visit", desc: "Your browser sends the cookie back to our server" },
                              { step: "Our server recognizes you", desc: "We can personalize your experience based on your previous interactions" }
                            ].map((item, index) => (
                              <div key={index} className="flex items-start">
                                <div className="bg-gradient-to-r from-cyberpink to-cyberpurple text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                                  <span className="text-xs">{index + 1}</span>
                                </div>
                                <div>
                                  <span className="font-medium text-gray-800">{item.step}</span>
                                  <p className="text-xs text-gray-600 mt-0.5">{item.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100">
                        <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 p-4">
                          <h4 className="font-semibold text-cyberpink">Types of Cookies</h4>
                        </div>
                        <div className="p-5">
                          <div className="space-y-4">
                            {[
                              {
                                type: "Session Cookies",
                                desc: "Temporary cookies that expire when you close your browser. They help websites recognize you as you navigate between pages.",
                                icon: "⏱️"
                              },
                              {
                                type: "Persistent Cookies",
                                desc: "Cookies that remain on your device for a specified period. They help remember your preferences for future visits.",
                                icon: "📅"
                              },
                              {
                                type: "First-Party Cookies",
                                desc: "Cookies set by the website you're visiting. They enable core functionality and remember your preferences.",
                                icon: "🏠"
                              },
                              {
                                type: "Third-Party Cookies",
                                desc: "Cookies set by domains other than the one you're visiting. Often used for advertising and analytics.",
                                icon: "🔄"
                              }
                            ].map((item, index) => (
                              <div key={index} className="flex items-start">
                                <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 p-2 rounded-full mr-3 text-xl flex-shrink-0">
                                  {item.icon}
                                </div>
                                <div>
                                  <h5 className="font-medium text-cyberpink">{item.type}</h5>
                                  <p className="text-sm text-gray-700 mt-1">{item.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg border-l-5 border-yellow-500 shadow-md">
                      <h4 className="font-bold text-yellow-800 mb-3 text-lg">Important to Know</h4>
                      <p className="text-yellow-900 text-base leading-relaxed font-medium">
                        Cookies are not programs and cannot access or read other information stored on your device. They cannot be used to deliver viruses or run code. Their primary purpose is to enhance your browsing experience and help websites function more efficiently.
                      </p>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="How We Use Cookies" icon={Settings} id="how-we-use">
                  <div id="how-we-use" className="pt-4">
                    <h3 className="text-lg font-semibold text-cyberpink mb-3">Our Cookie Usage Practices</h3>
                    <p className="mb-4 text-gray-800 leading-relaxed">
                      At Cyberdetox, we use cookies to enhance your browsing experience, analyze site traffic, and personalize content. This section explains how and why we use cookies on our website.
                    </p>

                    <div className="bg-white shadow-sm rounded-lg p-5 border border-gray-100 mb-6">
                      <h4 className="font-semibold text-cyberpink mb-3">Cookie Implementation</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        When you use and access our website, we may place a number of cookie files in your web browser. These cookies help us deliver a better and more personalized service to you.
                      </p>

                      <div className="bg-gradient-to-r from-cyberpink/5 to-cyberpurple/5 p-4 rounded-lg mb-6">
                        <h5 className="font-medium text-cyberpink mb-3">Primary Purposes of Our Cookies</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            {
                              title: "Website Functionality",
                              desc: "To enable essential features and improve navigation",
                              icon: "⚙️",
                              examples: ["Remember login status", "Store shopping cart items", "Enable secure transactions"]
                            },
                            {
                              title: "Analytics & Insights",
                              desc: "To understand how visitors interact with our site",
                              icon: "📊",
                              examples: ["Track page views", "Analyze user journeys", "Identify popular content"]
                            },
                            {
                              title: "User Preferences",
                              desc: "To remember your settings and personalize content",
                              icon: "🔧",
                              examples: ["Remember language preferences", "Store display settings", "Customize content based on location"]
                            },
                            {
                              title: "Targeted Advertising",
                              desc: "To deliver relevant advertisements",
                              icon: "🎯",
                              examples: ["Show relevant product recommendations", "Limit ad frequency", "Measure ad effectiveness"]
                            }
                          ].map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                              <div className="flex items-start mb-2">
                                <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 p-2 rounded-full mr-3 text-xl flex-shrink-0">
                                  {item.icon}
                                </div>
                                <div>
                                  <h5 className="font-semibold text-cyberpink">{item.title}</h5>
                                  <p className="text-sm text-gray-700">{item.desc}</p>
                                </div>
                              </div>
                              <div className="ml-11">
                                <p className="text-xs text-gray-500 mb-1">Examples:</p>
                                <ul className="text-xs text-gray-600 space-y-1">
                                  {item.examples.map((example, idx) => (
                                    <li key={idx} className="flex items-center">
                                      <div className="w-1 h-1 bg-cyberpink rounded-full mr-1.5"></div>
                                      <span>{example}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed mb-4">
                        We use both session cookies (which expire when you close your browser) and persistent cookies (which stay on your device for a set period or until you delete them). Our cookies serve different purposes and remain on your device for different periods of time.
                      </p>
                    </div>

                    <h3 className="text-lg font-semibold text-cyberpink mb-3">Categories of Cookies We Use</h3>
                    <p className="mb-4 text-gray-800 leading-relaxed">
                      We categorize the cookies we use based on their function and purpose. Understanding these categories can help you make informed decisions about your cookie preferences.
                    </p>

                    <div className="space-y-5 mb-6">
                      {[
                        {
                          title: "Essential Cookies",
                          desc: "These cookies are necessary for the website to function properly and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.",
                          icon: <Lock className="h-5 w-5 text-cyberpink" />,
                          importance: "Critical",
                          canDisable: "No",
                          dataCollected: ["Session information", "Form data", "Authentication status"],
                          retention: "Session to 1 month"
                        },
                        {
                          title: "Preference Cookies",
                          desc: "These cookies enable the website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in. They help provide enhanced, more personal features.",
                          icon: <Settings className="h-5 w-5 text-cyberpink" />,
                          importance: "High",
                          canDisable: "Yes",
                          dataCollected: ["Language preferences", "Region settings", "Layout preferences"],
                          retention: "1 month to 1 year"
                        },
                        {
                          title: "Analytics Cookies",
                          desc: "These cookies help us understand how visitors interact with the website by collecting and reporting information anonymously. They allow us to count visits and traffic sources so we can measure and improve the performance of our site.",
                          icon: <Info className="h-5 w-5 text-cyberpink" />,
                          importance: "Medium",
                          canDisable: "Yes",
                          dataCollected: ["Pages visited", "Time spent on site", "Referral sources", "Click patterns"],
                          retention: "Up to 2 years"
                        },
                        {
                          title: "Marketing Cookies",
                          desc: "These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.",
                          icon: <FileText className="h-5 w-5 text-cyberpink" />,
                          importance: "Low",
                          canDisable: "Yes",
                          dataCollected: ["Browsing habits", "Interests", "Demographics"],
                          retention: "Up to 2 years"
                        }
                      ].map((item, index) => (
                        <div key={index} className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100">
                          <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 p-4">
                            <div className="flex items-center">
                              <div className="bg-white p-2 rounded-full mr-3">
                                {item.icon}
                              </div>
                              <h4 className="font-semibold text-cyberpink">{item.title}</h4>
                            </div>
                          </div>
                          <div className="p-5">
                            <p className="text-gray-700 leading-relaxed mb-4">{item.desc}</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                              <div className="bg-gray-50 p-3 rounded-lg">
                                <span className="font-medium text-gray-700 block mb-1">Importance:</span>
                                <span className={`${
                                  item.importance === "Critical" ? "text-red-600" :
                                  item.importance === "High" ? "text-orange-600" :
                                  item.importance === "Medium" ? "text-yellow-600" :
                                  "text-green-600"
                                }`}>{item.importance}</span>
                              </div>
                              <div className="bg-gray-50 p-3 rounded-lg">
                                <span className="font-medium text-gray-700 block mb-1">Can Disable:</span>
                                <span className={item.canDisable === "No" ? "text-red-600" : "text-green-600"}>{item.canDisable}</span>
                              </div>
                              <div className="bg-gray-50 p-3 rounded-lg">
                                <span className="font-medium text-gray-700 block mb-1">Retention:</span>
                                <span className="text-gray-600">{item.retention}</span>
                              </div>
                            </div>
                            <div className="mt-4">
                              <span className="font-medium text-gray-700 block mb-1">Data Collected:</span>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {item.dataCollected.map((data, idx) => (
                                  <span key={idx} className="bg-gradient-to-r from-cyberpink/5 to-cyberpurple/5 px-2 py-1 rounded text-xs text-gray-700">
                                    {data}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold text-yellow-700 mb-2">Cookie Usage Notice</h4>
                      <p className="text-yellow-800 text-sm leading-relaxed">
                        We strive to use cookies responsibly and transparently. You can control your cookie preferences through your browser settings or our cookie consent tool. Please note that disabling certain cookies may affect the functionality of our website.
                      </p>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="Third-Party Cookies" icon={Shield} id="third-party">
                  <div id="third-party" className="pt-4">
                    <p className="mb-4">
                      In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on.
                    </p>
                    <p className="mb-4">
                      These third-party services may include:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                      {[
                        { name: "Google Analytics", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" },
                        { name: "Google Ads", logo: "https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" },
                        { name: "Facebook Pixel", logo: "https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" },
                        { name: "LinkedIn Insights", logo: "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" },
                        { name: "HubSpot", logo: "https://www.hubspot.com/hubfs/assets/hubspot.com/style-guide/brand-guidelines/guidelines_the-logo.svg" }
                      ].map((service, index) => (
                        <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                          <div className="h-8 flex items-center justify-center mb-2">
                            <img src={service.logo} alt={service.name} className="h-full w-auto object-contain" />
                          </div>
                          <p className="text-xs font-medium">{service.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="Your Choices Regarding Cookies" icon={Settings} id="your-choices">
                  <div id="your-choices" className="pt-4">
                    <p className="mb-4">
                      If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mb-4">
                      <h4 className="font-semibold text-yellow-700 mb-2">Important Notice</h4>
                      <p className="text-yellow-800">
                        Please note that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
                      </p>
                    </div>
                    <p className="mb-4">
                      You can learn more about cookies and the following third-party websites:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center">
                        <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 p-2 rounded-full mr-3">
                          <Info className="h-5 w-5 text-cyberpink" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">AllAboutCookies</h4>
                          <p className="text-xs text-gray-500">www.allaboutcookies.org</p>
                        </div>
                      </a>
                      <a href="https://www.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center">
                        <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 p-2 rounded-full mr-3">
                          <Info className="h-5 w-5 text-cyberpink" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Network Advertising Initiative</h4>
                          <p className="text-xs text-gray-500">www.networkadvertising.org</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="How to Control Your Cookie Preferences" icon={Settings} id="control-preferences">
                  <div id="control-preferences" className="pt-4">
                    <p className="mb-4">
                      Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-cyberpink hover:underline">www.allaboutcookies.org</a>.
                    </p>
                    <p className="mb-4">
                      Find out how to manage cookies on popular browsers:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                      {[
                        { name: "Google Chrome", url: "https://support.google.com/accounts/answer/61416" },
                        { name: "Mozilla Firefox", url: "https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" },
                        { name: "Microsoft Edge", url: "https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" },
                        { name: "Safari (Desktop)", url: "https://support.apple.com/en-us/HT201265" },
                        { name: "Safari (Mobile)", url: "https://support.apple.com/en-us/HT201265" },
                        { name: "Android Browser", url: "https://support.google.com/chrome/answer/95647" }
                      ].map((browser, index) => (
                        <a
                          key={index}
                          href={browser.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
                        >
                          <h4 className="font-medium text-cyberpink">{browser.name}</h4>
                          <p className="text-xs text-gray-500 mt-1">View Instructions</p>
                        </a>
                      ))}
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <p className="text-gray-700">
                        To opt out of being tracked by Google Analytics across all websites, visit <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-cyberpink hover:underline">https://tools.google.com/dlpage/gaoptout</a>.
                      </p>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection title="Changes to This Cookies Policy" icon={FileText} id="changes">
                  <div id="changes" className="pt-4">
                    <p className="mb-4">
                      We may update our Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page and updating the "Last Updated" date.
                    </p>
                    <p className="mb-4">
                      You are advised to review this Cookies Policy periodically for any changes. Changes to this Cookies Policy are effective when they are posted on this page.
                    </p>
                  </div>
                </PolicySection>

                <PolicySection title="Contact Us" icon={FileText} id="contact">
                  <div id="contact" className="pt-4">
                    <p className="mb-4">
                      If you have any questions about our Cookies Policy, please contact us:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center mb-3">
                        <span className="font-semibold w-24">Email:</span>
                        <a href="mailto:privacy@cyberdetox.com" className="text-cyberpink hover:underline">privacy@cyberdetox.com</a>
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

export default CookiesPolicy;
