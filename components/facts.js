import styles from '../styles/facts.module.css'
import { useState } from 'react';

const Facts = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className={styles.facts}>
      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        Quick facts {isCollapsed ? '-' : '+'}
      </button>
      <div className={`${styles.quickfacts} ${isCollapsed ? styles.expanded : styles.collapsed}`} aria-expanded={isCollapsed}>
        <div className="row">
          <div className="column">Area - 167.23 km2</div>
          <div className="column">Population - <a href='https://www.census2011.co.in/census/city/478-tiruchirappalli.html'>847387</a></div>
          <div className="column">City type - Urban</div> 
        </div>
      </div>
    </div>
  );
};

export default Facts;