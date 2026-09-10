import React from 'react';

interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  current?: boolean;
}

const experience: ExperienceItem[] = [
  { role: 'AI Engineer', org: 'Aurora Robotics', period: 'Aug 2026 – Present', current: true },
  { role: 'Operations Technology', org: 'Ecobank Nigeria', period: '2026 – Present', current: true },
  { role: 'Computer Vision Engineer (Contract)', org: 'Wiwo', period: 'Jan – May 2026' },
  { role: 'Machine Learning Intern', org: 'Codveda Technologies', period: 'Feb – Apr 2026' },
  { role: 'Business Intelligence Analyst', org: 'EdgeNet Consulting', period: 'Jun – Nov 2024' },
  { role: 'Freelance Data Science / Programming Tutor', org: 'SuperProf', period: 'Apr 2021 – Dec 2025' },
];

const Experience: React.FC = () => (
  <section id="experience" className="py-20 bg-white dark:bg-gray-800">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Work Experience</h2>
      </div>

      <div className="border-l-2 border-gray-200 dark:border-gray-700">
        {experience.map((item, index) => (
          <div key={index} className="relative pl-8 pb-10 last:pb-0">
            <span
              className={`absolute -left-[7px] top-1.5 w-3 h-3 ${
                item.current ? 'bg-accent-500' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.role}</h3>
              {item.current && (
                <span className="font-mono text-[10px] uppercase tracking-wide text-accent-500 border border-accent-500/40 px-2 py-0.5">
                  Current
                </span>
              )}
            </div>
            <p className="text-accent-500 font-medium mb-1">{item.org}</p>
            <p className="font-mono text-xs text-gray-500 dark:text-gray-400">{item.period}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
