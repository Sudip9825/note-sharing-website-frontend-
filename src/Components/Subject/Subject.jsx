import React from 'react';
import { useParams } from 'react-router-dom';
import './Subject.css';

const Subject = () => {
  const { subjectName } = useParams();

  // In a real application, you would fetch notes based on subjectName
  // and render them here. For now, we'll just display the subject name.

  return (
    <div className="subject-page">
      <h2>Notes for {subjectName.charAt(0).toUpperCase() + subjectName.slice(1)}</h2>
      <p>This is where notes for {subjectName} will be displayed.</p>
      {/* You can add more content here, e.g., a list of notes, search bar, etc. */}
    </div>
  );
};

export default Subject;
