import Link from 'next/link';
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <span className={styles.headerTitle}>Trichy Data Portal</span>
      <span className={styles.headerLinks}>
        <Link href='/about'>
            <a>About</a>
        </Link>
        <Link href='/api'>
            <a>API</a>
        </Link>
        <Link href='/contact'>
            <a>Contact</a>
        </Link>
      </span>
      
    </div>
  );
};

export default Header;