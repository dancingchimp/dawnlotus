// src/pages/practice/PracticeSession.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import PracticeSession from '../../components/practice/PracticeSession';

const PracticeSessionPage = () => {
  const { id } = useParams();
  
  return <PracticeSession practiceId={id} />;
};

export default PracticeSessionPage;