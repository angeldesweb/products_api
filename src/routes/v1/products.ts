import { Router } from 'express';
import {
	getProducts,
	getProduct,
	getCategories,
} from '../../controllers/products';

export const products = Router();

products.get('/', getProducts);
products.get('/:id', getProduct);
products.get('/categories', getCategories);
