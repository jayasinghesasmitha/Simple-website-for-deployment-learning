// pages/index.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Simple Website!</h1>
      <p>This is the homepage.</p>
      <Link href="/signin">
        <button className={styles.button}>Go to Sign In Page</button>
      </Link>
    </div>
  );
}