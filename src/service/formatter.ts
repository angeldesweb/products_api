import { ProductsResponse } from '../types/api';
import 'dotenv/config';

const apiURL = process.env.API_URL || 'http://localhost:3000/api/products';

export const paginatedResponse = (
	docs: ProductsResponse,
	page: number | undefined,
	rows: number | undefined
) => {
	if (!rows) return docs;

	const { total, limit, skip } = docs;
	if (!page) page = 1;
	const pages = Math.ceil(total / rows);
	const isFirst = page === 1;
	const isLast = skip + limit >= total;
	const prev = isFirst ? null : `${apiURL}?page=${page - 1}&rows=${rows}`;
	const next = isLast ? null : `${apiURL}?page=${page + 1}&rows=${rows}`;

	return {
		docs: docs.products,
		currentPage: page,
		totalPages: pages,
		prev,
		next,
	};
};
