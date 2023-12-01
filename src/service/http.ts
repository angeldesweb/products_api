import type { ProductsResponse } from '../types/api';
import axios from 'axios';
import 'dotenv/config';

const serviceURL = process.env.SERVICE_URL || 'https://dummyjson.com/products';

export const requestHandler = async (path: string) =>
	await axios.get<ProductsResponse>(`${serviceURL}${path}`);
