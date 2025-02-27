// src/components/sections/PracticeOverview.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const practices = [
  {
    title: 'Daoist Yoga',
    chinese: '道瑜伽',
    description: 'Integration of traditional Daoist energy principles with physical postures for complete transformation of the physical and energetic.',
    path: '/practice',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Qigong',
    chinese: '氣功',
    description: 'The skill of working with Qi for health and vitality until one has achieved complete mastery.',
    path: '/meditation',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Meditation',
    chinese: '靜坐',
    description: 'Stillness within stillness(seated) to develop awareness, clarity, insight, discernment, and spiritual connection.',
    path: '/meditation',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  }
];

function PracticeOverview() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {practices.map((practice, index) => (
        <Link
          key={index}
          to={practice.path}
          className="bg-stone-800/30 rounded-xl overflow-hidden border border-jade-500/10 
                   hover:border-jade-500/30 hover:bg-stone-800/50 transition-all duration-300 group"
        >
          <div className="p-6 practice-path-card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="practice-path-title">{practice.title}</h3>
                <p className="practice-path-chinese">{practice.chinese}</p>
              </div>
              <div className="p-3 bg-jade-500/10 rounded-full text-jade-500 group-hover:bg-jade-500/20 transition-colors">
                {practice.icon}
              </div>
            </div>
            <p className="practice-path-description">{practice.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PracticeOverview;