import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import PrivateLink from './PrivateLink';

const profileImageSrc = `${import.meta.env.BASE_URL}image.png`;

const NAMES = ['Ogboi', 'Vincent'] as const;
const ROLES = [
  'Data Scientist',
  'Machine Learning Engineer',
  'Python Developer',
  'AI Engineer',
  'Instructor',
] as const;

const Hero: React.FC = () => {
  // Typewriter for name
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [displayedName, setDisplayedName] = useState('');
  const [isDeletingName, setIsDeletingName] = useState(false);

  // Typewriter for roles
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for name
  useEffect(() => {
    const currentName = NAMES[currentNameIndex];
    const typingSpeed = isDeletingName ? 50 : 100;
    const pauseTime = isDeletingName ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeletingName && displayedName === currentName) {
        setTimeout(() => setIsDeletingName(true), pauseTime);
      } else if (isDeletingName && displayedName === '') {
        setIsDeletingName(false);
        setCurrentNameIndex((prev) => (prev + 1) % NAMES.length);
      } else if (isDeletingName) {
        setDisplayedName(currentName.substring(0, displayedName.length - 1));
      } else {
        setDisplayedName(currentName.substring(0, displayedName.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentNameIndex, displayedName, isDeletingName]);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = ROLES[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentRole) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayedText === '') {
        // Move to next role
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else if (isDeleting) {
        // Delete character
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      } else {
        // Type character
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentRoleIndex, displayedText, isDeleting]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/FavourOgboi', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vincent-favour-297433205/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/OgboiFavour', label: 'X (Twitter)' },
    { icon: Mail, href: 'mailto:ogboifavourifeanyichukwu@gmail.com', label: 'Email' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-700 px-3 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 bg-accent-500" />
              AI Engineer · Machine Learning · Computer Vision · NLP
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {displayedName} <span className="text-accent-500">Favour</span>
              <span className="animate-pulse ml-1 text-accent-500">|</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-accent-500 mb-6 h-12 flex items-center font-mono">
              <span>{displayedText}</span>
              <span className="animate-pulse ml-1 text-accent-500">|</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
              First-Class CS graduate building AI systems in production — from robotics perception at
              Aurora Robotics to maternal triage platforms and corrosion prediction research. I work where
              data meets real-world complexity.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-3 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 border border-gray-300 dark:border-gray-700 hover:border-accent-500 transition-colors duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-accent-500 transition-colors duration-200" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <PrivateLink
                name="Resume"
                label="Resume Access"
                location="Google Drive resume link"
                reason="The resume is hosted on Google Drive with restricted access, so visitors need to request permission before viewing it."
              />
              
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white px-8 py-4 font-mono text-sm uppercase tracking-wide transition-colors duration-200"
              >
                View My Work
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm border-2 border-accent-500">
              <div className="w-full aspect-square overflow-hidden bg-white dark:bg-gray-800">
                <img
                  src={profileImageSrc}
                  alt="Ogboi Favour"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between border-t-2 border-accent-500 px-4 py-3 font-mono text-xs uppercase tracking-wide text-gray-600 dark:text-gray-300">
                <span>Ogboi Favour Ifeanyichukwu</span>
                <span className="flex gap-2">
                  <span className="text-accent-500">AI</span>
                  <span className="text-accent-500">ML</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
