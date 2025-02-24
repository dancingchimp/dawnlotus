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
    <div className="grid md:grid-cols-3 gap-8">
      {practices.map((practice, index) => (
        <Link
          key={index}
          to={practice.link}
          className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10 
                   hover:border-jade-500/30 transition-all duration-300"
        >
          <div className="mb-4">
            <h3 className="text-xl font-serif text-gold-500">{practice.title}</h3>
            <p className="text-stone-400 font-chinese">{practice.chinese}</p>
          </div>
          <p className="text-stone-300">{practice.description}</p>
        </Link>
      ))}
    </div>
  );
}

export default PracticeOverview;