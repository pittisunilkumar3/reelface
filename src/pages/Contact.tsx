
import { useState } from 'react';
import ContactForm from '@/components/ContactForm';
import {
  Mail, Phone, MapPin, Clock, MessageSquare,
  ChevronDown, Headphones, Globe, Users,
  ArrowRight, Sparkles, Building, CheckCircle,
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  HelpCircle, Award, Shield, Zap, Star
} from 'lucide-react';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import HexagonNetwork from '@/components/HexagonNetwork';
import LazyImage from '@/components/LazyImage';
import { getOptimizedImageUrl } from '@/utils/imageOptimization';

// Floating element animation
const FloatingElement = ({ children, delay = 0, className = "" }) => {
  return (
    <div
      className={`animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

// FAQ Section Component with expandable functionality
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes ReelFace different from other video production companies?",
      answer: "We don't just create videos – we become the exclusive face of your brand. Our dedicated talent becomes your brand ambassador, creating consistent, authentic content that builds trust and recognition. This exclusive approach ensures your audience connects with a familiar face across all your content."
    },
    {
      question: "How does the 'Brand Face' service work?",
      answer: "We assign a dedicated professional talent who becomes the exclusive face of your brand. They learn your brand voice, values, and messaging to create authentic content. This person appears consistently in your reels, building familiarity and trust with your audience while maintaining professional quality."
    },
    {
      question: "What platforms do you create content for?",
      answer: "We create optimized content for all major social media platforms including Instagram Reels, TikTok, YouTube Shorts, LinkedIn videos, Facebook, and more. Each piece of content is tailored to the specific platform's requirements, audience behavior, and optimal formats."
    },
    {
      question: "What's included in your video production packages?",
      answer: "Our packages typically include script development, professional filming with high-end equipment, post-production editing, color grading, sound design, and multi-format optimization. We also provide content strategy consultation and performance tracking recommendations."
    },
    {
      question: "How long does it take to produce content?",
      answer: "Timeline varies by project scope. Simple reels can be delivered within 3-5 business days, while comprehensive campaigns with multiple videos may take 1-2 weeks. We offer rush delivery options for urgent projects and maintain clear communication throughout the process."
    },
    {
      question: "Do you provide content strategy and planning?",
      answer: "Absolutely! We offer comprehensive content strategy services including audience research, content calendar planning, script writing, and performance optimization. Our team helps align your content with your business goals and target audience preferences."
    },
    {
      question: "Can you work with our existing brand guidelines?",
      answer: "Yes, we work closely with your existing brand guidelines, visual identity, and messaging framework. Our team ensures all content maintains brand consistency while optimizing for engagement and platform-specific requirements."
    },
    {
      question: "What are your pricing options?",
      answer: "We offer flexible pricing based on project scope, content volume, and service requirements. Options include per-project pricing, monthly retainers, and custom packages. Contact us for a personalized quote based on your specific needs and budget."
    },
    {
      question: "Do you offer revisions and feedback incorporation?",
      answer: "Yes, we include revision rounds in all our packages. We work collaboratively with clients to ensure the final content meets expectations and aligns with brand goals. Our process includes review checkpoints and feedback incorporation."
    },
    {
      question: "Can you help with personal branding for executives and professionals?",
      answer: "Definitely! We specialize in personal branding for professionals, executives, and thought leaders. This includes professional headshots, LinkedIn optimization, thought leadership content creation, and building a consistent online presence that enhances professional reputation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-reelred/50 rounded-xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-reelred">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg text-gray-800 pr-4">
                  {faq.question}
                </h3>
              </div>
              <div className="flex-shrink-0">
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                    openFAQ === index ? 'transform rotate-180' : ''
                  }`}
                />
              </div>
            </div>
          </button>

          <div className={`overflow-hidden transition-all duration-300 ${
            openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-6 pb-6">
              <div className="ml-9 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Contact = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us - ReelFace"
        description="Have questions about our video production services or want to discuss your project? Get in touch with our team today."
      />
      {/* Contact Hero Section */}
      <section className="bg-gradient-to-r from-reelred to-reelblack text-white py-20 md:py-28 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-reelwhite/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-reelred/20 blur-3xl animate-pulse-slow animation-delay-1000"></div>
          <div className="absolute top-3/4 left-1/3 w-40 h-40 rounded-full bg-white/10 blur-2xl animate-pulse-slow animation-delay-2000"></div>
        </div>

        {/* Hexagon Network Animation */}
        <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none">
          <HexagonNetwork width={1200} height={600} nodeCount={30} />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6 animate-pulse-slow">
                <span className="mr-2 bg-white text-reelred p-1 rounded-full">
                  <Sparkles className="h-3 w-3" />
                </span>
                24/7 Customer Support
              </div>

              <h1 className="heading-xl mb-6 relative">
                <span className="relative inline-block">
                  <span className="relative z-10">Contact Us</span>
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-reelred/30 rounded-full -z-10 transform -rotate-1"></span>
                </span>
              </h1>

              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Have questions about our video production services or want to discuss your project?
                Get in touch with our team today and let's create something amazing together.
              </p>

              {/* Contact method badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: <Mail className="h-4 w-4" />, text: "Email Us" },
                  { icon: <Phone className="h-4 w-4" />, text: "Whatsapp Us" },
                  { icon: <MessageSquare className="h-4 w-4" />, text: "Live Chat" }
                ].map((badge, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:bg-white/20"
                  >
                    <span className="mr-1.5 text-white">{badge.icon}</span>
                    {badge.text}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="#contact-form"
                  className="bg-white text-reelred hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg group inline-flex items-center"
                >
                  Fill Out Form
                  <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
                </Link>
                <a
                  href="tel:+91 9949292553"
                  className="bg-white/10 hover:bg-white/20 transition-all text-white font-semibold py-3 px-6 rounded-md inline-flex items-center hover:shadow-lg transform hover:-translate-y-1"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Whatsapp Us
                </a>
              </div>

              {/* Quick contact info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform transition-all duration-300 hover:bg-white/15">
                  <div className="flex items-center">
                    <div className="bg-white/10 p-2 rounded-full mr-3">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Email Us</h3>
                      <a href="mailto:thereelface@gmail.com" className="text-white/80 text-sm hover:text-white">
                        thereelface@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform transition-all duration-300 hover:bg-white/15">
                  <div className="flex items-center">
                    <div className="bg-white/10 p-2 rounded-full mr-3">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Call Us</h3>
                      <a href="tel:+919949292553" className="text-white/80 text-sm hover:text-white">
                        +91 9949292553
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <FloatingElement className="relative z-10">
                <div className="relative">
                  {/* Decorative background shapes */}
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-reelred/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-reelblack/20 rounded-full blur-xl"></div>

                  {/* Contact image */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 relative z-10 shadow-xl border border-white/10">
                    <div className="rounded-xl overflow-hidden">
                      <LazyImage
                        src={getOptimizedImageUrl("https://images.unsplash.com/photo-1600880292203-757bb62b4baf", 800, 85)}
                        alt="Customer support team"
                        className="w-full h-64 object-cover"
                      />
                    </div>

                    {/* Support team info */}
                    <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center">
                        <div className="bg-reelred/20 p-3 rounded-full mr-4">
                          <Headphones className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-lg">24/7 Support Team</h3>
                          <p className="text-white/80 text-sm">Always ready to assist you</p>
                        </div>
                      </div>
                    </div>

                    {/* Support stats */}
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      {[
                        { icon: <Globe className="h-4 w-4" />, text: "Global Coverage" },
                        { icon: <Users className="h-4 w-4" />, text: "Expert Team" },
                        { icon: <Clock className="h-4 w-4" />, text: "Fast Response" }
                      ].map((item, index) => (
                        <div key={index} className="bg-white/10 rounded-lg p-2 text-center">
                          <div className="flex justify-center mb-1 text-white/80">
                            {item.icon}
                          </div>
                          <p className="text-white/80 text-xs">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Floating elements */}
                  <FloatingElement delay={0.7} className="absolute -top-4 -right-4 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-20">
                    <MessageSquare className="h-6 w-6 text-reelred" />
                  </FloatingElement>

                  <FloatingElement delay={1.5} className="absolute -bottom-4 -left-4 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center z-20">
                    <Building className="h-5 w-5 text-reelblack" />
                  </FloatingElement>
                </div>
              </FloatingElement>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 animate-bounce">
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <ChevronDown className="h-5 w-5" />
        </div>
      </section>

      {/* Contact Information and Form */}
      <section id="contact-form" className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-md mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
                Our team is ready to answer your questions and discuss how we can help with your AI initiatives.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-aipurple/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-aipurple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a href="mailto:info@aicompany.com" className="text-gray-600 hover:text-aipurple">
                      thereelface@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-aipurple/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-aipurple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <a href="tel:+919949292553" className="text-gray-600 hover:text-aipurple">
                      +91 9949292553
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-aipurple/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-aipurple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Office</h3>
                    <address className="text-gray-600 not-italic">
                      123 AI Boulevard<br />
                      Tech District, Innovation City<br />
                      CA 94105, USA
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-aipurple/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-aipurple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our video production services, brand face solutions, and how we can help elevate your content strategy.
            </p>
          </div>

          <FAQSection />

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Still have questions about our services?</p>
            <a href="mailto:thereelface@gmail.com" className="button-primary inline-flex items-center">
              Contact Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-gradient-to-r from-reelred/10 to-reelblack/10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Why Choose ReelFace</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We don't just create content – we become the authentic face of your brand, delivering professional video production that drives real engagement and builds lasting connections with your audience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Star className="h-8 w-8" />,
                title: "Exclusive Brand Face",
                description: "We provide dedicated, exclusive talent that becomes the authentic face of your brand, creating consistent and recognizable content that builds trust and brand recognition."
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Professional Excellence",
                description: "Our team combines creative storytelling with professional-grade equipment and post-production expertise to deliver content that stands out in today's competitive digital landscape."
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Fast Turnaround",
                description: "We understand the pace of social media. Our streamlined production process ensures quick delivery without compromising on quality, keeping your content calendar on track."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Conversion-Focused",
                description: "Every piece of content we create is strategically designed to drive engagement, build audience connection, and ultimately convert viewers into customers for your business."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Brand Protection",
                description: "We maintain strict brand guidelines and quality standards, ensuring every video aligns perfectly with your brand voice, values, and visual identity across all platforms."
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Multi-Platform Expertise",
                description: "From Instagram Reels to TikTok, YouTube Shorts to LinkedIn videos, we optimize content for each platform's unique requirements and audience behaviors."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="bg-gradient-to-r from-reelred/20 to-reelblack/20 p-4 rounded-full inline-flex mb-4 group-hover:from-reelred group-hover:to-reelblack group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Social Media Contact Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Connect With Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Follow us on social media for the latest updates, news, and to connect with our community.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {[
              { icon: <Facebook className="h-6 w-6" />, name: "Facebook", color: "bg-blue-600", url: "#" },
              { icon: <Twitter className="h-6 w-6" />, name: "Twitter", color: "bg-sky-500", url: "#" },
              { icon: <Linkedin className="h-6 w-6" />, name: "LinkedIn", color: "bg-blue-700", url: "#" },
              { icon: <Instagram className="h-6 w-6" />, name: "Instagram", color: "bg-pink-600", url: "#" },
              { icon: <Youtube className="h-6 w-6" />, name: "YouTube", color: "bg-red-600", url: "#" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="flex items-center gap-3 px-6 py-3 rounded-full text-white transition-transform hover:scale-105"
                style={{ backgroundColor: social.color.split('-')[1] }}
              >
                {social.icon}
                <span>{social.name}</span>
              </a>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-reelred/10 to-reelblack/10 rounded-xl p-8 max-w-3xl mx-auto text-center">
            <h3 className="font-semibold text-xl mb-3">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 mb-6">
              Stay updated with our latest news, articles, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-reelred/50"
              />
              <button className="button-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Visit Our Office</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We'd love to meet you in person at our headquarters.
            </p>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            {/* Google Maps iframe - Replace with actual coordinates */}
            <div className="aspect-[16/9]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968143067447!2d-122.41941638468204!3d37.77492997975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1626384420777!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>

            <div className="p-6 grid md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="bg-reelred/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-reelred" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <address className="text-gray-600 not-italic">
                    123 AI Boulevard<br />
                    Tech District, Innovation City<br />
                    CA 94105, USA
                  </address>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-reelred/10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-reelred" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-reelred/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-reelred" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Contact</h3>
                  <p className="text-gray-600">
                    Phone: +91 9949292553<br />
                    Email: thereelface@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
