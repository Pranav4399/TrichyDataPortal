import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = () => {

  return (
    <footer className={styles.footer}>
        <span>Created with <span className={styles.heart}>♡</span> by <a href='https://github.com/Pranav4399/'>ana</a></span>
    </footer>
  );
};

export default Footer;