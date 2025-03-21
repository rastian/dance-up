import type { QueryConfig } from 'pg';
import * as db from '../db/db.js';
import { User } from '../models/User.entity.js'

// Get All Students
export const getAllUsers = async (): Promise<User[]> => {
  const queryText = "SELECT id, email, first_name, last_name, role FROM users";
  const query: QueryConfig = {
    text: queryText,
  };
  const result = await db.query(query);
  return result.rows;
};

// Get Student By ID
export const getUserById = async (id: number): Promise<User | null> => {
  const queryText = "SELECT id, email, first_name, last_name, role FROM users WHERE id = $1";
  const query: QueryConfig = {
    text: queryText,
    values: [id],
  }
  const result = await db.query(query);
  return result.rows[0];
};

// Get Student By Email
export const getUserByEmail = async (email: string): Promise<User | null> => {
  const queryText = 'SELECT id, email, first_name, last_name, role FROM users WHERE email = $1';
  const query: QueryConfig = {
    text: queryText,
    values: [email],
  }
  const result = await db.query(query);
  return result.rows[0];
}

// Create new User