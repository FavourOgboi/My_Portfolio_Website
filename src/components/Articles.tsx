import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const Articles: React.FC = () => {
  const articles = [
    {
      title: 'The Analytics Paradigm — Steps to Arriving at the Most Truthful Answer',
      excerpt: 'A comprehensive guide to analytical thinking and methodologies for extracting the most accurate insights from complex data sets.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Published on Medium',
      readTime: '6 min read',
      tags: ['Analytics', 'Data Science', 'Methodology'],
      link: 'https://vincentfavour.medium.com/the-analytics-paradigm-steps-to-arriving-at-the-most-truthful-answer-fe350223145f'
    },
    {
      title: 'The Perfect Roadmap to Learn Data Science',
      excerpt: 'A detailed roadmap for aspiring data scientists, covering essential skills, tools, and learning paths to master data science in 2024.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Published on Medium',
      readTime: '8 min read',
      tags: ['Data Science', 'Learning', 'Career'],
      link: 'https://vincentfavour.medium.com/the-perfect-roadmap-to-learn-data-science-in-2024-f2f3bbf4465c'
    },
    {
      title: '5 Machine Learning Algorithms Every Data Scientist Should Master in 2023 with Example Datasets',
      excerpt: 'Essential machine learning algorithms with practical examples and datasets to help data scientists build a strong foundation.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Published on Medium',
      readTime: '10 min read',
      tags: ['Machine Learning', 'Algorithms', 'Tutorial'],
      link: 'https://vincentfavour.medium.com/5-machine-learning-algorithms-every-data-scientist-should-master-in-2023-with-example-datasets-549815f0c15c'
    },
    {
      title: 'The Future of Web Development: Incorporating Machine Learning',
      excerpt: 'Exploring how machine learning is transforming web development and creating more intelligent, personalized user experiences.',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Published on Medium',
      readTime: '7 min read',
      tags: ['Web Development', 'Machine Learning', 'Future Tech'],
      link: 'https://vincentfavour.medium.com/the-future-of-web-development-incorporating-machine-learning-1bc7d937500d'
    },
    {
      title: 'How to troubleshoot and debug data problems',
      excerpt: 'Practical strategies and techniques for identifying, diagnosing, and resolving common data quality issues in real-world projects.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Published on Medium',
      readTime: '9 min read',
      tags: ['Data Quality', 'Debugging', 'Best Practices'],
      link: 'https://vincentfavour.medium.com/how-to-troubleshoot-and-debug-data-problems-a3599acf23c5'
    },
    {
      title: 'Data Cleaning Best Practices: A Comprehensive Guide to Avoiding Mistakes and Ensuring Data Quality',
      excerpt: 'Essential techniques for transforming messy data into clean, reliable datasets that drive accurate analysis and insights.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Published on Medium',
      readTime: '12 min read',
      tags: ['Data Cleaning', 'Data Quality', 'Best Practices'],
      link: 'https://vincentfavour.medium.com/data-cleaning-best-practices-a-comprehensive-guide-to-avoiding-mistakes-and-ensuring-data-quality-b30ea93d627a'
    }
  ];

  const additionalArticles = [
    'How to choose the right data science tools',
    'Most Common Mistakes Data Enthusiasts Make (And How to Avoid Them)',
    'The Future of Chatbots: A Comprehensive Look at the Potential Applications and Advancements',
    '10 roles you can apply for if you have data science skills',
    'New Year, New You: A Guide to Staying Inspired and Achieving Your Dreams in 2024',
    'Exploring the Use of Data Science Across Different Industries and Domains',
    'Why your computer science degree will not guarantee you a job',
    'Exploring the Differences Between Data Science and Traditional Analytics',
    'The Importance of Data Science: How It\'s Transforming Industries and Shaping the World',
    'The State of Data Science in Nigeria: Demand, Salaries, and Opportunities',
    'The Pain of Discipline versus the Pain of Regret: Navigating the Choices that Shape Our Lives',
    'Maximizing Your Productivity in Academics: Overcoming Common Obstacles',
    'The Myth of Programming Being the Only High Paying Career in Nigeria',
    'The Consequences of Not Specializing in Tech as a Beginner',
    'Exploring the Capabilities of ChatGPT: The AI Language Model Taking the World by Storm'
  ];

  return (
    <section id="articles" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Insights & Articles
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Exploring complex data challenges, machine learning advancements, and practical applications in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              {/* Article Image */}
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium bg-black bg-opacity-50 px-4 py-2 rounded-full">
                    Read Article
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                  {article.title}
                </h3>

                {/* Article Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-200 dark:bg-gray-600 text-purple-600 dark:text-purple-400 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-sm group-hover:translate-x-1 transition-transform duration-200"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="text-center">
          <a
            href="https://vincentfavour.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full font-medium transition-all duration-200 hover:scale-105 flex items-center mx-auto gap-2 w-fit"
          >
            <BookOpen className="w-5 h-5" />
            View All Articles on Medium
          </a>
        </div>

        {/* Additional Articles List */}
        <div className="mt-16 bg-gray-100 dark:bg-gray-700 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            More Articles & Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalArticles.map((title, index) => (
              <a
                key={index}
                href="https://vincentfavour.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-105 group"
              >
                <h4 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                  {title}
                </h4>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;