// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated
    fetch('/api/check-auth')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to check auth');
        }
        return response.json();
      })
      .then((data) => {
        if (data.authenticated) {
          router.push('/home'); // Redirect to home if authenticated
        }
      })
      .catch((error) => {
        console.error('Error checking auth:', error);
        // Stay on the landing page if not authenticated
      });
  }, [router]);

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