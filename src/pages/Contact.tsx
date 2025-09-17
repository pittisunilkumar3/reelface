
import { useEffect, useState, useRef } from 'react';
import ContactForm from '@/components/ContactForm';
import {
  Mail, Phone, MapPin, Clock, MessageSquare,
  ChevronDown, Headphones, Globe, Users,
  ArrowRight, Sparkles, Building, CheckCircle,
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  HelpCircle, Award, Shield, Zap, Star, ThumbsUp
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
                  { icon: <Phone className="h-4 w-4" />, text: "Call Us" },
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
                  href="tel:+11234567890"
                  className="bg-white/10 hover:bg-white/20 transition-all text-white font-semibold py-3 px-6 rounded-md inline-flex items-center hover:shadow-lg transform hover:-translate-y-1"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
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
                      <a href="mailto:info@reelface.com" className="text-white/80 text-sm hover:text-white">
                        info@reelface.com
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
                      <a href="tel:+13235557335" className="text-white/80 text-sm hover:text-white">
                        +1 (323) 555-REEL
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
                      info@aicompany.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-aipurple/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-aipurple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <a href="tel:+11234567890" className="text-gray-600 hover:text-aipurple">
                      +1 (123) 456-7890
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

              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-3">Schedule a Demo</h3>
                <p className="text-gray-600 mb-4">
                  Interested in seeing our AI platform in action? Schedule a personalized demo with one of our experts.
                </p>
                <a
                  href="mailto:demos@aicompany.com?subject=Request%20for%20Demo"
                  className="button-primary inline-flex"
                >
                  Request a Demo
                </a>
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
              Find answers to common questions about our services, support, and how to get in touch with our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                question: "How quickly will I receive a response?",
                answer: "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line for immediate assistance."
              },
              {
                question: "Do you offer custom solutions?",
                answer: "Yes, we specialize in creating tailored AI solutions to meet your specific business needs. Contact us to discuss your requirements and we'll develop a custom plan."
              },
              {
                question: "What information should I include in my inquiry?",
                answer: "To help us serve you better, please include details about your project, timeline, budget considerations, and specific requirements in your initial message."
              },
              {
                question: "Can I schedule a demo before committing?",
                answer: "Absolutely! We offer personalized demos of our platform and services. Use the 'Request a Demo' button on this page to schedule a time with our team."
              },
              {
                question: "Do you provide support after implementation?",
                answer: "Yes, we offer comprehensive post-implementation support and maintenance services to ensure your solution continues to perform optimally."
              },
              {
                question: "What areas do you serve?",
                answer: "We provide services globally with offices in major tech hubs. Our team can work remotely with clients anywhere in the world."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-reelred">
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a href="mailto:support@aicompany.com" className="button-primary inline-flex items-center">
              Contact Support
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-gradient-to-r from-reelred/10 to-reelblack/10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're committed to providing exceptional service and innovative solutions to help your business succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Award className="h-8 w-8" />,
                title: "Expert Team",
                description: "Our team consists of industry experts with years of experience in AI and technology solutions."
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Fast Response",
                description: "We pride ourselves on quick response times and efficient problem-solving for all client inquiries."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Secure Solutions",
                description: "Security is our priority. All our solutions are built with robust security measures to protect your data."
              },
              {
                icon: <ThumbsUp className="h-8 w-8" />,
                title: "Customer Satisfaction",
                description: "We're not happy until you're happy. We work closely with clients to ensure complete satisfaction."
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Quality Assurance",
                description: "Every solution we deliver undergoes rigorous quality testing to ensure optimal performance."
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Global Support",
                description: "With support available worldwide, we're ready to assist you no matter where you're located."
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

      {/* Our Clients Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Trusted by Leading Companies</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Join hundreds of businesses that rely on our expertise for their technology needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Client Logo {index + 1}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-xl p-6 max-w-3xl mx-auto">
            <div className="flex items-start">
              <div className="mr-4 text-reelred">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Join Our Growing List of Satisfied Clients</h3>
                <p className="text-gray-600 mb-4">
                  See how our solutions have helped businesses across various industries achieve their goals and drive innovation.
                </p>
                <Link to="/case-studies" className="text-reelred font-medium hover:underline inline-flex items-center">
                  View Case Studies
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">What Happens Next?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              After you reach out to us, here's what you can expect in our collaboration process.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Initial Consultation",
                  description: "We'll schedule a call to discuss your needs and how we can help."
                },
                {
                  step: "2",
                  title: "Custom Proposal",
                  description: "Our team will create a tailored solution proposal for your review."
                },
                {
                  step: "3",
                  title: "Development",
                  description: "Once approved, we'll begin developing your custom solution."
                },
                {
                  step: "4",
                  title: "Ongoing Support",
                  description: "We provide continuous support to ensure optimal performance."
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                    <div className="bg-gradient-to-r from-reelred to-reelblack text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-gray-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
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
                    Phone: +1 (123) 456-7890<br />
                    Email: info@aicompany.com
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
