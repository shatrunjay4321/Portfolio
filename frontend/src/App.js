import styles from './styles.module.css';
import NavBar from './page-components/NavBar/index.js'
import About from './page-components/About/index.js';
import Skills from './page-components/Skills/index.js';
import Home from './page-components/Home/index.js';
import Handles from './page-components/Handles/index.js';
import Contact from './page-components/Contact/index.js';
import Testimonials from './page-components/Testimonials/index.js';
import Qualifications from './page-components/Qualifications/index.js';
import { useEffect, useRef, useState } from 'react';

function App () {
  const sections = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    qualifications: useRef(null),
    handles: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null),
  };

  const [visible, setVisible] = useState(false);

  const scrollToSection = (section) => {
    sections[section].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={styles.app}>
      <NavBar scrollToSection={scrollToSection} />
      <Home scrollToSection={scrollToSection} reference={sections.home} />
      <About reference={sections.about} />
      <Skills reference={sections.skills} />
      <Qualifications reference={sections.qualifications} />
      <Handles reference={sections.handles} />
      <Testimonials reference={sections.testimonials} />
      <Contact reference={sections.contact} />
      {visible && <button className={styles.top} onClick={() => scrollToSection('home')}>🔝</button>}
    </div>
  );
}

export default App;
