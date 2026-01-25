import React, { useEffect, useState, useRef } from 'react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Machine Learning & AI',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'TensorFlow/Keras', level: 90 },
        { name: 'Scikit-learn', level: 92 },
        { name: 'PyTorch', level: 85 },
      ]
    },
    {
      title: 'Data Analysis & Visualization',
      skills: [
        { name: 'Pandas & NumPy', level: 95 },
        { name: 'Matplotlib/Seaborn', level: 88 },
        { name: 'Plotly & Dash', level: 85 },
        { name: 'Tableau', level: 80 },
      ]
    },
    {
      title: 'Databases & Cloud',
      skills: [
        { name: 'SQL', level: 90 },
        { name: 'MongoDB', level: 75 },
        { name: 'AWS', level: 82 },
        { name: 'Docker', level: 78 },
      ]
    },
    {
      title: 'Statistical Analysis',
      skills: [
        { name: 'Statistics', level: 93 },
        { name: 'R', level: 85 },
        { name: 'A/B Testing', level: 88 },
        { name: 'Time Series', level: 82 },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Abilities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across the full data science pipeline, from data collection to deployment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-purple-600 dark:text-purple-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-teal-500 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 4 + skillIndex) * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;