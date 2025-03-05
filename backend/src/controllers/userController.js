import * as db from '../db/db.js';

export const getUsers = async (req, res) => {
  try {
    const result = await db.query(`SELECT * FROM users`);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};