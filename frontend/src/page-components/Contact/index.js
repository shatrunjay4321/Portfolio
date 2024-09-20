import styles from './styles.module.css';

function Contact ({reference}) {
  const handles = [
    {
        name: 'Phone',
        icon: './phone.svg',
        value: '+91 9005588431',
    },
    {
      name: 'LinkedIn',
      icon: './linkedin.svg',
      value: 'shatrunjay4321',
    },
    {
      name: 'Github',
      icon: './github.svg',
      value: 'shatrunjay4321',
    },
    {
      name: 'Instagram',
      icon: './instagram.svg',
      value: 'aapka_apna_shatru',
    },
    {
      name: 'Email',
      icon: './gmail.svg',
      value: 'shatrunjay4321@gmail.com',
    },
    {
      name: 'Telegram',
      icon: './telegram.svg',
      value: 'aapka_apna_shatru',
    }
]

  return (
    <div className={styles.app} ref={reference}>
        <img src="./work3.jpg" alt="back" className={styles.background} />
        <div className={styles.heading_container}>Contact Me</div>
        <div className={styles.card_container}>
            {(handles || []).map((handle) => {
                return (
                    <div key={handle?.name} className={styles.app_container}>
                        <img src={handle?.icon} alt="icon" />
                        <div className={styles.name}>{handle?.name}</div>
                        <div className={styles.description}>{handle?.value}</div>
                    </div>
                )
            })}
        </div>
    </div>
  );
}

export default Contact;
