import React from 'react';
import visionIcon from '../assets/why1.svg';
import performanceIcon from '../assets/why2.svg';
import securityIcon from '../assets/why3.svg';
import strategyIcon from '../assets/why4.svg';

const features = [
  {
    icon: visionIcon,
    title: 'Clarified Vision & Target',
    description: 'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy.'
  },
  {
    icon: performanceIcon,
    title: 'High Performance',
    description: 'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy.'
  },
  {
    icon: securityIcon,
    title: 'Maintain Security',
    description: 'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy.'
  },
  {
    icon: strategyIcon,
    title: 'Better Strategy & Quality',
    description: 'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy.'
  }
];

function Features() {
  return (
    <section className="features container">
      <h3>WHY CHOOSE US</h3>
      <h1>WHY WE ARE BEST</h1>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <img src={feature.icon} alt={feature.title} />
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
