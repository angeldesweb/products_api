export interface Product {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: string[];
}

export interface ProductsData {
	products: Product[];
	status: number;
	total: number;
	skip: number;
	limit: number;
}

export interface ProductsPaginatedData {
	docs: Product[];
	currentPage: number;
	totalPages: number;
	prev: string | null;
	next: string | null;
}

export interface ProductsResponse {
	docs: ProductsData | ProductsPaginatedData;
	status: number;
}

export interface ProductResponse {
	data: Product;
	status: number;
}

export interface RouteParams {
	limit?: number;
	skip?: number;
	select?: string;
	page?: number;
	search?: string;
	rows?: number;
}
