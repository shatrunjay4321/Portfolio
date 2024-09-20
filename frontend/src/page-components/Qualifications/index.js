import { useState } from 'react';
import styles from './styles.module.css';

function Qualifications ({reference}) {

  const education = [
    {
      name: "Bachelors of Technology",
      company: "NIT Allahabad",
      tenure: "July 2019 - July 2023"
    },
    {
      name: "Intermediate",
      company: "Central Academy",
      tenure: "2018"
    },
    {
      name: "High School",
      company: "Central Academy",
      tenure: "2016"
    }
  ];

  const work_experience = [
    {
      name: "Software Development Engineer 1",
      company: "Brane Enterprises",
      tenure: "January 2024 - Present"
    },
    {
      name: "Software Development Engineer 1",
      company: "Cogoport",
      tenure: "July 2023 - January 2024"
    },
    {
      name: "Software Development Engineer Intern",
      company: "Cogoport",
      tenure: "January 2023 - July 2023"
    }
  ];

  const [data, setData] = useState(education);

  return (
    <div className={styles.app} ref={reference}>
      <div className={styles.heading_container}>
            <div>Qualifications</div>
            <div className={styles.sub_heading}>My Personal Journey</div>
        </div>
        <div className={styles.card_container}>
            <div className={styles.button_container}>
              <button onClick={() => setData(education)}><img src="./education.svg" alt="education" /> Education</button>
              <button onClick={() => setData(work_experience)}><img src="./work.svg" alt="work" /> Work Experience</button>
            </div>
            <div className={styles.container}>
              {(data || []).map((item, idx) => {
                return (
                  <div key={idx} className={`${styles.card} ${idx%2 ? styles.left_card : styles.right_card} ${idx === data.length-1 ? styles.last : ''}`}>
                    <div>
                      <div className={styles.name}>{item?.name}</div>
                      <div className={styles.company}>{item?.company}</div>
                    </div>
                    <div className={styles.tenure}><img src="./calendar.svg" alt="calendar" />{item?.tenure}</div>
                    <div className={`${idx%2 ? styles.left : styles.right} ${styles.dot}`} />
                  </div>
                )
              })}
            </div>
        </div>
    </div>
  );
}

export default Qualifications;
