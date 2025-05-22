// pages/home.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Home() {
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
    <>
      <div className="homepage">
        <header className="hero">
          <h1><em>Welcome</em></h1>
          <p>Learn from yourself. Help others too.</p>
          <button className="btn">Get started</button>
          <div className="heroImage">
            <Image
              src="/assets/images/Homepage_images/brain.png"
              alt="Brain Tech"
              width={800}
              height={600}
              className="heroImg"
            />
          </div>
        </header>

        <section className="topics">
          <h2>Popular Topics</h2>
          <div className="topicsGrid">
            <div className="topicCard">
              <Image
                src="/assets/images/Homepage_images/AI.png"
                alt="Artificial Intelligence"
                width={100}
                height={100}
                className="topicImg"
              />
              <p><strong>Artificial Intelligence</strong><br /> box 1</p>
            </div>
            <div className="topicCard">
              <Image
                src="/assets/images/Homepage_images/crypto.png"
                alt="Crypto and Money Trading"
                width={100}
                height={100}
                className="topicImg"
              />
              <p><strong>Crypto and Money Trading</strong><br /> box 2</p>
            </div>
            <div className="topicCard">
              <Image
                src="/assets/images/Homepage_images/cyber.png"
                alt="Cyber Security"
                width={100}
                height={100}
                className="topicImg"
              />
              <p><strong>Cyber Security</strong><br /> box 3</p>
            </div>
          </div>
        </section>

        <section className="certifications">
          <h2>Certifications and Competitions</h2>
          <div className="certificationsContainer">
            <div className="text">
              <h3>Certifications</h3>
              <p>You can achieve the targets and get your certifications.</p>
              <p className="note">Note: For selected ones only</p>
              <h3>Competitions</h3>
              <p>You can participate as we will organize a competition.</p>
              <button className="btn">Get Started</button>
            </div>
            <div className="certImage">
              <Image
                src="/assets/images/Homepage_images/certificate.png"
                alt="AI Hand"
                width={400}
                height={300}
                className="certImg"
              />
            </div>
          </div>
        </section>

        <button onClick={() => router.push('/signin')} className="signOutBtn">
          Sign Out
        </button>
      </div>
      <style jsx>{`
        .homepage {
          font-family: 'Poppins', sans-serif;
          color: #333;
          background: #fff;
          padding: 20px;
        }

        .hero {
          text-align: center;
          margin-bottom: 40px;
        }

        .hero h1 {
          font-size: 2.5rem;
          font-weight: 600;
        }

        .hero p {
          font-size: 1rem;
          color: #666;
        }

        .btn {
          background: black;
          color: white;
          padding: 10px 20px;
          border: none;
          margin: 15px 0;
          cursor: pointer;
          transition: background 0.3s ease-in-out;
        }

        .btn:hover {
          background: #444;
        }

        .heroImage {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .heroImg {
          width: 80%;
          max-width: 800px;
          border-radius: 10px;
          transition: transform 0.3s ease-in-out;
        }

        .heroImg:hover {
          transform: scale(1.05);
        }

        .topics {
          text-align: center;
          margin: 40px 0;
        }

        .topicsGrid {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .topicCard {
          background: #f9f9f9;
          padding: 15px;
          border-radius: 10px;
          text-align: center;
          transition: transform 0.3s ease-in-out;
        }

        .topicCard:hover {
          transform: translateY(-5px);
        }

        .topicImg {
          width: 100px;
          border-radius: 10px;
          transition: transform 0.3s ease-in-out;
        }

        .topicImg:hover {
          transform: scale(1.1);
        }

        .certifications {
          margin-top: 50px;
          padding: 20px;
          text-align: center;
        }

        .certificationsContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
        }

        .text {
          max-width: 400px;
          text-align: left;
        }

        .note {
          font-size: 0.9rem;
          color: #888;
        }

        .certImg {
          width: 100%;
          max-width: 400px;
          border-radius: 10px;
          transition: transform 0.3s ease-in-out;
        }

        .certImg:hover {
          transform: scale(1.05);
        }

        .signOutBtn {
          background: #333;
          color: white;
          padding: 10px 20px;
          border: none;
          margin: 20px auto;
          display: block;
          cursor: pointer;
          transition: background 0.3s ease-in-out;
        }

        .signOutBtn:hover {
          background: #555;
        }

        @media (max-width: 768px) {
          .topicsGrid,
          .certificationsContainer {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}