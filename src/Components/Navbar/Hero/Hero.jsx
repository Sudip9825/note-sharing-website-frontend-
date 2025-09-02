import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <h1>From One Notebook to the World.</h1>
        <p>
          This web-based “note-sharing platform” is an internet service that
          allows users to write, organize, and share digital notes easily across
          any internet connected devices such as PCs, tablets, and smartphones.
          It provides safe cloud storage, real-time synchronization, and
          always-updated data access via a web browser. The platform supports
          rich media formats such as PDFs, pictures, making it perfect for
          academic research, project management, and personal study. User
          identification (email/Google login) and role-based access (Student,
          Admin) enable structured content control while promoting collaboration
          through features such as ratings, comments, and advanced search.
        </p>
        <Link to="/login">
          <button className="btn">Sign Up Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
