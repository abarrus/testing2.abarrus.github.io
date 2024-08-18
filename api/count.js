let count = 0;

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ count });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
