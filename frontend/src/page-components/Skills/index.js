import Card from './Card/index.js';
import styles from './styles.module.css';

function Skills ({reference}) {
    const skills = [
        {
            stack: 'Frontend Development',
            skills: [
                {
                    skill: "HTML",
                    proficiency: 'Expert'
                },
                {
                    skill: "CSS",
                    proficiency: 'Expert'
                },
                {
                    skill: "JavaScript",
                    proficiency: 'Expert'
                },
                {
                    skill: "ReactJs",
                    proficiency: 'Expert'
                },
                {
                    skill: "NextJs",
                    proficiency: 'Expert'
                },
                {
                    skill: "Redux",
                    proficiency: 'Expert'
                },
                {
                    skill: "TypeScript",
                    proficiency: 'Expert'
                },
                {
                    skill: "ThreeJs",
                    proficiency: 'Beginner'
                },
                {
                    skill: "JavaFX",
                    proficiency: 'Intermediate'
                }
            ]
        },
        {
            stack: 'Backend Development',
            skills: [
                {
                    skill: "NodeJs",
                    proficiency: 'Expert'
                },
                {
                    skill: "Express",
                    proficiency: 'Expert'
                },
                {
                    skill: "MongoDb",
                    proficiency: 'Expert'
                },
                {
                    skill: "MySql",
                    proficiency: 'Expert'
                }
            ]
        },
        {
            stack: 'Competitive Programming',
            skills: [
                {
                    skill: "C++",
                    proficiency: 'Expert'
                },
                {
                    skill: "C",
                    proficiency: 'Intermediate'
                },
                {
                    skill: "Java",
                    proficiency: 'Intermediate'
                }
            ]
        }
    ]
  return (
    <div className={styles.app} ref={reference}>
        <div className={styles.heading_container}>
            <div>Skills</div>
            <div className={styles.sub_heading}>My Technical Level</div>
        </div>
        <div className={styles.card_container}>
            {(skills || []).map((skill) => {
                return (
                    <Card skill={skill} key={skill?.stack} />
                )
            })}
        </div>
    </div>
  );
}

export default Skills;
