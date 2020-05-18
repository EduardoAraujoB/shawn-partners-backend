import { Request, Response } from 'express';
import axios from 'axios';

async function getUserRepos(req: Request, res: Response) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${req.query.username}/repos`
    );

    return res.json(response.data);
  } catch (err) {
    return res.status(400).json(err);
  }
}

export default getUserRepos;
