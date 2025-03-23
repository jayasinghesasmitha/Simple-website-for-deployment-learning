// pages/home.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated
    fetch('/api/check-auth')
      .then((response) => response.json())
      .then((data) => {
        if (!data.authenticated) {
          router.push('/signin');
        }
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1>Welcome to the Homepage</h1>
      <button onClick={() => router.push('/signin')} className={styles.button}>
        Sign Out
      </button>
    </div>
  );
}