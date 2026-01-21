import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { BaseCrudService } from '@/integrations';
import { BlogPosts } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { format } from 'date-fns';

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPosts | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadPost();
    }
  }, [id]);

  const loadPost = async () => {
    try {
      const data = await BaseCrudService.getById<BlogPosts>('blogposts', id!);
      setPost(data);
    } catch (error) {
      console.error('Error loading blog post:', error);
    } finally {
      setIsLoading(false);
    }
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

      <div className="w-full bg-white py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="max-w-4xl mx-auto" style={{ minHeight: '600px' }}>
            {isLoading ? (
              <div className="flex items-center justify-center py-32">
                <LoadingSpinner />
              </div>
            ) : !post ? (
              <div className="text-center py-32">
                <h2 className="font-heading text-4xl text-charcoal mb-6">
                  Post Not Found
                </h2>
                <p className="font-paragraph text-lg text-foreground/70 mb-8">
                  The blog post you're looking for doesn't exist or has been removed.
                </p>
                <Link to="/blog">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-paragraph px-8 py-6 rounded transition-all duration-300">
                    Back to Blog
                  </Button>
                </Link>
              </div>
            ) : (
              <>
                {/* Back Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <Link to="/blog">
                    <Button 
                      variant="outline"
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-paragraph flex items-center gap-2 px-6 py-3 rounded transition-all duration-300"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back to Blog
                    </Button>
                  </Link>
                </motion.div>

                {/* Cover Image */}
                {post.coverImage && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 rounded-lg overflow-hidden"
                  >
                    <Image 
                      src={post.coverImage} 
                      alt={post.postTitle || 'Blog post cover'}
                      width={800}
                      className="w-full h-96 object-cover"
                    />
                  </motion.div>
                )}

                {/* Post Meta */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-center gap-6 mb-8 text-foreground/60"
                >
                  {post.publishDate && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span className="font-paragraph text-base">{formatDate(post.publishDate)}</span>
                    </div>
                  )}
                  {post.author && (
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      <span className="font-paragraph text-base">{post.author}</span>
                    </div>
                  )}
                </motion.div>

                {/* Post Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="font-heading text-5xl md:text-6xl text-charcoal mb-8"
                >
                  {post.postTitle}
                </motion.h1>

                {/* Post Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="font-paragraph text-lg text-foreground/80 leading-relaxed whitespace-pre-wrap"
                >
                  {post.content}
                </motion.div>

                {/* Back to Blog CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mt-16 pt-8 border-t border-secondary"
                >
                  <Link to="/blog">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-paragraph px-8 py-6 rounded transition-all duration-300 flex items-center gap-2">
                      <ArrowLeft className="w-4 h-4" />
                      View All Posts
                    </Button>
                  </Link>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
