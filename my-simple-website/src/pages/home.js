import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Homepage</h1>
      <button className={styles.homeButton}>Sign Out</button>
    </div>
  );
}