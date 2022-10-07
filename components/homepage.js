import styles from '../styles/homepage.module.css'
import Datasets from './datasets';
import Facts from './facts';
import Image from 'next/image';

const Homepage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.description}>
        <div className={styles.text}>
          <p>
            Tiruchirappalli, fondly called as Trichy is one of the important districts of the southern state of Tamil Nadu. 
            It is reckoned as the fourth most prominent municipal corporation and the fourth most 
            magnanimous urban agglomeration in Tamil Nadu. 
          </p>
          <p>
          The city is located almost at the geographical primal point of the southern state of Tamil Nadu. The territory rests between 10.8050°N of the northerly line of latitude and 78.6856° E easterly line of longitude. 
          Estimating the statistical average, the natural elevation of the city is pointed at 88 metres.
          </p>
          <p>
            <a href='https://www.trichycorporation.gov.in/cityinfo.php#menu' target="_blank" rel="noopener noreferrer">Read more..</a>
          </p>
        </div>
        <div className={styles.map}>
          <Image
            src='/map/trichy_map.gif'
            alt="Trichy map"
            width="350px"
            height="300px"
          />
        </div>
      </div>
      <Facts />
      <Datasets />
    </div>
  );
};

export default Homepage;