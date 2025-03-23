import styles from '../styles/SignIn.module.css';

export default function SignIn() {
  return (
    <div className={styles.container}>
      <h1>Sign In</h1>
      <form className={styles.signInForm}>
        <input
          type="email"
          placeholder="Email"
          className={styles.signInInput}
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.signInInput}
        />
        <button type="submit" className={styles.signInButton}>
          Sign In
        </button>
      </form>
    </div>
  );
}