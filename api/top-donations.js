export default async function handler(req, res) {
  const streamlabsUrl = 'https://streamlabs.com/api/v6/1ee94624888da16/leaderboard/tip?interval=all';

  try {
    const response = await fetch(streamlabsUrl);
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch from Streamlabs' });
  }
}
