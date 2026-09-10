import React from 'react';

const communities = [
  'Microsoft Learn Student Ambassador',
  'Streamlit Educator Ambassador',
  'DSN Campus Ambassador, FUPRE',
  'Chapter Lead, DSN FUPRE (2024–2025, 300+ members)',
  'Google Developer Student Club — FUPRE',
  'ML Collective',
  'IndabaX Nigeria',
  'FUPRE Code Club',
];

const Communities: React.FC = () => (
  <section id="communities" className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Communities & Ambassadorships
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {communities.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 font-mono text-sm text-gray-700 dark:text-gray-300 hover:border-accent-500 transition-colors duration-150"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Communities;
