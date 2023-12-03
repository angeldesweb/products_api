import type { ProductsParams } from '../types/api';

const withSearch = (params: ProductsParams) => {
	const paths = Object.entries(params)
		.filter(([key]) => key !== 'page')
		.map(([key, value]) =>
			key === 'search' ? `q=${value}` : `${key}=${value}`
		);
	return `/search?${paths.join('&')}`;
};

const withPagination = (params: ProductsParams) => {
	const page = params?.page ? params.page - 1 : 0;
	const rows = params?.rows || 0;
	const skip = page * rows;
	const limit = params.rows || 0;
	return `?limit=${limit}${skip ? `&skip=${skip}` : ''}`;
};

const defaultQuery = (params: ProductsParams) => {
	const paths = Object.entries(params)
		.filter(([key]) => key !== 'page')
		.map(([key, value]) => `${key}=${value}`);
	return `?${paths.join('&')}`;
};

export const PathBuilder = (params: ProductsParams) => {
	if (params.search) return withSearch(params);
	if (params.rows) return withPagination(params);
	return defaultQuery(params);
};
