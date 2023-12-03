import type { Request, Response, NextFunction } from 'express';
import { paginatedResponse } from '../service/formatter';
import { requestHandler } from '../service/http';
import { PathBuilder } from '../service/query';
import 'dotenv/config';
import {
	ProductResponse,
	ProductsResponse,
	ProductsParams,
	ProductParams,
} from '../types/api';
import {
	//Body,
	//Controller,
	Get,
	Path,
	Queries,
	Route,
	//SuccessResponse,
} from 'tsoa';

export const productsController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const handler = new ProductsHandler();
		if (req.path === '/categories') {
			const { tags, status } = await handler.getCategories();
			return res.status(status).json({ tags });
		}
		const id = req.params.id;
		const response = id
			? await handler.getProduct(id, req.query)
			: await handler.getProducts(req.query);

		return res.status(response.status).json(response);
	} catch (error) {
		return next(error);
	}
};

@Route('api/products')
export class ProductsHandler {
	/**
	 * # Recupera una lista de productos
	 */
	@Get('')
	async getProducts(
		@Queries() query?: ProductsParams
	): Promise<ProductsResponse> {
		const path = query ? PathBuilder(query) : '';
		const { data, status } = await requestHandler(path);
		const docs = paginatedResponse(
			data,
			Number(query?.page) || undefined,
			Number(query?.rows) || undefined
		);
		return { docs, status };
	}
	/**
	 * # Recupera un producto a través de su id
	 *
	 * @param id Al enviar este parámetro de devuelve el producto en el id solicitado.
	 */
	@Get('{id}')
	async getProduct(
		@Path('id') id: string,
		@Queries() query?: ProductParams
	): Promise<ProductResponse> {
		let path = `/${id}`;
		if (query?.select) path = `${path}?select=${query.select}`;
		const { data, status } = await requestHandler(path);

		return { doc: data, status };
	}
	/**
	 * # Lista de categorías
	 */
	@Get('categories')
	async getCategories() {
		const { data, status } = await requestHandler('/categories');
		return { tags: data, status };
	}
}
