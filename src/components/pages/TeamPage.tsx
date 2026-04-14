import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';

interface TeamMember {
  _id: string;
  name?: string;
  title?: string;
  bio?: string;
  profileImage?: string;
  linkedInUrl?: string;
}

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTeamMembers = async () => {
      try {
        const result = await BaseCrudService.getAll<TeamMember>('teammembers');
        setTeamMembers(result.items || []);
      } catch (error) {
        console.error('Error loading team members:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTeamMembers();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-charcoal to-charcoal/90 text-white py-24 md:py-40">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-3xl"
          >
            <h1 className="font-heading text-6xl md:text-8xl leading-tight">
              Meet Our Team
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-secondary max-w-2xl leading-relaxed">
              Passionate professionals dedicated to bringing premium spa equipment to the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="w-full py-20 md:py-32 bg-white">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          {isLoading ? (
            <div className="flex items-center justify-center min-h-96">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : teamMembers.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-6 group"
                >
                  {/* Profile Image */}
                  {member.profileImage && (
                    <div className="relative overflow-hidden rounded-lg aspect-square bg-secondary/20">
                      <Image
                        src={member.profileImage}
                        alt={member.name || 'Team member'}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        width={400}
                      />
                    </div>
                  )}

                  {/* Member Info */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-heading text-2xl text-charcoal">
                        {member.name}
                      </h3>
                      <p className="font-paragraph text-lg text-primary font-semibold">
                        {member.title}
                      </p>
                    </div>

                    <p className="font-paragraph text-secondary-foreground leading-relaxed">
                      {member.bio}
                    </p>

                    {/* LinkedIn Link */}
                    {member.linkedInUrl && (
                      <a
                        href={member.linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-charcoal transition-colors duration-300"
                      >
                        <Linkedin size={20} />
                        <span className="font-paragraph text-sm font-semibold">View Profile</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="font-paragraph text-lg text-secondary-foreground">
                Team members coming soon.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
