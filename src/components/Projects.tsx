import React, { useState } from 'react';
import { Github } from 'lucide-react';
import PrivateLink from './PrivateLink';

const assetBase = import.meta.env.BASE_URL;

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  github?: string;
  demo?: string;
  logo?: boolean;
  private?: { location: string; reason: string };
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'AI Platforms', 'NLP', 'Machine Learning', 'Data Analysis', 'Web Development', 'Research'];

  const projects: Project[] = [
    {
      title: 'VitalMama',
      description: 'AI-powered maternal triage platform combining a RAG knowledge base with text-to-speech for low-connectivity clinics. Built for the Johns Hopkins / Harvard HSIL hackathon.',
      image: `${assetBase}vitalmama-logo.png`,
      category: 'AI Platforms',
      technologies: ['React', 'TypeScript', 'Node', 'Supabase', 'RAG', 'TTS'],
      logo: true,
      private: { location: 'Harvard HSIL hackathon submission', reason: 'Judging is still ongoing — code is under review by organizers.' }
    },
    {
      title: 'OpsMemory',
      description: 'AI agent platform that turns WhatsApp operational chatter into structured, searchable institutional memory. Built for a live competition submission.',
      image: 'https://images.pexels.com/photos/375889/pexels-photo-375889.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'AI Platforms',
      technologies: ['WhatsApp API', 'PostgreSQL', 'AI Agents', 'FastAPI'],
      private: { location: 'Competition submission', reason: 'Results are still pending — repo is private until judging concludes.' }
    },
    {
      title: 'HAKI Agricultural Intelligence Platform',
      description: 'Role-based agricultural intelligence platform pairing an LLM assistant with field-worker, manager, and researcher dashboards for real-time farm insights.',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'AI Platforms',
      technologies: ['FastAPI', 'Supabase', 'LLM', 'Role-Based Auth'],
      github: 'https://github.com/FavourOgboi/HAKI-Agricultural-Intelligence-Platform',
      demo: 'https://github.com/FavourOgboi/HAKI-Agricultural-Intelligence-Platform'
    },
    {
      title: 'RAG Support Agent',
      description: 'Retrieval-augmented support agent built with LangGraph and Cohere, using an MCP-based tool layer for grounded, context-aware customer responses.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'NLP',
      technologies: ['LangGraph', 'FAISS', 'Cohere', 'MCP'],
      private: { location: 'GitHub — private repo', reason: 'Public link not published yet — reach out for access.' }
    },
    {
      title: 'PCOS Predictive System',
      description: 'Stacked ensemble model for early PCOS risk prediction, using SHAP for interpretability and a metaheuristic search for feature/hyperparameter tuning.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Machine Learning',
      technologies: ['Stacking', 'SHAP', 'Metaheuristic'],
      private: { location: 'GitHub — private repo', reason: 'Public link not published yet — reach out for access.' }
    },
    {
      title: 'Emission Forecasting',
      description: 'Gradient-boosted forecasting pipeline for emissions data with seasonal calibration, built for the IndabaX Nigeria 2026 datathon.',
      image: 'https://images.pexels.com/photos/2261167/pexels-photo-2261167.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Machine Learning',
      technologies: ['LightGBM', 'XGBoost', 'Seasonal Calibration'],
      private: { location: 'GitHub — private repo', reason: 'Public link not published yet — reach out for access.' }
    },
    {
      title: 'Text Classification with Bag-of-Words',
      description: 'First entry in a "Zero to NLP" series — classic Bag-of-Words feature extraction paired with logistic regression for text classification.',
      image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'NLP',
      technologies: ['NLTK', 'scikit-learn', 'Logistic Regression'],
      github: 'https://github.com/FavourOgboi/Text-Classification-with-Bag-of-Words',
      demo: 'https://github.com/FavourOgboi/Text-Classification-with-Bag-of-Words'
    },
    {
      title: 'NLP Neural Networks (Quora Insincere Questions)',
      description: 'Feedforward neural network with TF-IDF features for detecting insincere questions, part of an ongoing NLP series moving from classical ML to deep learning.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'NLP',
      technologies: ['PyTorch', 'TF-IDF', 'Feedforward NN'],
      github: 'https://github.com/FavourOgboi/nlp-neural-networks-quora-insincere',
      demo: 'https://github.com/FavourOgboi/nlp-neural-networks-quora-insincere'
    },
    {
      title: 'Used Car Price Prediction',
      description: 'Built for the DSN Bootcamp Qualification Hackathon. Advanced machine learning model focused on minimizing RMSE through sophisticated feature engineering and ensemble methods.',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Machine Learning',
      technologies: ['Python', 'Scikit-learn', 'Feature Engineering', 'DSN Hackathon'],
      github: 'https://github.com/FavourOgboi/Used-Car-Price-Prediction',
      demo: 'https://github.com/FavourOgboi/Used-Car-Price-Prediction'
    },
    {
      title: 'Nigerian-MT-Challenge (Yoruba-Igbo-Hausa)',
      description: 'Developed state-of-the-art Machine Translation models for three major Nigerian languages (Yoruba, Igbo, Hausa) to English for the DSN 2025 AI Bootcamp. Advancing multilingual NLP for African languages.',
      image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Machine Learning',
      technologies: ['Python', 'NLP', 'Machine Translation', 'Transformers', 'DSN AI Bootcamp'],
      github: 'https://github.com/FavourOgboi/Nigerian-MT-Challenge-Yoruba-Igbo-Hausa',
      demo: 'https://github.com/FavourOgboi/Nigerian-MT-Challenge-Yoruba-Igbo-Hausa'
    },
    {
      title: 'Network Intrusion Detection System (NIDS)',
      description: 'Real-time ML-powered web application designed to classify and detect cyberattacks using simulated military network traffic. Advanced cybersecurity solution with high accuracy threat detection.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Machine Learning',
      technologies: ['Python', 'Cybersecurity', 'Real-time ML', 'Network Security', 'Web App'],
      github: 'https://github.com/FavourOgboi/Network-Intrusion-Detection',
      demo: 'https://github.com/FavourOgboi/Network-Intrusion-Detection'
    },
    {
      title: 'Smart-Hybrid-Cold-Storage',
      description: 'IoT-integrated machine learning project that predicts fruit spoilage timeline based on real-time sensor data. Combines hardware sensors with ML algorithms to optimize food storage and reduce waste.',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Machine Learning',
      technologies: ['Python', 'IoT', 'Sensor Data', 'Predictive Analytics', 'Agriculture Tech'],
      github: 'https://github.com/FavourOgboi/Smart-Hybrid-Cold-Storage',
      demo: 'https://github.com/FavourOgboi/Smart-Hybrid-Cold-Storage'
    },
    {
      title: 'EcoSeek AI',
      description: 'Multimodal product discovery platform utilizing NLP, Image Classification, and OCR technologies for intelligent product recommendations. Advanced AI system combining multiple data modalities.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Machine Learning',
      technologies: ['Python', 'NLP', 'Computer Vision', 'OCR', 'Multimodal AI'],
      github: 'https://github.com/FavourOgboi/ds_task_EcoseekAI',
      demo: 'https://github.com/FavourOgboi/ds_task_EcoseekAI'
    },
    {
      title: 'SMS Guard: AI-Powered Spam Detection',
      description: 'An AI-powered application for real-time SMS spam detection and management. Built with React (frontend) and Flask (backend) for secure and insightful message classification.',
      image: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Machine Learning',
      technologies: ['React', 'Flask', 'Python', 'AI/ML'],
      github: 'https://github.com/FavourOgboi/sms-spam-detector-ai',
      demo: 'https://github.com/FavourOgboi/sms-spam-detector-ai'
    },
    {
      title: 'Rossmann Store Sales Prediction',
      description: 'Predict 6 weeks of daily sales for 1,115 stores across Germany using XGBoost. Kaggle competition solution enabling effective staff scheduling and inventory management.',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Machine Learning',
      technologies: ['Python', 'XGBoost', 'Pandas', 'Kaggle'],
      github: 'https://github.com/FavourOgboi/Rossmann-Store-Sales-Prediction-Competition-on-Kaggle-XGBoost',
      demo: 'https://github.com/FavourOgboi/Rossmann-Store-Sales-Prediction-Competition-on-Kaggle-XGBoost'
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Identifies customers at risk of leaving a company by analyzing behavior and usage patterns. Machine learning model to reduce customer attrition.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Machine Learning',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'ML'],
      github: 'https://github.com/FavourOgboi/Churn-Prediction-Using-Machine-Learning',
      demo: 'https://github.com/FavourOgboi/Churn-Prediction-Using-Machine-Learning'
    },
    {
      title: 'Student Academic Performance Prediction',
      description: 'Analyzes student academic performance based on foundational knowledge, study hours, and family background to predict academic success.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Machine Learning',
      technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Education'],
      github: 'https://github.com/FavourOgboi/Secondary-School-Student-Academic-Performance-Prediction',
      demo: 'https://github.com/FavourOgboi/Secondary-School-Student-Academic-Performance-Prediction'
    },
    {
      title: 'House Price Prediction with Decision Trees',
      description: 'Predicts house prices using location, area, number of rooms and other features. Built with Decision Trees and Random Forests algorithms.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Machine Learning',
      technologies: ['Python', 'Decision Trees', 'Random Forest', 'Real Estate'],
      github: 'https://github.com/FavourOgboi/House-Price-Prediction-with-Decision_Trees-and-Random-Forests',
      demo: 'https://github.com/FavourOgboi/House-Price-Prediction-with-Decision_Trees-and-Random-Forests'
    },
    {
      title: 'Australian Weather Rain Prediction',
      description: 'Predict rain in Australia using Decision Trees and Random Forests on 10 years of weather data. Automates rainfall forecasting for meteorologists.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Machine Learning',
      technologies: ['Python', 'Decision Trees', 'Random Forest', 'Weather Data'],
      github: 'https://github.com/FavourOgboi/Australian-Weather-Rain-Prediction-Using-Decision-Trees-And-Random-Forests',
      demo: 'https://github.com/FavourOgboi/Australian-Weather-Rain-Prediction-Using-Decision-Trees-And-Random-Forests'
    },
    {
      title: 'Financial Risk Analysis for Loan Approval',
      description: 'Analysis of loan approval dataset to determine factors that impact loan approval decisions for individuals. Risk assessment modeling.',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Data Analysis',
      technologies: ['Python', 'Risk Analysis', 'Financial Modeling', 'ML'],
      github: 'https://github.com/FavourOgboi/Financial_Risk_Analysis_for_Loan_Approval',
      demo: 'https://github.com/FavourOgboi/Financial_Risk_Analysis_for_Loan_Approval'
    },
    {
      title: 'Toxic Comment Classification',
      description: 'Comment toxicity detection system using parameters like toxic, severe_toxic, insult, obscene, threat, and identity hate to classify comments.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Machine Learning',
      technologies: ['Python', 'NLP', 'Text Classification', 'Content Moderation'],
      github: 'https://github.com/FavourOgboi/Toxic-Comment-Classification',
      demo: 'https://github.com/FavourOgboi/Toxic-Comment-Classification'
    },
    {
      title: 'Dementia Risk Prediction',
      description: 'Algorithm to predict dementia risk based on age, gender, education level, socioeconomic status, MMSE score, brain volumes, and related factors.',
      image: 'https://images.pexels.com/photos/3279206/pexels-photo-3279206.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Machine Learning',
      technologies: ['Python', 'Healthcare ML', 'Risk Assessment', 'Medical AI'],
      github: 'https://github.com/FavourOgboi/Dementia-ML-Prediction',
      demo: 'https://github.com/FavourOgboi/Dementia-ML-Prediction'
    },
    {
      title: 'Diabetes Prediction with Streamlit',
      description: 'Machine learning model for diabetes prediction with an interactive Streamlit web application for real-time health risk assessment.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web Development',
      technologies: ['Python', 'Streamlit', 'Machine Learning', 'Healthcare'],
      github: 'https://github.com/FavourOgboi/Diabetes_Prediction_MachineLearning_and_Streamlit',
      demo: 'https://github.com/FavourOgboi/Diabetes_Prediction_MachineLearning_and_Streamlit'
    },
    {
      title: 'Sales Analysis Project',
      description: 'Comprehensive data analysis project examining sales data patterns, trends, and insights to drive business decision-making.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Data Analysis',
      technologies: ['Python', 'Data Analysis', 'Visualization', 'Business Intelligence'],
      github: 'https://github.com/FavourOgboi/Sales_analysis_project',
      demo: 'https://github.com/FavourOgboi/Sales_analysis_project'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and TypeScript. Features dark mode, smooth animations, interactive testimonials carousel, and comprehensive project showcase. Deployed on Netlify with custom domain integration.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web Development',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Netlify'],
      github: 'https://github.com/FavourOgboi/vincent-favour-portfolio',
      demo: 'https://inquisitive-selkie-f8f344.netlify.app'
    },
    {
      title: 'Mastermind Game Project',
      description: 'A "Mastermind" project that simulates the popular code-breaking game. Players attempt to guess a secret code through logical deduction and feedback.',
      image: 'https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web Development',
      technologies: ['Programming', 'Game Logic', 'Algorithm Design', 'Problem Solving'],
      github: 'https://github.com/FavourOgboi/master-mind_project',
      demo: 'https://github.com/FavourOgboi/master-mind_project'
    },
    {
      title: 'ML prediction of corrosion rate and inhibitor efficiency (ternary blend)',
      description: 'Machine learning models predicting corrosion rate and inhibitor efficiency for a ternary inhibitor blend under variable temperature conditions.',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Research',
      technologies: ['Python', 'Machine Learning', 'Corrosion Modeling'],
      private: { location: 'Private Google Drive', reason: 'Unpublished manuscript — available on request.' }
    },
    {
      title: 'ML prediction of corrosion rate and inhibition efficiency (green inhibitor)',
      description: 'Machine learning models predicting corrosion rate and inhibition efficiency for a green inhibitor across multiple pH and temperature environments.',
      image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Research',
      technologies: ['Python', 'Machine Learning', 'Corrosion Modeling'],
      private: { location: 'Private Google Drive', reason: 'Unpublished manuscript — available on request.' }
    },
    {
      title: 'Predictive Modeling of Okro Leaf Extract as a Corrosion Inhibitor',
      description: 'Predictive modeling of Okro (Corchorus olitorius) leaf extract as a natural corrosion inhibitor in acidic and basic media.',
      image: 'https://images.pexels.com/photos/3279206/pexels-photo-3279206.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Research',
      technologies: ['Python', 'Machine Learning', 'Materials Science'],
      private: { location: 'Private Google Drive', reason: 'Unpublished manuscript — available on request.' }
    },
    {
      title: 'Transmissivity-Aware Geothermal District Energy System for Utrecht',
      description: 'Geothermal district energy system design accounting for subsurface transmissivity, built for the SPE Africa Datathon 2026.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Research',
      technologies: ['Geothermal Energy', 'Optimization', 'SPE Africa Datathon'],
      github: 'https://github.com/FavourOgboi/africa-geothermal-datathon-2026',
      demo: 'https://github.com/FavourOgboi/africa-geothermal-datathon-2026'
    },
    {
      title: 'University of Toronto Cancer Research',
      description: 'Comprehensive assessment of COVID-19 outcomes among females with breast cancer history using the CCC19 registry to identify specific risk factors.',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Research',
      technologies: ['Python', 'Medical Research', 'Statistical Analysis', 'Healthcare'],
      github: 'https://github.com/FavourOgboi/University-Of-Toronto-Cancer-Research-Group',
      demo: 'https://github.com/FavourOgboi/University-Of-Toronto-Cancer-Research-Group'
    },
    {
      title: 'Corrosion Inhibition Efficiency of Ewedu Extract on Copper',
      description: 'Analyzing and visualizing corrosion data to identify patterns, trends, and potential insights into material degradation over time or under specific conditions.',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Research',
      technologies: ['Python', 'Materials Science', 'Data Visualization'],
      github: 'https://github.com/FavourOgboi/Corrosion-Inhibitionn-Efficiency-of-Ewedu-Corchorus-olitorius-Extract-on-Copper',
      demo: 'https://github.com/FavourOgboi/Corrosion-Inhibitionn-Efficiency-of-Ewedu-Corchorus-olitorius-Extract-on-Copper'
    },
    {
      title: 'ACO Algorithm for Gas-Oil Ratio PVT Correlation',
      description: 'Developing robust empirical correlation for estimating gas solubility at bubble point pressure using Ant Colony Optimization (ACO) algorithm for black oils.',
      image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Research',
      technologies: ['Python', 'ACO Algorithm', 'Petroleum Engineering', 'Optimization'],
      github: 'https://github.com/FavourOgboi/ACO-Algorithm-For-Solution-Gas-Oil-Ratio-PVT-Correlation',
      demo: 'https://github.com/FavourOgboi/ACO-Algorithm-For-Solution-Gas-Oil-Ratio-PVT-Correlation'
    },
    {
      title: 'University of Toronto Pharmaceutical Challenge',
      description: 'Analysis of an animal study by pharmaceutical company specializing in anti-cancer medications. Research focused on drug efficacy and treatment outcomes.',
      image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Research',
      technologies: ['Python', 'Pharmaceutical Research', 'Statistical Analysis', 'Drug Development'],
      github: 'https://github.com/FavourOgboi/University_Of_Toronto_Pharmacetical_Challenge',
      demo: 'https://github.com/FavourOgboi/University_Of_Toronto_Pharmacetical_Challenge'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of data science projects demonstrating expertise in machine learning, analytics, and problem-solving
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 font-mono text-xs uppercase tracking-wide transition-colors duration-200 border ${
                activeFilter === filter
                  ? 'bg-accent-500 text-white border-accent-500'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:border-accent-500 border-gray-200 dark:border-gray-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-accent-500 transition-colors duration-200 flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-48 ${project.logo ? 'object-contain bg-white p-6' : 'object-cover'}`}
                />
                {project.private && (
                  <span className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-wide bg-amber-500 text-white px-2 py-1">
                    Private
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <span className="font-mono text-[10px] uppercase tracking-wide text-accent-500 mb-2">
                  {project.category}
                </span>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-2">
                  {project.private ? (
                    <PrivateLink
                      name={project.title}
                      location={project.private.location}
                      reason={project.private.reason}
                    />
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent-500 hover:text-accent-600 font-mono text-xs uppercase tracking-wide"
                    >
                      <Github className="w-4 h-4 mr-1.5" />
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
