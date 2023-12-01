import type { RouteParams } from '../types/api';

const withPagination = (params: RouteParams) => {
	const page = params?.page ? params.page - 1 : 0;
	const rows = params?.rows || 0;
	const skip = page * rows;
	const limit = params.rows || 0;
	return `?limit=${limit}${skip ? `&skip=${skip}` : ''}`;
};

const withSearch = (params: RouteParams) => {
	const paths = Object.entries(params)
		.filter(([key]) => key !== 'page')
		.map(([key, value]) =>
			key === 'search' ? `q=${value}` : `${key}=${value}`
		);
	return `/search?${paths.join('&')}`;
};

const defaultQuery = (params: RouteParams) => {
	const paths = Object.entries(params)
		.filter(([key]) => key !== 'page')
		.map(([key, value]) => `${key}=${value}`);
	return `?${paths.join('&')}`;
};

export const PathBuilder = (params: RouteParams) => {
	if (params.rows) return withPagination(params);
	if (params.search) return withSearch(params);
	return defaultQuery(params);
};
