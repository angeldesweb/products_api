/**
 * Formato en el cual recibiremos el producto.
 */
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

/**
 * Formato de respuesta sin paginar
 */
export interface ProductsData {
	products: Product[];
	status: number;
	total: number;
	skip: number;
	limit: number;
}

/**
 * Formato de repuesta paginada
 */
export interface ProductsPaginatedData {
	docs: Product[];
	currentPage: number;
	totalPages: number;
	prev: string | null;
	next: string | null;
}

/**
 * Repuesta final enviada
 */
export interface ProductsResponse {
	docs: ProductsData | ProductsPaginatedData;
	status: number;
}

/**
 * Respuesta de producto
 */
export interface ProductResponse {
	doc: Product;
	status: number;
}

export interface ProductsParams {
	/**
	 * Cantidad de elementos a mostrar, no funciona si rows está activo
	 * @isInt
	 */
	limit?: number;
	/**
	 * Cantidad de elementos a saltar, no funciona si rows está activo
	 * @isInt
	 */
	skip?: number;
	/**
	 * Campos del elemento que queremos recibir en la respuesta
	 * @isString
	 */
	select?: string;
	/**
	 * Número de página a consultar, solo funciona al activar rows
	 * @isInt
	 */
	page?: number;
	/**
	 * Buscar por atributo, al activar se elimina la paginación
	 * @isString
	 */
	search?: string;
	/**
	 * Número de elementos, al activar se obtendrá respuesta paginada
	 * @isInt
	 */
	rows?: number;
}

export interface ProductParams {
	/**
	 * Campos que queremos recibir en la respuesta.
	 * @isString
	 */
	select?: string;
}
