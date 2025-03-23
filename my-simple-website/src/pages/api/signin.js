// pages/api/signin.js
import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';
import { setCookie } from 'cookies';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  // Connect to MySQL
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sasmitha',
    database: 'website_for_deployment',
  });

  // Check if the user exists
  const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
  if (rows.length === 0) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }

  const user = rows[0];

  // Compare passwords
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }

  // Set a cookie for authentication
  setCookie('auth', user.id, { req, res, maxAge: 60 * 60 * 24 });

  res.status(200).json({ success: true });
}