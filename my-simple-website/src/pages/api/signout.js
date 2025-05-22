// pages/api/signout.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Clear the auth cookie
    res.setHeader('Set-Cookie', 'authToken=; Path=/; HttpOnly; Max-Age=0');
    res.status(200).json({ message: 'Signed out successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}