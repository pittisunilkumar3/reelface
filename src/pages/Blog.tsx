import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Calendar, User, ArrowRight, Tag,
  ChevronDown, BookOpen, Bookmark, TrendingUp,
  MessageCircle, Share2, ThumbsUp, Eye, Sparkles,
  Cloud, ShieldCheck, Code, Smartphone, GitBranch, BarChart,
  TrendingDown, Minus, Award, Users, Clock, Newspaper, Rss
} from 'lucide-react';
import SEO from '@/components/SEO';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import LazyImage from '@/components/LazyImage';
import { getOptimizedImageUrl } from '@/utils/imageOptimization';
import HexagonNetwork from '@/components/HexagonNetwork';

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

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 'ai-business-transformation',
      title: 'How AI is Transforming Business Operations in 2023',
      excerpt: 'Discover how artificial intelligence is revolutionizing business processes and creating new opportunities for growth and efficiency.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000',
      date: 'October 15, 2023',
      author: 'Sarah Johnson',
      category: 'Artificial Intelligence',
      tags: ['AI', 'Business', 'Digital Transformation']
    },
    {
      id: 'cloud-computing-trends',
      title: 'Top 5 Cloud Computing Trends to Watch in 2023',
      excerpt: 'Stay ahead of the curve with these emerging cloud computing trends that are shaping the future of IT infrastructure.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000',
      date: 'October 8, 2023',
      author: 'Michael Rodriguez',
      category: 'Cloud Computing',
      tags: ['Cloud', 'Technology Trends', 'Infrastructure']
    },
    {
      id: 'cybersecurity-best-practices',
      title: 'Essential Cybersecurity Best Practices for Remote Teams',
      excerpt: 'Protect your organization from cyber threats with these essential security practices designed for distributed workforces.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1000',
      date: 'September 30, 2023',
      author: 'David Chen',
      category: 'Cybersecurity',
      tags: ['Security', 'Remote Work', 'Data Protection']
    },
    {
      id: 'machine-learning-applications',
      title: 'Practical Applications of Machine Learning in Healthcare',
      excerpt: 'Explore how machine learning is improving patient outcomes and revolutionizing healthcare delivery systems.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000',
      date: 'September 22, 2023',
      author: 'Priya Patel',
      category: 'Machine Learning',
      tags: ['Healthcare', 'ML', 'Innovation']
    },
    {
      id: 'web-development-frameworks',
      title: 'Comparing Modern Web Development Frameworks in 2023',
      excerpt: 'An in-depth analysis of the most popular web development frameworks and how to choose the right one for your project.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1000',
      date: 'September 15, 2023',
      author: 'Alex Thompson',
      category: 'Web Development',
      tags: ['Frontend', 'Frameworks', 'JavaScript']
    },
    {
      id: 'devops-implementation',
      title: 'Implementing DevOps: A Step-by-Step Guide for IT Teams',
      excerpt: 'Learn how to successfully implement DevOps practices in your organization with this comprehensive guide.',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=1000',
      date: 'September 8, 2023',
      author: 'James Wilson',
      category: 'DevOps',
      tags: ['CI/CD', 'Automation', 'IT Operations']
    }
  ];

  const categories = [
    { name: 'Artificial Intelligence', icon: <Sparkles className="h-4 w-4" />, count: 12 },
    { name: 'Machine Learning', icon: <BookOpen className="h-4 w-4" />, count: 8 },
    { name: 'Cloud Computing', icon: <Cloud className="h-4 w-4" />, count: 10 },
    { name: 'Cybersecurity', icon: <ShieldCheck className="h-4 w-4" />, count: 15 },
    { name: 'Web Development', icon: <Code className="h-4 w-4" />, count: 9 },
    { name: 'Mobile Development', icon: <Smartphone className="h-4 w-4" />, count: 7 },
    { name: 'DevOps', icon: <GitBranch className="h-4 w-4" />, count: 6 },
    { name: 'Data Analytics', icon: <BarChart className="h-4 w-4" />, count: 11 }
  ];

  // Featured authors
  const featuredAuthors = [
    {
      name: 'Sarah Johnson',
      role: 'AI Specialist',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      articles: 15,
      bio: 'Expert in artificial intelligence and machine learning applications.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Cloud Architect',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      articles: 12,
      bio: 'Specializes in cloud infrastructure and distributed systems.'
    },
    {
      name: 'Priya Patel',
      role: 'Healthcare Tech',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
      articles: 9,
      bio: 'Focuses on healthcare technology innovations.'
    }
  ];

  // Trending topics
  const trendingTopics = [
    { name: 'Generative AI', count: 24, trend: 'up' },
    { name: 'Zero Trust Security', count: 18, trend: 'up' },
    { name: 'Edge Computing', count: 15, trend: 'up' },
    { name: 'Quantum Computing', count: 12, trend: 'new' },
    { name: 'Blockchain', count: 10, trend: 'stable' }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen">
      <SEO
        title="Blog - ReelFace"
        description="Stay updated with the latest insights, trends, and best practices in digital media, video production, and content creation."
      />

      {/* Blog Hero Section */}
      <section className="bg-gradient-to-r from-reelred-500 to-reelblack-800 text-white py-20 md:py-28 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-reelwhite-400/20 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-reelblack-400/30 blur-3xl animate-pulse-slow animation-delay-1000"></div>
          <div className="absolute top-3/4 left-1/3 w-40 h-40 rounded-full bg-white/10 blur-2xl animate-pulse-slow animation-delay-2000"></div>
        </div>

        {/* Hexagon Network Animation */}
        <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none">
          <HexagonNetwork width={1200} height={600} nodeCount={30} />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:col-span-2 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6 animate-pulse-slow">
                <span className="mr-2 bg-white text-reelred p-1 rounded-full">
                  <Sparkles className="h-3 w-3" />
                </span>
                Latest Insights & Trends
              </div>

              <h1 className="heading-xl mb-6 relative">
                <span className="relative inline-block">
                  <span className="relative z-10">Our Blog</span>
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-reelwhite/30 rounded-full -z-10 transform -rotate-1"></span>
                </span>
              </h1>

              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Stay updated with the latest insights, trends, and best practices in digital media, video production, and content creation from our team of experts.
              </p>

              {/* Feature badges */}
              <div className="flex flex-wrap gap-3 mb-8 justify-center">
                {[
                  { icon: <BookOpen className="h-4 w-4" />, text: "Expert Articles" },
                  { icon: <TrendingUp className="h-4 w-4" />, text: "Industry Trends" },
                  { icon: <Bookmark className="h-4 w-4" />, text: "Helpful Guides" }
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

              {/* Search Bar */}
              <div className="max-w-md mx-auto relative mb-8">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white shadow-lg transition-all duration-300 hover:shadow-xl"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
              </div>

              <div className="flex justify-center">
                <Link
                  to="#blog-content"
                  className="bg-white text-reelred hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg group inline-flex items-center"
                >
                  Browse Articles
                  <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
                </Link>
              </div>
            </div>
          </div>

          {/* Featured posts preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {blogPosts.slice(0, 3).map((post, index) => (
              <FloatingElement
                key={index}
                delay={index * 0.2}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="h-40 relative">
                  <LazyImage
                    src={getOptimizedImageUrl(post.image, 600, 85)}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-cyberpink text-white text-xs font-medium px-2 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-1">{post.title}</h3>
                  <div className="flex items-center text-xs text-white/70 mb-2">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-white font-medium inline-flex items-center text-sm hover:underline"
                  >
                    Read Article
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </FloatingElement>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 animate-bounce">
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <ChevronDown className="h-5 w-5" />
        </div>
      </section>

      {/* Blog Content */}
      <section id="blog-content" className="section bg-gray-50">
        <div className="container-custom max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        to={`#${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-gray-700 hover:text-cyberpink flex items-center justify-between group"
                        onClick={() => setSearchQuery(category.name)}
                      >
                        <div className="flex items-center">
                          <span className="mr-2 text-cyberpink opacity-80 group-hover:opacity-100">
                            {category.icon}
                          </span>
                          <span>{category.name}</span>
                        </div>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full group-hover:bg-cyberpink/10 group-hover:text-cyberpink transition-colors">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Trending Topics */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-cyberpink" />
                    Trending Topics
                  </h3>
                  <ul className="space-y-3">
                    {trendingTopics.map((topic, index) => (
                      <li key={index}>
                        <button
                          onClick={() => setSearchQuery(topic.name)}
                          className="w-full text-left"
                        >
                          <div className="flex items-center justify-between group hover:bg-gray-50 p-2 rounded-lg transition-colors">
                            <span className="font-medium text-gray-800 group-hover:text-cyberpink">
                              {topic.name}
                            </span>
                            <div className="flex items-center">
                              <span className="text-xs text-gray-500 mr-2">{topic.count} posts</span>
                              {topic.trend === 'up' && (
                                <TrendingUp className="h-3 w-3 text-green-500" />
                              )}
                              {topic.trend === 'down' && (
                                <TrendingDown className="h-3 w-3 text-red-500" />
                              )}
                              {topic.trend === 'stable' && (
                                <Minus className="h-3 w-3 text-gray-500" />
                              )}
                              {topic.trend === 'new' && (
                                <span className="text-xs bg-cyberpink text-white px-1.5 py-0.5 rounded-full">New</span>
                              )}
                            </div>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Blog Stats */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <BarChart className="h-5 w-5 mr-2 text-cyberpink" />
                    Blog Stats
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Newspaper className="h-4 w-4 mr-2 text-cyberpink" />
                        <span className="text-gray-700">Total Articles</span>
                      </div>
                      <span className="font-semibold">{blogPosts.length}</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-cyberpink" />
                        <span className="text-gray-700">Authors</span>
                      </div>
                      <span className="font-semibold">{featuredAuthors.length}</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Tag className="h-4 w-4 mr-2 text-cyberpink" />
                        <span className="text-gray-700">Categories</span>
                      </div>
                      <span className="font-semibold">{categories.length}</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-cyberpink" />
                        <span className="text-gray-700">Last Updated</span>
                      </div>
                      <span className="font-semibold">Today</span>
                    </div>
                  </div>
                </div>

                {/* Subscribe */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Rss className="h-5 w-5 mr-2 text-cyberpink" />
                    Subscribe
                  </h3>
                  <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 p-4 rounded-lg mb-4">
                    <p className="text-gray-700 mb-4">Get the latest articles delivered to your inbox. No spam, just quality content.</p>
                    <div className="space-y-3">
                      <Input
                        type="email"
                        placeholder="Your email address"
                      />
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>✓</span>
                        <span>Weekly newsletter</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>✓</span>
                        <span>Exclusive content</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>✓</span>
                        <span>Unsubscribe anytime</span>
                      </div>
                      <Button className="w-full button-primary mt-2">
                        Subscribe Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              {filteredPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
                      <div className="aspect-[16/9] relative">
                        <LazyImage
                          src={getOptimizedImageUrl(post.image, 800, 85)}
                          alt={post.title}
                          className="w-full h-full"
                          objectFit="object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-cyberpink text-white text-xs font-medium px-2 py-1 rounded-full">
                          {post.category}
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="mr-4">{post.date}</span>
                          <User className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                        </div>

                        <h3 className="text-xl font-bold mb-2 hover:text-cyberpink transition-colors">
                          <Link to={`/blog/${post.id}`}>
                            {post.title}
                          </Link>
                        </h3>

                        <p className="text-gray-600 mb-4">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
                              onClick={() => setSearchQuery(tag)}
                              style={{ cursor: 'pointer' }}
                            >
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Link
                          to={`/blog/${post.id}`}
                          className="text-cyberpink font-medium inline-flex items-center hover:underline"
                        >
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                  <h3 className="text-xl font-bold mb-2">No articles found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any articles matching your search criteria.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSearchQuery('')}
                    className="border-cyberpink text-cyberpink hover:bg-cyberpink/10"
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </div>

          </div>

          {/* Featured Authors Section */}
          {!searchQuery && (
            <div className="mt-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Featured Authors</h2>
                <Link to="#" className="text-cyberpink font-medium hover:underline flex items-center">
                  View All Authors
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {featuredAuthors.map((author, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="mr-4 flex-shrink-0">
                          <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-cyberpink">
                            <LazyImage
                              src={getOptimizedImageUrl(author.image, 200, 90)}
                              alt={author.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-bold text-lg truncate">{author.name}</h3>
                          <p className="text-cyberpink text-sm truncate">{author.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">{author.bio}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{author.articles} articles</span>
                        <Link to="#" className="text-cyberpink font-medium hover:underline flex items-center text-sm whitespace-nowrap">
                          View Profile
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Blog Topics Grid */}
          {!searchQuery && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">Explore Topics</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchQuery(category.name)}
                    className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-cyberpink/5 hover:to-cyberpurple/5 group h-full"
                  >
                    <div className="bg-cyberpink/10 h-14 w-14 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-cyberpink/20 transition-colors">
                      <span className="text-cyberpink scale-150">
                        {category.icon}
                      </span>
                    </div>
                    <h3 className="font-medium text-gray-800 group-hover:text-cyberpink transition-colors text-sm sm:text-base truncate">{category.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{category.count} articles</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-reelred to-reelblack text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Have a Topic in Mind?</h2>
            <p className="text-lg opacity-90 mb-8">
              We're always looking for new topics to cover. Let us know what you'd like to read about.
            </p>
            <Link to="/contact" className="button-primary bg-white hover:bg-gray-100 text-reelred">
              Suggest a Topic
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
