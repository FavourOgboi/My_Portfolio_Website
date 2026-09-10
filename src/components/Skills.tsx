import React, { useEffect, useState, useRef } from 'react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
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

        <div className="space-y-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 sm:p-8"
            >
              <h3 className="font-mono text-xs uppercase tracking-wide text-accent-500 mb-5">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`font-mono text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 px-3 py-1.5 transition-all duration-500 ease-out hover:border-accent-500 hover:text-accent-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                    style={{ transitionDelay: `${(categoryIndex * 6 + skillIndex) * 50}ms` }}
                  >
                    {skill}
                  </span>
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