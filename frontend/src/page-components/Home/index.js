import styles from './styles.module.css';

function Home ({scrollToSection, reference}) {
    const ICONS = [
        { src: './instagram.svg', onClick: () => window.open("https://www.instagram.com/aapka_apna_shatru/", "_blank") },
        { src: './linkedin.svg', onClick: () => window.open("https://www.linkedin.com/in/shatrunjay4321/", "_blank") },
        { src: './github.svg', onClick: () => window.open("https://github.com/shatrunjay4321", "_blank") }
    ]

  return (
    <div className={styles.app} ref={reference}>
        <div className={styles.icon_container}>
            {(ICONS || []).map((icon) => <img key={icon?.src} src={icon?.src} alt={icon?.src} className={styles.icon} onClick={icon?.onClick} />)}
        </div>
        <div className={styles.about_container}>
            <div className={styles.about_upper_section}>
                <div>
                    <div className={styles.title}>Shatrunjay Srivastava ✋</div>
                    <div className={styles.designation}><div className={styles.before}>_______</div>Software Development Engineer</div>
                    <div className={styles.about_content}>I'm a Software Developer with 1+ year of experience in frontend and backend stack</div>
                    <button className={styles.say_hello_button} onClick={() => window.open("https://www.linkedin.com/in/shatrunjay4321/", "_blank")}>Say Hello <img src="./send.svg" alt="send"/></button>
                </div>
                <div className={styles.image_container}>
                    <img src="./profile.jpg" alt="img" className={styles.image}></img>
                </div>
            </div>
            <button className={styles.about_lower_section} onClick={() => scrollToSection('about')}>
                <img src="./scroll.svg" alt="scroll" /> Scroll Down ⬇
            </button>
        </div>
    </div>
  );
}

export default Home;
