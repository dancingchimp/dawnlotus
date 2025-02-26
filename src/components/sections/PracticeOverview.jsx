// src/components/sections/PracticeOverview.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const practices = [
  {
    title: "Daoist Yoga",
    chinese: "道瑜伽",
    description: "Integration of physical postures with energy cultivation",
    link: "/practice"
  },
  {
    title: "Qigong",
    chinese: "氣功",
    description: "Traditional energy development practices",
    link: "/practice/qigong"
  },
  {
    title: "Meditation",
    chinese: "靜坐",
    description: "Still and moving meditation techniques",
    link: "/meditation"
  }
];

function PracticeOverview() {
  return (
    <div className="grid md:grid-cols-3 gap-8 home-practices-grid">
      {practices.map((practice, index) => (
        <Link
          key={index}
          to={practice.link}
          className="bg-stone-800/30 rounded-xl border border-jade-500/10 
                   hover:border-jade-500/30 transition-all duration-300 practice-path-card"
        >
          <div className="study-title">
            <h3 className="practice-path-title">{practice.title}</h3>
            <p className="practice-path-chinese">{practice.chinese}</p>
          </div>
          <p className="practice-path-description">{practice.description}</p>
        </Link>
      ))}
    </div>
  );
}

export default PracticeOverview;