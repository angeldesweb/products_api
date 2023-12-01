import { Router } from 'express';
import { products } from './products';

export const api = Router();

api.use('/products', products);
