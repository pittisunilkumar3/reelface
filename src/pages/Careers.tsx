import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, MapPin, Briefcase, Clock, Search, Filter,
  ChevronDown, Users, Code, Brain, Zap, Heart, Star,
  Sparkles, Award, Rocket, Building, Globe, LightbulbIcon
} from 'lucide-react';
import SEO from '@/components/SEO';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LazyImage from '@/components/LazyImage';
import { getOptimizedImageUrl } from '@/utils/imageOptimization';
import HexagonNetwork from '@/components/HexagonNetwork';

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / duration, 1);
      setCount(Math.floor(progressPercent * end));

      if (progressPercent < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [end, duration, isVisible]);

  return <span ref={countRef}>{count}</span>;
};

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

// Typing animation component
const TypingAnimation = ({ texts, typingSpeed = 150, deletingSpeed = 75, pauseTime = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Current text from the array
      const fullText = texts[currentTextIndex];

      // If deleting
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        // If typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      // Transition logic
      if (!isDeleting && currentText === fullText) {
        // Finished typing, pause before deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === '') {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="text-gradient bg-gradient-to-r from-reelred to-reelblack">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Careers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  const jobOpenings = [
    {
      id: 'senior-ai-engineer',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'We are looking for a Senior AI Engineer to join our team and help develop cutting-edge AI solutions for our clients.',
      requirements: [
        "Bachelor\'s degree in Computer Science, Engineering or related field",
        '5+ years of experience in AI/ML development',
        'Strong programming skills in Python and TensorFlow/PyTorch',
        'Experience with deep learning and neural networks',
        'Excellent problem-solving and communication skills'
      ]
    },
    {
      id: 'frontend-developer',
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Join our engineering team to build beautiful, responsive user interfaces for our AI-powered applications.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of experience in frontend development',
        'Proficiency in React, TypeScript, and modern CSS',
        'Experience with responsive design and cross-browser compatibility',
        'Knowledge of web performance optimization techniques'
      ]
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'We\'re seeking a DevOps Engineer to help us build and maintain our cloud infrastructure and CI/CD pipelines.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of experience in DevOps or SRE roles',
        'Experience with AWS, Kubernetes, and Docker',
        'Knowledge of Infrastructure as Code (Terraform, CloudFormation)',
        'Experience with CI/CD tools (Jenkins, GitHub Actions)'
      ]
    },
    {
      id: 'product-manager',
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'We are looking for a Product Manager to help define and execute our product strategy and roadmap.',
      requirements: [
        'Bachelor\'s degree in Business, Computer Science, or related field',
        '4+ years of experience in product management',
        'Experience with agile development methodologies',
        'Strong analytical and problem-solving skills',
        'Excellent communication and stakeholder management skills'
      ]
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      department: 'Data',
      location: 'Remote',
      type: 'Full-time',
      description: 'Join our data team to help extract insights from complex datasets and develop predictive models.',
      requirements: [
        'Master\'s or PhD in Computer Science, Statistics, or related field',
        '3+ years of experience in data science',
        'Strong programming skills in Python and R',
        'Experience with machine learning and statistical modeling',
        'Knowledge of data visualization tools and techniques'
      ]
    },
    {
      id: 'sales-executive',
      title: 'Sales Executive',
      department: 'Sales',
      location: 'Chicago, IL',
      type: 'Full-time',
      description: 'We are looking for a Sales Executive to help us grow our client base and drive revenue.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        '5+ years of experience in B2B sales',
        'Experience selling technology or SaaS products',
        'Strong negotiation and relationship-building skills',
        'Track record of meeting or exceeding sales targets'
      ]
    }
  ];

  const departments = ['Engineering', 'Product', 'Data', 'Sales', 'Marketing', 'HR'];
  const locations = ['San Francisco, CA', 'New York, NY', 'Chicago, IL', 'Remote'];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDepartment = departmentFilter === 'all' || job.department === departmentFilter;
    const matchesLocation = locationFilter === 'all' || job.location === locationFilter;

    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'We offer competitive salaries and equity packages to attract and retain top talent.',
      icon: '💰'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your dependents.',
      icon: '🏥'
    },
    {
      title: 'Flexible Work',
      description: 'Remote-friendly environment with flexible working hours to maintain work-life balance.',
      icon: '🏠'
    },
    {
      title: 'Professional Growth',
      description: 'Continuous learning opportunities, conference stipends, and career development programs.',
      icon: '📈'
    },
    {
      title: 'Paid Time Off',
      description: 'Generous vacation policy, paid holidays, and parental leave to recharge and spend time with family.',
      icon: '🏖️'
    },
    {
      title: 'Team Events',
      description: 'Regular team outings, retreats, and social events to foster collaboration and camaraderie.',
      icon: '🎉'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Careers - ReelFace"
        description="Join our team of innovators and help shape the future of AI and technology. Explore current job openings and benefits."
      />

      {/* Careers Hero Section */}
      <section className="bg-gradient-to-r from-reelred-500 to-reelblack-800 text-white py-20 md:py-28 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-reelwhite/20 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-reelred-400/30 blur-3xl animate-pulse-slow animation-delay-1000"></div>
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
                Join a Team of Innovators
              </div>

              <h1 className="heading-xl mb-6 relative">
                <span className="relative">
                  Join Our Team of <TypingAnimation texts={["Innovators", "Creators", "Problem Solvers", "Visionaries", "Tech Enthusiasts"]} />
                </span>
              </h1>

              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                We're building a team of passionate individuals who are driven to use technology to solve complex problems and create meaningful impact in the world.
              </p>

              {/* Feature badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: <Rocket className="h-4 w-4" />, text: "Fast-paced Environment" },
                  { icon: <Brain className="h-4 w-4" />, text: "Innovative Culture" },
                  { icon: <Globe className="h-4 w-4" />, text: "Global Impact" }
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
                  to="#openings"
                  className="button-primary bg-white text-reelred hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="#culture"
                  className="bg-white/10 hover:bg-white/20 transition-all text-white font-semibold py-3 px-6 rounded-md inline-flex items-center hover:shadow-lg transform hover:-translate-y-1"
                >
                  Our Culture
                  <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
                </Link>
              </div>

              {/* Company stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                {[
                  { value: 50, label: "Team Members", icon: <Users className="h-5 w-5" /> },
                  { value: 15, label: "Countries", icon: <Globe className="h-5 w-5" /> },
                  { value: 8, label: "Years of Innovation", icon: <Rocket className="h-5 w-5" /> }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center transform transition-all duration-300 hover:bg-white/15"
                  >
                    <div className="flex justify-center mb-1 text-white/80">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold">
                      <AnimatedCounter end={stat.value} />+
                    </div>
                    <p className="text-xs text-white/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <FloatingElement className="relative z-10">
                <div className="relative">
                  {/* Decorative background shapes */}
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyberpink/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyberpurple/20 rounded-full blur-xl"></div>

                  {/* Main image */}
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 relative z-10 shadow-xl border border-white/10">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <div className="rounded-lg overflow-hidden bg-cyberpink/10 aspect-[4/3]">
                          <LazyImage
                            src={getOptimizedImageUrl("https://images.unsplash.com/photo-1522071820081-009f0129c71c", 600, 85)}
                            alt="Team collaboration"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="rounded-lg overflow-hidden bg-cyberpurple/10 aspect-[4/3]">
                          <LazyImage
                            src={getOptimizedImageUrl("https://images.unsplash.com/photo-1600880292203-757bb62b4baf", 600, 85)}
                            alt="Office environment"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="rounded-lg overflow-hidden bg-cyberpurple/10 aspect-square">
                        <LazyImage
                          src={getOptimizedImageUrl("https://images.unsplash.com/photo-1543269865-cbf427effbad", 600, 85)}
                          alt="Team meeting"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Testimonial overlay */}
                    <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
                      <div className="flex items-start mb-2">
                        <div className="w-10 h-10 rounded-full overflow-hidden mr-3 shrink-0">
                          <LazyImage
                            src={getOptimizedImageUrl("https://randomuser.me/api/portraits/women/44.jpg", 100, 90)}
                            alt="Employee"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm">Sarah Johnson</h4>
                          <p className="text-xs text-gray-600">Senior AI Engineer, 3 years</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 italic">
                        "Joining this team was the best career decision I've made. The culture of innovation and support is unmatched."
                      </p>
                      <div className="flex text-cyberpink mt-1">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <FloatingElement delay={0.7} className="absolute -top-4 -left-4 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-20">
                    <Heart className="h-6 w-6 text-cyberpink" />
                  </FloatingElement>

                  <FloatingElement delay={1.5} className="absolute -bottom-4 -left-8 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center z-20">
                    <Award className="h-5 w-5 text-cyberpurple" />
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

      {/* Culture Section */}
      <section id="culture" className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Our Culture</h2>
              <p className="text-gray-700 mb-4">
                At ReelFace, we believe that great products are built by great teams. We foster a culture of innovation, collaboration, and continuous learning where everyone's voice is heard and valued.
              </p>
              <p className="text-gray-700 mb-4">
                We're committed to creating an inclusive environment where diverse perspectives are celebrated and where everyone has the opportunity to grow both personally and professionally.
              </p>
              <p className="text-gray-700">
                Our team is driven by a shared mission to use technology to solve meaningful problems and make a positive impact on the world.
              </p>
            </div>
            <div className="relative">
              <LazyImage
                src={getOptimizedImageUrl("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000", 1200, 85)}
                alt="Team collaboration"
                className="rounded-xl shadow-lg"
                objectFit="object-cover"
                aspectRatio="aspect-[4/3]"
              />
              <div className="absolute -z-10 -bottom-5 -right-5 w-full h-full bg-cyberpink/5 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Benefits & Perks</h2>
            <p className="text-gray-600 text-lg">
              We offer a comprehensive benefits package designed to support your health, wealth, and happiness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Current Openings</h2>
            <p className="text-gray-600 text-lg">
              Explore our current job openings and find the perfect role for your skills and interests.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search positions..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>

              <div>
                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    {departments.map((dept, index) => (
                      <SelectItem key={index} value={dept}>{dept}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    {locations.map((loc, index) => (
                      <SelectItem key={index} value={loc}>{loc}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          {filteredJobs.length > 0 ? (
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                      <span className="inline-flex items-center text-sm bg-cyberpink/10 text-cyberpink px-3 py-1 rounded-full">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {job.department}
                      </span>
                      <span className="inline-flex items-center text-sm bg-cyberpurple/10 text-cyberpurple px-3 py-1 rounded-full">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{job.description}</p>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {job.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/careers/${job.id}`}
                    className="button-primary"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <h3 className="text-xl font-bold mb-2">No positions found</h3>
              <p className="text-gray-600 mb-4">
                We couldn't find any positions matching your search criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setDepartmentFilter('all');
                  setLocationFilter('all');
                }}
                className="border-cyberpink text-cyberpink hover:bg-cyberpink/10"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-reelred to-reelblack text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Don't See the Right Fit?</h2>
            <p className="text-lg opacity-90 mb-8">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Link to="/contact" className="button-primary bg-white hover:bg-gray-100 text-reelred">
              Send Your Resume
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
