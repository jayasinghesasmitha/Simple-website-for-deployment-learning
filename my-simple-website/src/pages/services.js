// pages/services.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Services() {
  const router = useRouter();

  useEffect(() => {
    fetch('/api/check-auth')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to check auth');
        }
        return response.json();
      })
      .then((data) => {
        if (!data.authenticated) {
          router.push('/signin');
        }
      })
      .catch((error) => {
        console.error('Error checking auth:', error);
        router.push('/signin');
      });
  }, [router]);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Services Page</h1>
      <p>Welcome, Gainer! Browse available services here.</p>
      <button onClick={() => router.push('/home')}>Go to Home</button>
    </div>
  );
}