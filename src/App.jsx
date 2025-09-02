import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Navbar/Hero/Hero';
import Catagories from './Components/Catagories/Catagories';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import Login from './Components/Login/Login';
import { Routes, Route } from 'react-router-dom';
import Notes from './Components/Notes/Notes'; // Import Notes component

const App = () => {
  const [playState, setPlayState] = useState(false);
  const [showNotes, setShowNotes] = useState(false); // State to control Notes visibility

  return (
    <>
      <Navbar setShowNotes={setShowNotes} /> {/* Pass setShowNotes to Navbar */}
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <div className="container">
              <Title subTitle="Subjects we Offer" title="notes" />
              <Catagories />
              <About setPlayState={setPlayState} />
              <Title subTitle="GALLERY" title=" NOTES photos" />
              <Gallery />
              <Title subTitle="TESTIMONIALS(reviews)" title="What Student Says" />
              <Testimonials />
              <Title subTitle="Contact Us" title="Get in Touch" />
              <Contact />
              <Footer />
            </div>
          </>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
      {showNotes && <Notes onClose={() => setShowNotes(false)} />} {/* Conditionally render Notes */}
    </>
  );
};

export default App;
