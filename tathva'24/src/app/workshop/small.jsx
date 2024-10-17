import Link from 'next/link';
import styles from '../workshop/small.module.css';

const SmallScreenLayout = () => {
  return (
    <div className={styles.container}>
      <Link href="/workshops" className={styles.card}>
        <div>
          <img
            src="/work.png"
            alt="Workshops"
            className={styles.image}
          />
          <span className={styles.label1}>WORKSHOPS</span>
        </div>
      </Link>
      <Link href="/lectures" className={styles.card}>
        <div>
          <img
            src="/lec.png"
            alt="Lectures"
            className={styles.image}
          />
          <span className={styles.label2}>LECTURES</span>
        </div>
      </Link>
      <Link href="/competitions" className={styles.card}>
        <div>
          <img
            src="/comp.png"
            alt="Competitions"
            className={styles.image}
          />
          <span className={styles.label3}>COMPETITIONS</span>
        </div>
      </Link>
    </div>
  );
};

export default SmallScreenLayout;

