import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { BlogPosts } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { format } from 'date-fns';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPosts[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasNext, setHasNext] = useState(false);
  const [skip, setSkip] = useState(0);
  const limit = 9;

  useEffect(() => {
    loadPosts();
  }, [skip]);

  const loadPosts = async () => {
    setIsLoading(true);
    try {
      const result = await BaseCrudService.getAll<BlogPosts>('blogposts', [], { limit, skip });
      setPosts(prev => skip === 0 ? result.items : [...prev, ...result.items]);
      setHasNext(result.hasNext);
    } catch (error) {
      console.error('Error loading blog posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    setSkip(prev => prev + limit);
  };

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '';
    try {
      return format(new Date(date), 'MMMM dd, yyyy');
    } catch {
      return '';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-secondary py-24">
        <div className="max-w-[100rem] mx-auto px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-6xl md:text-7xl text-charcoal mb-8"
          >
            Our Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-paragraph text-xl text-foreground/80 max-w-4xl mx-auto"
          >
            Industry insights, equipment guides, and expert advice for beauty professionals
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="w-full bg-white py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ minHeight: isLoading && skip === 0 ? '800px' : 'auto' }}>
            {isLoading && skip === 0 ? null : posts.length > 0 ? (
              posts.map((post, index) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index % 9) * 0.05 }}
                >
                  <Link to={`/blog/${post._id}`}>
                    <Card className="bg-background border-0 overflow-hidden h-full flex flex-col group hover:shadow-lg transition-shadow duration-300">
                      {post.coverImage && (
                        <div className="relative h-64 overflow-hidden">
                          <Image 
                            src={post.coverImage} 
                            alt={post.postTitle || 'Blog post cover'}
                            width={400}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 mb-4 text-sm text-foreground/60">
                          {post.publishDate && (
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span className="font-paragraph">{formatDate(post.publishDate)}</span>
                            </div>
                          )}
                          {post.author && (
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              <span className="font-paragraph">{post.author}</span>
                            </div>
                          )}
                        </div>
                        <h3 className="font-heading text-2xl text-charcoal mb-4 group-hover:text-primary transition-colors">
                          {post.postTitle}
                        </h3>
                        {post.content && (
                          <p className="font-paragraph text-base text-foreground/70 mb-6 flex-grow line-clamp-3">
                            {post.content}
                          </p>
                        )}
                        <div className="flex items-center gap-2 text-primary font-paragraph text-base">
                          Read More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <p className="font-paragraph text-xl text-foreground/60">
                  No blog posts available yet
                </p>
              </div>
            )}
          </div>

          {/* Load More Button */}
          {hasNext && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button 
                onClick={handleLoadMore}
                disabled={isLoading}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-paragraph text-lg px-10 py-6 rounded transition-all duration-300"
              >
                {isLoading ? 'Loading...' : 'Load More Posts'}
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
