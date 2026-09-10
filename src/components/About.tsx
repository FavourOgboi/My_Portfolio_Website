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
      description: 'Multiple industry certifications in DL, ML, Python, and statistical analysis'
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
            Professional Summary
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dedicated to applying data science and machine learning to solve real-world problems across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Ogboi Favour Ifeanyichukwu graduated with First Class Honours in Computer Science from the
              Federal University of Petroleum Resources (FUPRE), where he served as Chapter Lead for Data
              Science Nigeria (DSN). His focus has consistently been applying data science and machine
              learning to real-world, high-stakes problems rather than isolated coursework.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              That focus now shows up in production work — he currently builds perception and decision
              systems as an AI Engineer at Aurora Robotics, while applying his background in web development,
              data analysis, and business intelligence through freelance engagements and research
              collaborations.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Longer term, he is working toward combining applied engineering with academic research, with
              the goal of contributing to both industry and academia while building AI-driven solutions
              across Africa. Alongside active projects, he mentors aspiring data scientists, contributes to
              open-source initiatives, and writes about developments in AI and machine learning.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 hover:border-accent-500 transition-colors duration-200"
              >
                <div className="mb-4">
                  <item.icon className="w-8 h-8 text-accent-500" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                
                <h4 className="font-mono text-xs uppercase tracking-wide text-accent-500 mb-2">
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
