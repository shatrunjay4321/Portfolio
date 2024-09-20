import styles from './styles.module.css';

function NavBar ({scrollToSection}) {

    const NavBarElements = [
        {
            name: 'Home',
            onclick: () => {scrollToSection('home')},
        },
        {
            name: 'About',
            onclick: () => scrollToSection('about'),
        },
        {
            name: 'Skills',
            onclick: () => scrollToSection('skills'),
        },
        {
            name: 'Qualifications',
            onclick: () => scrollToSection('qualifications'),
        },
        {
            name: 'Handles',
            onclick: () => scrollToSection('handles'),
        },
        {
            name: 'Testimonials',
            onclick: () => scrollToSection('testimonials'),
        },
        {
            name: 'Contact',
            onclick: () => scrollToSection('contact'),
        },
    ]

  return (
    <div className={styles.app}>
        <div className={styles.name}>
            Shatrunjay
        </div>
        <div className={styles.navbar}>
            {(NavBarElements || []).map((elem) => {
                return (
                    <button className={styles.button} onClick={elem?.onclick}>{elem?.name}</button>
                )
            })}
        </div>
    </div>
  );
}

export default NavBar;
