import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  try {
    const { secret } = req.headers;

    console.log(secret);
    // console.log(req.headers.path);

    if (secret !== process.env.REVALIDATION_SECRET) {
      return res.status(401).json({ message: 'Invalid secret token' });
    }

    // Revalidate the specified path
    await res.revalidate('/en');
    await res.revalidate('/pl');
    await res.revalidate('/ua');

    return res
      .status(200)
      .json({ message: `Revalidation successful` });
  } catch (error) {
    // Check if the error is an instance of Error and safely access its message
    if (error instanceof Error) {
      console.error('Revalidation error:', error.message);
      return res
        .status(500)
        .json({ message: 'Revalidation failed', error: error.message });
    }

    // Handle unexpected error types
    console.error('Unexpected error:', error);
    return res.status(500).json({ message: 'An unexpected error occurred' });
  }
}
