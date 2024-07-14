import React from 'react';
import growth1 from '../assets/clock (3).svg'
import growth2 from '../assets/heart (2).svg'
import growth3 from '../assets/Path 4402.svg'
import growth4 from '../assets/Path 4406.svg'

const companyGrowth = [
  {
    icon: growth2,
    title: '199 +',
    description: 'Satisfied Customers'
  },
  {
    icon: growth1,
    title: '1591 +',
    description: 'Days Of Operation'
  },
  {
    icon: growth3,
    title: '283 +',
    description: 'Complete Projects'
  },
  {
    icon: growth4,
    title: '75 +',
    description: 'Win Awards'
  }
];


function CompanyGrowth() {
  return (
    <section className="company-growth container">
      <h3>EXPERTS GROWTH</h3>
      <h1>OUR COMPANY GROWTH</h1>
      <div className="growth-stats">
        {companyGrowth.map((feature, index) => (
          <div className="stat-item" key={index}>
            <img src={feature.icon} alt={feature.title} />
            <div>{feature.title}</div>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CompanyGrowth;
