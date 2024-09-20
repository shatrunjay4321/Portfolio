import styles from './styles.module.css';
import {useEffect, useState} from 'react'

function Testimonials ({reference}) {
  const testimonials = [
    {
      name: 'Ishan Jain',
      content: "Shatrunjay is an exceptional front-end developer with a deep understanding of React, JavaScript, and Redux. His ability to translate complex designs into seamless, responsive UIs is impressive. His focus on performance optimization and clean code ensures smooth, efficient web applications that exceed user expectations."
    },
    {
      name: 'Shreyas Ranjan',
      content: "Shatrunjay’s competitive programming background makes him a problem-solving powerhouse. His strong grasp of algorithms and data structures complements his backend expertise, allowing him to develop scalable solutions. His work on optimizing API performance and database management in backend projects has significantly improved overall system efficiency."
    },
    {
      name: 'Divyansh Asthana',
      content: "As a well-rounded developer, Shatrunjay excels in both front-end and back-end technologies. His skills in React and Redux ensure visually stunning and responsive web applications, while his backend knowledge, especially in optimizing API performance and managing large datasets, allows him to build robust and efficient systems."
    }
  ]
  const [state, setState] = useState(0);

  const handlePrevClick = () => {
    setState((prev) => prev - 1);
  }

  const handleNextClick = () => {
    setState((prev) => prev + 1);
  }

  useEffect(() => {
    const testimonialsContainer = document.querySelector(`.${styles.testimonials}`);
    testimonialsContainer.style.transform = `translateX(-${state * 730}px)`;
  }, [state]);

  return (
    <div className={styles.app} ref={reference}>
        <div className={styles.heading_container}>Testimonials</div>
        <div className={styles.card_container}>
            <button onClick={handlePrevClick} disabled={state === 0}>{`<`}</button>
            <div className={styles.testimonials_container}>
              <div className={styles.testimonials}>
                {(testimonials || []).map((item) => {
                  return (
                    <div className={styles.testimonial}>
                      <div>
                        <img src="./profile1.jpg" alt="profile" className={styles.profile} key={item?.name} />
                        <div className={styles.name}>{item?.name}</div>
                      </div>
                      <div className={styles.content}>{item?.content}</div>
                    </div>
                  )
                })}
              </div>
            </div>
            <button onClick={handleNextClick} disabled={state === testimonials.length - 1}>{`>`}</button>
        </div>
    </div>
  );
}

export default Testimonials;
