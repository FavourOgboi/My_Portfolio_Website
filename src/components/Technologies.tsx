import React, { useRef, useState, useEffect } from 'react';

const Technologies: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 1000); // Resume after 1 second
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 1000);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsPaused(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsPaused(false), 1000);
  };
  const technologies = [
    'Python', 'R', 'SQL', 'JavaScript', 'TensorFlow', 'PyTorch', 'Scikit-learn',
    'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter', 'Git',
    'Docker', 'AWS', 'GCP', 'Tableau', 'Power BI', 'MongoDB', 'PostgreSQL',
    'Spark', 'Hadoop', 'Kubernetes', 'MLflow', 'Airflow'
  ];

  const certifications = [
    {
      title: 'Career Essentials in Generative AI by Microsoft and LinkedIn',
      issuer: 'Microsoft',
      year: '2025',
      level: 'Professional',
      skills: ['Prompt Engineering']
    },
    {
      title: 'Machine Learning with Python: Zero to GBMs',
      issuer: 'Jovian',
      year: '2025',
      level: 'Professional',
      skills: ['Machine Learning Algorithms'],
      link: 'https://jovian.com/certificate/MFQTSMJZGY'
    },
    {
      title: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      year: '2023',
      level: 'Certified'
    },
    {
      title: 'Oracle Primavera Unifier – Project Controls & Asset Management',
      issuer: 'Oracle',
      year: '2024',
      level: 'Professional'
    },
    {
      title: 'Oracle Master Data Management – Unified, Trusted Enterprise Data',
      issuer: 'Oracle',
      year: '2024',
      level: 'Professional'
    },
    {
      title: 'Business Analytics With Excel',
      issuer: 'Simplilearn',
      year: '2023',
      level: 'Professional',
      skills: ['Microsoft Excel']
    },
    {
      title: 'Data Literacy',
      issuer: '365 Data Science',
      year: '2023',
      level: 'Professional',
      credentialId: 'CC-1E6AF442BF'
    },
    {
      title: 'Advance Content Marketing',
      issuer: 'Simplilearn',
      year: '2023',
      level: 'Professional',
      skills: ['Content Marketing']
    },
    {
      title: 'Intro to Django Python Web Framework',
      issuer: 'Udemy',
      year: '2023',
      level: 'Professional',
      skills: ['Django', 'Django REST Framework']
    },
    {
      title: 'How to think like a Data Scientist and become one',
      issuer: '365 Data Science',
      year: '2022',
      level: 'Professional',
      skills: ['Data Science']
    },
    {
      title: 'Introduction to data and data science',
      issuer: '365 Data Science',
      year: '2022',
      level: 'Professional',
      skills: ['Data Science']
    },
    {
      title: 'Data analysis with python',
      issuer: 'Jovian',
      year: '2022',
      level: 'Professional',
      skills: ['Statistical Data Analysis', 'SQL', 'Data Analysis', 'Data Visualization']
    },
    {
      title: 'Python for beginners',
      issuer: 'Sololearn',
      year: '2019',
      level: 'Beginner',
      skills: ['Programming', 'Data Structures']
    },
    {
      title: 'Analyzing and Visualizing Data with Microsoft Excel',
      issuer: 'Intellipaat',
      year: '2023',
      level: 'Professional',
      skills: ['Data Analysis', 'Data Visualization']
    },
    {
      title: 'Introduction to PowerBI',
      issuer: 'AI Planet',
      year: '2023',
      level: 'Professional',
      skills: ['Microsoft Power BI']
    },
    {
      title: 'Probability For Data Science',
      issuer: 'Great Learning',
      year: '2023',
      level: 'Professional'
    },
    {
      title: 'Problem Solving Using Computational Thinking',
      issuer: 'Coursera',
      year: '2023',
      level: 'Professional',
      skills: ['Troubleshooting']
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technologies & Tools
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Certifications & Credentials
          </h2>
          
          <div 
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => !isDragging && setTimeout(() => setIsPaused(false), 500)}
          >
            <div 
              ref={scrollContainerRef}
              className={`flex transition-transform duration-75 ${isPaused ? '' : 'animate-scroll-certifications'}`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ userSelect: 'none' }}
            >
              {/* First set of certifications */}
              {certifications.map((cert, index) => (
                <div
                  key={`first-${index}`}
                  className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-lg flex-shrink-0 w-80 mx-3"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                      {cert.title}
                    </h3>
                    <span className="text-xl font-bold text-purple-600 dark:text-purple-400 ml-2">
                      {cert.year}
                    </span>
                  </div>
                  
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-2">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                      {cert.level}
                    </span>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium"
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                  
                  {cert.credentialId && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                      Credential ID: {cert.credentialId}
                    </p>
                  )}
                  
                  {cert.skills && (
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {certifications.map((cert, index) => (
                <div
                  key={`second-${index}`}
                  className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-lg flex-shrink-0 w-80 mx-3 pointer-events-auto"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                      {cert.title}
                    </h3>
                    <span className="text-xl font-bold text-purple-600 dark:text-purple-400 ml-2">
                      {cert.year}
                    </span>
                  </div>
                  
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-2">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                      {cert.level}
                    </span>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium"
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                  
                  {cert.credentialId && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                      Credential ID: {cert.credentialId}
                    </p>
                  )}
                  
                  {cert.skills && (
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;