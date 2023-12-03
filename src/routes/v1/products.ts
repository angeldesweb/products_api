import { Router } from 'express';
import { productsController } from '../../controllers/products';

export const products = Router();

products.get('/', productsController);
products.get('/:id', productsController);
products.get('/categories', productsController);
