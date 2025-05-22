// pages/create-account.js
import Link from 'next/link';

export default function CreateAccount() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Create Account</h1>
      <p>This is a placeholder for the create account page.</p>
      <Link href="/signin">
        <button>Back to Sign In</button>
      </Link>
    </div>
  );
}