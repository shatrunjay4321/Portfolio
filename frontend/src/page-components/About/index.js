import styles from './styles.module.css';

function About ({reference}) {
  const about = [
    {
      name: 'Experience',
      content: "1-2 years"
    },
    {
      name: 'Completed',
      content: "10-20 Projects"
    },
    {
      name: 'Company',
      content: "Brane Enterprises"
    }
  ]

  return (
    <div className={styles.app} ref={reference}>
        <div className={styles.heading_container}>
            <div>About Me</div>
            <div className={styles.sub_heading}>My Introduction</div>
        </div>
        <div className={styles.card_container}>
            <img src="./profile.jpg" alt="profile" className={styles.profile} />
            <div className={styles.card_right}>
              <div className={styles.container}>
                {(about || []).map((item) => {
                  return (
                    <div className={styles.card}>
                      <div className={styles.card_name}>{item?.name}</div>
                      <div className={styles.card_content}>{item?.content}</div>
                    </div>
                  )
                })}
              </div>
              <div className={styles.about}>Full Stack Developer | 1+ year work experience in Web Development | NIT Allahabad 2023 Graduate | Enjoy solving puzzles and competing on Codeforces, CodeChef, and Leetcode.</div>
              <button className={styles.download_button} onClick={() => window.open("https://drive.google.com/file/d/1rTxpokN9qihxVAMBDF_XoyJvYamFcWmF/view?usp=sharing", "_blank")}>
                <span>View Resume</span>
                <img src="./files.svg" alt="files" />
              </button>
            </div>
        </div>
    </div>
  );
}

export default About;
