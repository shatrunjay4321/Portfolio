import styles from './styles.module.css';

function Card ({ skill = {} }) {
    const {stack = '', skills = []} = skill || {};

  return (
    <div className={styles.app}>
        <div className={styles.stack}>{stack}</div>
        <div className={styles.skills_container}>
            {(skills || []).map((item) => {
                return (
                    <div className={styles.skill_container}>
                        <div className={styles.skill}>
                            <img src='./tick.svg' alt="tick" /> {item?.skill}
                        </div>
                        <div className={styles.proficiency}>{item?.proficiency}</div>
                    </div>
                )
            })}
        </div>
    </div>
  );
}

export default Card;
