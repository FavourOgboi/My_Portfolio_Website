import React from 'react';
import { GraduationCap, Award, Users, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'First-Class Graduate',
      subtitle: 'Computer Science',
      description: 'Graduated with first-class honors (CGPA: 4.61/5.0), specializing in machine learning and data structures'
    },
    {
      icon: Award,
      title: 'Certified Professional',
      subtitle: 'Data Science & Analytics',
      description: 'Multiple industry certifications in ML, Python, and statistical analysis'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      subtitle: 'Cross-functional Projects',
      description: 'Led diverse teams in delivering data-driven solutions for business growth'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      subtitle: 'Research & Development',
      description: 'Published research in ML applications and contributed to open-source projects'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About My Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transforming complex data challenges into elegant solutions through innovative thinking and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              With a passion for uncovering insights hidden within data, I've dedicated my career to building 
              intelligent systems that drive meaningful business outcomes. My journey began with a first-class 
              degree in Computer Science (CGPA: 4.61/5.0), where I discovered the transformative power of machine learning.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Since then, I've worked across various industries, from fintech to healthcare, applying advanced 
              analytics to solve complex problems. I believe in the importance of not just building models, 
              but creating sustainable, ethical AI solutions that positively impact society.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not analyzing datasets or training models, you'll find me contributing to open-source 
              projects, mentoring aspiring data scientists, or writing about the latest developments in AI and machine learning.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">
                  <item.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                
                <h4 className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                  {item.subtitle}
                </h4>
                
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;