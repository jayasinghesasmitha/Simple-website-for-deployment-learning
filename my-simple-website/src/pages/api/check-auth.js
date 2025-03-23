// pages/api/check-auth.js
import { getCookie } from 'cookies';

export default function handler(req, res) {
  const authCookie = getCookie('auth', { req });
  if (authCookie) {
    return res.status(200).json({ authenticated: true });
  }
  res.status(200).json({ authenticated: false });
}