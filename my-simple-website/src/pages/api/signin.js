// pages/api/signin.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Example: Dummy authentication logic
    // Replace with real authentication (e.g., database, Firebase, etc.)
    if (username === 'provider' && password === 'password') {
      // Set a session cookie or token
      res.setHeader('Set-Cookie', 'authToken=provider-token; Path=/; HttpOnly');
      return res.status(200).json({ message: 'Login successful', role: 'provider' });
    } else if (username === 'gainer' && password === 'password') {
      res.setHeader('Set-Cookie', 'authToken=gainer-token; Path=/; HttpOnly');
      return res.status(200).json({ message: 'Login successful', role: 'gainer' });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}