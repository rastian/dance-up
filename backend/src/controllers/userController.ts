import type { Request, Response } from 'express';
import * as UserService from '../services/userService.js';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  console.log('GET /users');
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error')
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  console.log('GET /users/:id');
  try {
    const id = parseInt(req.params.id, 10);
    const user = await UserService.getUserById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({message: 'User not found'});
    }
    
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error')
  }
};

export const getUserByEmail = async (req: Request, res: Response): Promise<void> => {
  console.log('GET /users/:email');
  try {
    const email = req.params.email;
    const user = await UserService.getUserByEmail(email);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({message: 'User not found'});
    }

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}
