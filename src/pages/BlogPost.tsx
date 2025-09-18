import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Calendar, User, ArrowRight, Tag, ArrowLeft,
  MessageCircle, Share2, ThumbsUp, Eye, Bookmark,
  Facebook, Twitter, Linkedin, Mail, Copy, Check,
  Clock, ChevronRight
} from 'lucide-react';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import LazyImage from '@/components/LazyImage';
import { getOptimizedImageUrl } from '@/utils/imageOptimization';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import FloatingElement from '@/components/FloatingElement';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [copied, setCopied] = useState(false);
  const [commentName, setCommentName] = useState('');
  const [commentEmail, setCommentEmail] = useState('');
  const [commentContent, setCommentContent] = useState('');

  // Mock blog posts data - in a real app, this would come from an API
  const blogPosts = [
    {
      id: 'ai-business-transformation',
      title: 'How AI is Transforming Business Operations in 2023',
      excerpt: 'Discover how artificial intelligence is revolutionizing business processes and creating new opportunities for growth and efficiency.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000',
      date: 'October 15, 2023',
      author: {
        name: 'Sarah Johnson',
        role: 'AI Specialist',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
        bio: 'Expert in artificial intelligence and machine learning applications for business.'
      },
      category: 'Artificial Intelligence',
      tags: ['AI', 'Business', 'Digital Transformation'],
      readTime: '8 min read',
      views: 1240,
      likes: 89,
      comments: 15,
      content: `
        <p class="lead">Artificial Intelligence (AI) is no longer a futuristic concept but a present-day reality that's reshaping how businesses operate across industries.</p>
        
        <p>In 2023, we're witnessing an unprecedented acceleration in AI adoption as companies seek to gain competitive advantages, streamline operations, and deliver enhanced customer experiences. This article explores the transformative impact of AI on business operations and highlights key trends that are defining this technological revolution.</p>
        
        <h2>The Evolution of AI in Business</h2>
        
        <p>The journey of AI in business has been remarkable. What began as simple rule-based automation has evolved into sophisticated systems capable of learning, reasoning, and making complex decisions. Today's AI technologies can analyze vast amounts of data, recognize patterns, and generate insights that would be impossible for humans to discover manually.</p>
        
        <p>This evolution has been driven by advancements in several key areas:</p>
        
        <ul>
          <li><strong>Machine Learning:</strong> Algorithms that improve automatically through experience</li>
          <li><strong>Natural Language Processing:</strong> Enabling computers to understand and respond to human language</li>
          <li><strong>Computer Vision:</strong> Allowing machines to interpret and make decisions based on visual data</li>
          <li><strong>Predictive Analytics:</strong> Forecasting future outcomes based on historical data</li>
        </ul>
        
        <h2>Key Areas of AI Impact in Business Operations</h2>
        
        <h3>1. Customer Experience Enhancement</h3>
        
        <p>AI is revolutionizing how businesses interact with customers. Chatbots and virtual assistants provide 24/7 customer support, handling routine inquiries and freeing human agents to address more complex issues. AI-powered recommendation engines analyze customer behavior to deliver personalized product suggestions, significantly improving conversion rates and customer satisfaction.</p>
        
        <h3>2. Process Automation and Efficiency</h3>
        
        <p>Robotic Process Automation (RPA) combined with AI is eliminating repetitive tasks across departments. From invoice processing in finance to candidate screening in HR, intelligent automation is reducing errors, cutting costs, and accelerating workflows. Companies implementing these solutions report efficiency improvements of 40-60% in targeted processes.</p>
        
        <h3>3. Data-Driven Decision Making</h3>
        
        <p>AI's ability to analyze massive datasets and extract actionable insights is transforming business decision-making. Advanced analytics platforms can now process structured and unstructured data from diverse sources, providing executives with comprehensive views of their operations, markets, and competitive landscapes.</p>
        
        <h3>4. Supply Chain Optimization</h3>
        
        <p>The complexity of modern supply chains makes them ideal candidates for AI enhancement. Machine learning algorithms can forecast demand with greater accuracy, optimize inventory levels, and predict potential disruptions before they occur. During recent global supply chain challenges, companies leveraging AI demonstrated significantly greater resilience than their peers.</p>
      `
    },
    // Other blog posts would be defined here
  ];

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchPost = () => {
      setLoading(true);
      setTimeout(() => {
        const foundPost = blogPosts.find(post => post.id === id);
        if (foundPost) {
          setPost(foundPost);
          // Find related posts (in a real app, this would be more sophisticated)
          const related = blogPosts
            .filter(p => p.id !== id && (
              p.category === foundPost.category || 
              p.tags.some(tag => foundPost.tags.includes(tag))
            ))
            .slice(0, 3);
          setRelatedPosts(related);
        } else {
          navigate('/blog');
        }
        setLoading(false);
      }, 500);
    };

    if (id) {
      fetchPost();
    }
  }, [id, navigate]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the comment to an API
    toast({
      title: "Comment Submitted",
      description: "Your comment has been submitted for review.",
    });
    setCommentName('');
    setCommentEmail('');
    setCommentContent('');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-cyberpink">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-cyberpink hover:underline">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO
        title={`${post.title} - ReelFace Blog`}
        description={post.excerpt}
      />

      {/* Blog Post Hero */}
      <section className="pt-20 pb-10 bg-gradient-to-r from-cyberpink/5 to-cyberpurple/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-cyberpink mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              <Link 
                to={`/blog?category=${post.category}`} 
                className="bg-cyberpink text-white text-sm px-3 py-1 rounded-full hover:bg-cyberpink/90"
              >
                {post.category}
              </Link>
              {post.tags.map((tag: string, index: number) => (
                <Link 
                  key={index}
                  to={`/blog?tag=${tag}`}
                  className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-gray-200"
                >
                  {tag}
                </Link>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex items-center flex-wrap gap-4 text-sm text-gray-600 mb-8">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                <span>{post.views} views</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-1" />
                <span>{post.comments} comments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <section className="py-10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              {/* Featured Image */}
              <div className="rounded-xl overflow-hidden mb-8">
                <LazyImage
                  src={getOptimizedImageUrl(post.image, 1200, 85)}
                  alt={post.title}
                  className="w-full"
                  aspectRatio="aspect-[16/9]"
                />
              </div>

              {/* Author Info */}
              <div className="flex items-center mb-8 p-4 bg-gray-50 rounded-lg">
                <Avatar className="h-12 w-12 mr-4 border-2 border-cyberpink">
                  <AvatarImage src={post.author.image} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-sm text-gray-500">{post.author.role}</div>
                </div>
              </div>

              {/* Article Content */}
              <article className="prose prose-lg max-w-none mb-10" dangerouslySetInnerHTML={{ __html: post.content }} />

              {/* Article Footer */}
              <div className="border-t border-gray-200 pt-6 mt-10">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <ThumbsUp className="h-4 w-4" />
                      Like ({post.likes})
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Bookmark className="h-4 w-4" />
                      Save
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Share:</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-blue-100 text-blue-600">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-sky-100 text-sky-500">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-blue-100 text-blue-700">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-gray-100 text-gray-700">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 rounded-full bg-gray-100 text-gray-700"
                      onClick={handleCopyLink}
                    >
                      {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Comments ({post.comments})</h3>
                
                <Tabs defaultValue="comments">
                  <TabsList className="mb-6">
                    <TabsTrigger value="comments">Comments</TabsTrigger>
                    <TabsTrigger value="write">Write a Comment</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="comments">
                    <div className="space-y-6">
                      {/* This would be populated with actual comments in a real app */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <div className="font-medium">John Doe</div>
                              <div className="text-xs text-gray-500">2 days ago</div>
                            </div>
                            <p className="text-gray-700 mb-2">
                              Great article! I've been implementing some of these AI solutions in my company and the results have been impressive.
                            </p>
                            <div className="flex items-center gap-4 text-sm">
                              <button className="text-gray-500 hover:text-cyberpink flex items-center gap-1">
                                <ThumbsUp className="h-3 w-3" />
                                <span>12</span>
                              </button>
                              <button className="text-gray-500 hover:text-cyberpink">Reply</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100" />
                            <AvatarFallback>AS</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <div className="font-medium">Alice Smith</div>
                              <div className="text-xs text-gray-500">5 days ago</div>
                            </div>
                            <p className="text-gray-700 mb-2">
                              I'd love to see more examples of how small businesses can leverage AI without breaking the bank. Any suggestions?
                            </p>
                            <div className="flex items-center gap-4 text-sm">
                              <button className="text-gray-500 hover:text-cyberpink flex items-center gap-1">
                                <ThumbsUp className="h-3 w-3" />
                                <span>8</span>
                              </button>
                              <button className="text-gray-500 hover:text-cyberpink">Reply</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="write">
                    <form onSubmit={handleCommentSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                          <Input 
                            id="name" 
                            value={commentName}
                            onChange={(e) => setCommentName(e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <Input 
                            id="email" 
                            type="email"
                            value={commentEmail}
                            onChange={(e) => setCommentEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
                        <Textarea 
                          id="comment" 
                          rows={5}
                          value={commentContent}
                          onChange={(e) => setCommentContent(e.target.value)}
                          required
                        />
                      </div>
                      <Button type="submit" className="button-primary">
                        Post Comment
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <div className="lg:col-span-4">
              {/* Author Bio */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">About the Author</h3>
                <div className="flex items-center mb-4">
                  <Avatar className="h-16 w-16 mr-4 border-2 border-cyberpink">
                    <AvatarImage src={post.author.image} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-lg">{post.author.name}</div>
                    <div className="text-cyberpink">{post.author.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{post.author.bio}</p>
                <Button variant="outline" className="w-full">
                  View All Posts
                </Button>
              </div>

              {/* Related Posts */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.length > 0 ? (
                    relatedPosts.map((relatedPost, index) => (
                      <Link key={index} to={`/blog/${relatedPost.id}`} className="block group">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden">
                            <LazyImage
                              src={getOptimizedImageUrl(relatedPost.image, 200, 85)}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800 group-hover:text-cyberpink transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <div className="flex items-center text-xs text-gray-500 mt-1">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>{relatedPost.date}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-gray-500">No related articles found.</p>
                  )}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-cyberpink/10 to-cyberpurple/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600 mb-4">Get the latest articles and industry updates delivered to your inbox.</p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Your email address"
                  />
                  <Button className="w-full button-primary">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold">More Articles</h2>
            <Link to="/blog" className="text-cyberpink font-medium hover:underline flex items-center">
              View All Articles
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, index) => (
              <FloatingElement
                key={index}
                delay={index * 0.1}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <Link to={`/blog/${post.id}`} className="block group">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <LazyImage
                      src={getOptimizedImageUrl(post.image, 600, 85)}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-cyberpink text-white text-xs font-medium px-2 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyberpink transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="inline-flex items-center text-cyberpink font-medium">
                      Read Article
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </FloatingElement>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
