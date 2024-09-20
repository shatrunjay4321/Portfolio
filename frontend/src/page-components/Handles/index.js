import styles from './styles.module.css';

function Handles ({reference}) {

    const handles = [
        {
            id: "https://codeforces.com/profile/shatrunjay4321",
            name: 'Codeforces',
            icon: './codeforces.svg',
            rating: '1401',
            description: 'Specialist',
            onClick: (link) => window.open(link, '_blank')
        },
        {
            id: "https://leetcode.com/u/shatrunjay4321/",
            name: 'Leetcode',
            icon: './leetcode.svg',
            rating: '1768',
            description: '',
            onClick: (link) => window.open(link, '_blank')
        },
        {
            id: 'https://www.codechef.com/users/shatrunjay4321',
            name: 'Codechef',
            icon: './codechef.svg',
            rating: '1627',
            description: '3 ⭐️',
            onClick: (link) => window.open(link, '_blank')
        }
    ]
    
  return (
    <div className={styles.app} ref={reference}>
        <div className={styles.heading_container}>
            <div>Coding Profiles</div>
            <div className={styles.sub_heading}>Competitive Coding Proficiency</div>
        </div>
        <div className={styles.card_container}>
            {(handles || []).map((handle) => {
                return (
                    <div key={handle?.id} role="button" className={styles.app_container} onClick={() => handle?.onClick(handle?.id)}>
                        <img src={handle?.icon} alt="icon" />
                        <div className={styles.name}>{handle?.name}</div>
                        <div className={styles.rating}>Rating - {handle?.rating}</div>
                        <div className={styles.description}>{handle?.description}</div>
                    </div>
                )
            })}
        </div>
    </div>
  );
}

export default Handles;
