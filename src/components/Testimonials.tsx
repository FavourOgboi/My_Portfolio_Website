import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, User, GraduationCap, Briefcase } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'teaching' | 'projects'>('teaching');
  const [currentIndex, setCurrentIndex] = useState(0);

  const teachingTestimonials = [
    {
      name: 'Sarah A',
      role: 'Python Student',
      rating: 5,
      text: 'Ogboi Favour did an excellent job explaining SQL concepts and teaching Power BI and Tableau. He broke down the material into simple terms with practical examples, making it easy to understand. To reinforce learning, he assigned daily assignments and provided a project for hands-on experience. He also went the extra mile by teaching how to use GitHub for project management. I highly recommend him to anyone in need of a tutor, as he is not only knowledgeable but also offers a flexible schedule to accommodate students.'
    },
    {
      name: 'Anne',
      role: 'Computer Programming Student',
      rating: 5,
      text: 'He is punctual, focused and very supportive.'
    },
    {
      name: 'Foz',
      role: 'Computer Programming Student',
      rating: 5,
      text: 'Ogboi an excellent tutor, he care so much about his students, and most importantly he loves to teach, he takes his time to explain, also he makes sure he gets your attention, he asks questions when you answer he said "Thank You" I just love his attitude, I am definitely will keep him in my journey to data science, I\'m grateful I met someone like him in this platform'
    },
    {
      name: 'Kalu',
      role: 'Computer Programming Student',
      rating: 5,
      text: 'Very patient and willing to guide you through each step'
    },
    {
      name: 'Chinaza',
      role: 'Computer Programming Student',
      rating: 5,
      text: 'Mr Ogboi is such a patient person, even when I wasn\'t following the right way to do things, he was patient enough to put me through. I seriously recommend him to everyone out there that really wants to learn, cause his teaching pattern is top notch.'
    },
    {
      name: 'Hamed',
      role: 'Computer Programming Student',
      rating: 5,
      text: 'Thank you so much sir for the first class, you really open my brain more and I pray that God will continue to increase your knowledge wisdom and understanding as you\'re doing for others too. Amen.'
    },
    {
      name: 'Nwebonyi',
      role: 'Python Student',
      rating: 5,
      text: 'He is a very passionate teacher. He loves the job not the money. He gives his bests and aim at bringing out the best from his student.'
    }
  ];

  const projectTestimonials = [
    {
      name: 'Adebayo Olumide',
      role: 'Data Analyst, DataFlow Analytics',
      rating: 5,
      text: 'Vincent assisted our startup with a customer analytics project and delivered exceptional results. His expertise in machine learning and data analysis helped us build a robust churn prediction model. He was professional, met all deadlines, and provided clear documentation. Great collaboration experience!'
    },
    {
      name: 'Emily Chen',
      role: 'PhD Student, University of Toronto',
      rating: 5,
      text: 'Vincent helped me with my medical data analysis project and was incredibly knowledgeable. He assisted with the statistical analysis and data visualization components of my thesis. His understanding of healthcare data and research methodologies was impressive. Highly recommend for any research collaboration!'
    },
    {
      name: 'David Okafor',
      role: 'Petroleum Engineering Student, Federal University of Petroleum Resources',
      rating: 5,
      text: 'Vincent helped me with my final year project on petroleum data analysis and I got an A! He provided excellent guidance on data preprocessing and statistical analysis. His practical approach to solving complex problems and clear explanations made the collaboration very productive. Delivered quality work on time and helped me understand the concepts thoroughly!'
    },
    {
      name: 'Chioma Nwosu',
      role: 'Computer Science Student, Federal University of Petroleum Resources',
      rating: 5,
      text: 'Vincent helped me with my final year project on data analysis and machine learning. His guidance was invaluable in understanding complex algorithms and implementing them properly. He provided excellent mentorship throughout the project and helped me achieve great results. Very knowledgeable and patient teacher!'
    },
    {
      name: 'James Mitchell',
      role: 'Graduate Student, University of Toronto',
      rating: 5,
      text: 'I collaborated with Vincent on a predictive modeling project for my dissertation. His expertise in Python and machine learning algorithms was invaluable. He helped optimize our models and provided insights that significantly improved our results. Professional and reliable throughout the project!'
    }
  ];

  const currentTestimonials = activeTab === 'teaching' ? teachingTestimonials : projectTestimonials;
  const totalReviews = teachingTestimonials.length + projectTestimonials.length;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % currentTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + currentTestimonials.length) % currentTestimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            What students and clients say about working with me
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-1">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">5.0</span>
            <span className="text-gray-600 dark:text-gray-300">({totalReviews} reviews)</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-800 p-1 rounded-full shadow-lg">
            <button
              onClick={() => {
                setActiveTab('teaching');
                setCurrentIndex(0);
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'teaching'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              Teaching ({teachingTestimonials.length})
            </button>
            <button
              onClick={() => {
                setActiveTab('projects');
                setCurrentIndex(0);
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'projects'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              Projects ({projectTestimonials.length})
            </button>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-8">
              <Quote className="w-12 h-12 text-purple-600 dark:text-purple-400" />
            </div>

            <div className="text-center">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 italic">
                "{currentTestimonials[currentIndex].text}"
              </p>

              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-teal-500 flex items-center justify-center border-4 border-purple-100 dark:border-purple-900">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {currentTestimonials[currentIndex].name}
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">
                    {currentTestimonials[currentIndex].role}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-1">
                {renderStars(currentTestimonials[currentIndex].rating)}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {currentTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-purple-600 dark:bg-purple-400'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid (Mobile-friendly overview) */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            All {activeTab === 'teaching' ? 'Student' : 'Client'} Reviews
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-teal-500 flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-purple-600 dark:text-purple-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {renderStars(testimonial.rating)}
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-4">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;