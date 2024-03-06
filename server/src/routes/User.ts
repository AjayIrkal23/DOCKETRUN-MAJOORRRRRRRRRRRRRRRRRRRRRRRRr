import express, { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';
import authenticate, { adminAuthenticate } from '../middleware/authenticate';

const router = express.Router();

// router.get('/hello', (req, res, next) => res.status(200).json({ message: 'hello vaiii' }));
// router.post('/signUp', UserData.signUp);

export = router;
