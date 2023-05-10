import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const tokenValid = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { headers, body } = req;
      
      const token = headers['x-auth-token'] as string;

      if(decodeJWT(token)) body.token_access = token;
  
      next();
    } catch (error: any) {
      return res.status(401).json(error);
    }
  };

  export const decodeJWT =  (token: string) => {
    try {
        const authKey = process.env.SECRET || 'aarriola';
      const decoded: any = jwt.verify(token, authKey);
      return decoded;
    } catch (err: any) {
      const { message: msg } = err;
      const error = { code: 'TKN', msg, class: 'invalid token' };
      throw error;
    }
  };