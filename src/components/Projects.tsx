import React, { useState } from 'react';
import { Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Machine Learning', 'Data Analysis', 'Web Development', 'Research'];

  const projects = [
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
      title: 'University of Toronto Cancer Research',
      description: 'Comprehensive assessment of COVID-19 outcomes among females with breast cancer history using the CCC19 registry to identify specific risk factors.',
      category: 'Research',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Medical Research', 'Statistical Analysis', 'Healthcare'],
      github: 'https://github.com/FavourOgboi/University-Of-Toronto-Cancer-Research-Group',
      demo: 'https://github.com/FavourOgboi/University-Of-Toronto-Cancer-Research-Group'
    },
    {
      title: 'Corrosion Inhibition Efficiency of Ewedu Extract on Copper',
      description: 'Analyzing and visualizing corrosion data to identify patterns, trends, and potential insights into material degradation over time or under specific conditions.',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Research',
      technologies: ['Python', 'Materials Science', 'Data Visualization', 'Research'],
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
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
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
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                   target="_blank"
                   rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5 text-gray-700" />
                  </a>
                </div>
              </div>

              <div className="p-6">
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
                      className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div>
                  <a
                    href={project.github}
                   target="_blank"
                   rel="noopener noreferrer"
                    className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    View on GitHub
                  </a>
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
