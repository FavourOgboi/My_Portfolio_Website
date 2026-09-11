import React from 'react';

interface RecognitionItem {
  year: string;
  event: string;
  result: string;
  image: string;
}

const conferences: RecognitionItem[] = [
  {
    year: '2026',
    event: 'Deep Learning Indaba',
    result: 'Participant & poster judge',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    year: '2026',
    event: 'Harvard HSIL Hackathon',
    result: 'Top 4 of 60 teams (sole engineer)',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    year: '2026',
    event: 'SPE Africa Geothermal Datathon',
    result: 'Finalist',
    image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    year: '2026',
    event: 'IndabaX Nigeria — Emission Forecasting',
    result: 'Participant',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const competitions: RecognitionItem[] = [
  {
    year: '2025',
    event: 'NSChE Hackathon',
    result: '1st place · ₦1.2M prize',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    year: '2026',
    event: 'Johns Hopkins Competition (VitalMama)',
    result: 'Finalist',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    year: '2024',
    event: 'FUPRE Entrepreneurship Excellence Award',
    result: 'Top 3 of 60+ groups',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    year: '—',
    event: 'NACOS Most Intelligent Student',
    result: 'Nominated 4× during undergraduate',
    image: 'https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const RecognitionRow: React.FC<{ title: string; items: RecognitionItem[]; reverse?: boolean }> = ({
  title,
  items,
  reverse = false,
}) => (
  <div className="mb-16 last:mb-0">
    <h3 className="font-mono text-xs uppercase tracking-wide text-accent-500 mb-6">{title}</h3>
    <div className="overflow-hidden">
      <div className={`flex gap-4 w-max ${reverse ? 'animate-scroll-recognition-reverse' : 'animate-scroll-recognition'}`}>
        {[...items, ...items].map((item, index) => (
          <article
            key={`${item.event}-${index}`}
            className="w-[320px] sm:w-[360px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-accent-500 transition-colors duration-150 shrink-0"
          >
            <img src={item.image} alt={item.event} className="w-full h-40 object-cover" />
            <div className="p-5">
              <div className="flex items-baseline justify-between mb-2 gap-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">{item.event}</h4>
                <span className="font-mono text-xs text-gray-500 dark:text-gray-400 shrink-0">{item.year}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{item.result}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
);

const Recognition: React.FC = () => (
  <section id="recognition" className="py-20 bg-white dark:bg-gray-800">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Conferences & Recognition</h2>
      </div>

      <RecognitionRow title="Conferences & Events Attended" items={conferences} />
      <RecognitionRow title="Competitions & Awards" items={competitions} reverse />
    </div>
  </section>
);

export default Recognition;
