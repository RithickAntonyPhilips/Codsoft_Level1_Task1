import React from 'react';
import './Internships.styles.css';
import CA from './CODEALPHA.jpg'
import CS from './CODSOFT.jpg'

const internships = [
  {
    title: 'Web Designing and Development',
    institute: 'Meck Teck Research Foundation',
    file: '',
    aos: 'fade-right',
  },
  {
    title: 'Graphic Designer Intern',
    institute: 'Code Alpha',
    file: CA,
    aos: 'fade-left',
  },
  {
    title: 'Web Development Intern',
    institute: 'Cod Soft',
    file: CS,
    aos: 'fade-right',
  },
  {
    title: 'Full Stack Developer Intern',
    institute: '?',
    file: '',
    aos: 'fade-left',
  },
];

const Internships = () => (
  <section id="internships">
    <h2>Internships</h2>
    <div className="internships-container">
      {internships.map((internship, index) => (
        <div 
          className="internship-card" 
          key={index} 
          data-aos={internship.aos} 
        >
          <h3>{internship.title}</h3>
          <p>{internship.institute}</p>
          <a href={internship.file} download>
            <button>Download Details</button>
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Internships;
