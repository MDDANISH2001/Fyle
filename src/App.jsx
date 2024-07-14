import React, { useState } from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import ServicesSlider from './components/ServicesSlider';
import Projects from './components/Projects';
import CompanyGrowth from './components/CompanyGrowth';
import Feedback from './components/Feedback';
import Features from './components/Features';
import { Footer } from './components/Footer';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const handleFormClose = () => {
    setShowContactForm(false);
  };

  return (
    <div className="App">
      <Header onContactClick={handleContactClick} />
      {showContactForm && <ContactForm onClose={handleFormClose} />}
      <div className='serviceApp'>
      <ServicesSlider />
      </div>
      <Features />
      <Projects />
      <div className='companyApp'>
      <CompanyGrowth />
      </div>
      <Feedback />      
      <div className='footerApp'>
      <Footer />
      </div>
    </div>
  );
}

export default App;
