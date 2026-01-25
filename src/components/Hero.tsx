import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileDown, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Data Scientist',
    'Machine Learning Engineer',
    'Python Developer',
    'AI Engineer',
    'Instructor'
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentRole) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayedText === '') {
        // Move to next role
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else if (isDeleting) {
        // Delete character
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      } else {
        // Type character
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentRoleIndex, displayedText, isDeleting, roles]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/FavourOgboi', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vincent-favour-297433205/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/OgboiFavour', label: 'X (Twitter)' },
    { icon: Mail, href: 'mailto:ogboifavourifeanyichukwu@gmail.com', label: 'Email' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Vincent <span className="text-purple-600 dark:text-purple-400">Favour</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-purple-600 dark:text-purple-400 mb-6 h-12 flex items-center">
              <span>{displayedText}</span>
              <span className="animate-pulse ml-1 text-purple-600 dark:text-purple-400">|</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Building intelligent systems that transform raw data into actionable insights. 
              Specialized in machine learning, statistical analysis, and data-driven decision making.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1ro0NdPtpezA2WmXQax3dhoelcEFWkzPy/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full font-medium transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <FileDown className="w-5 h-5" />
                View Resume
              </a>
              
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 px-8 py-4 rounded-full font-medium transition-all duration-200 hover:scale-105"
              >
                View My Work
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-600 to-teal-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                  <img
                    src="/pres.jpg"
                    alt="Vincent Favour"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white font-bold text-lg">ML</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white font-bold">AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;