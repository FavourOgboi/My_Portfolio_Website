import React, { useEffect, useState, useRef } from 'react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'SQL', 'JavaScript', 'Java', 'C++'],
    },
    {
      title: 'ML / AI',
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'SHAP', 'Ensemble Methods', 'LightGBM'],
    },
    {
      title: 'Computer Vision',
      skills: ['OpenCV', 'MediaPipe', 'SMPL / SMPL-X', 'Pose Estimation', 'CNNs', 'Segmentation'],
    },
    {
      title: 'NLP / LLMs',
      skills: ['LangGraph', 'FAISS', 'Cohere', 'RAG', 'Transformers', 'Hugging Face'],
    },
    {
      title: 'Data / MLOps',
      skills: ['Pandas', 'NumPy', 'Docker', 'Flask', 'REST APIs', 'Streamlit', 'ETL Pipelines'],
    },
    {
      title: 'BI / Analytics',
      skills: ['Tableau', 'Power BI', 'Plotly', 'A/B Testing', 'Hypothesis Testing'],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveCategoryIndex((prev) => (prev + 1) % skillCategories.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, [isVisible, skillCategories.length]);

  const activeCategory = skillCategories[activeCategoryIndex];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Abilities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across the full AI pipeline, from data collection to deployment
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 sm:p-8 overflow-hidden">
          <div className="flex flex-wrap gap-2 mb-6">
            {skillCategories.map((category, index) => (
              <button
                key={category.title}
                type="button"
                onClick={() => setActiveCategoryIndex(index)}
                className={`px-3 py-2 font-mono text-[11px] uppercase tracking-wide transition-colors duration-200 border ${
                  index === activeCategoryIndex
                    ? 'bg-accent-500 border-accent-500 text-white'
                    : 'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-accent-500 hover:text-accent-500'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] gap-6 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
                Now Showing
              </p>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white min-h-[72px]">
                {activeCategory.title}
              </h3>
              <div className="mt-6 h-1 w-full bg-gray-200 dark:bg-gray-700">
                <div
                  key={activeCategory.title}
                  className="h-full bg-accent-500 animate-skill-progress"
                />
              </div>
            </div>

            <div
              key={activeCategory.title}
              className={`min-h-[172px] transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <div className="flex flex-wrap gap-3">
                {activeCategory.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="font-mono text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 px-3 py-1.5 hover:border-accent-500 hover:text-accent-500 transition-colors duration-200"
                    style={{ transitionDelay: `${skillIndex * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;