import type { Request, Response, NextFunction } from 'express';
import { paginatedResponse } from '../service/formatter';
import { requestHandler } from '../service/http';
import { PathBuilder } from '../service/query';
import 'dotenv/config';
import { ProductsResponse, RouteParams } from '../types/api';
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
		const id = req.params.id;
		const response = id
			? await handler.getProduct(id, req.query)
			: await handler.getProducts(req.query);

		return res.status(response.status).json(response);
	} catch (error) {
		next(error);
	}
};

@Route('api/products')
export class ProductsHandler {
	/**
	 * # Recupera una lista de productos
	 *
	 * @param query
	 * @returns
	 */
	@Get('')
	async getProducts(@Queries() query?: RouteParams): Promise<ProductsResponse> {
		const path = query ? PathBuilder(query) : '';
		const { data, status } = await requestHandler(path);
		const docs = paginatedResponse(
			data,
			Number(query?.page) || undefined,
			Number(query?.rows) || undefined
		);
		return { docs, status };
	}

	@Get('{id}')
	async getProduct(@Path('id') id: string, @Queries() query?: RouteParams) {
		let path = `/${id}`;
		if (query?.select) path = `${path}?select=${query.select}`;
		const { data, status } = await requestHandler(path);

		return { doc: data, status };
	}
}

export const getCategories = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { data, status } = await requestHandler('/categories');
		return res.status(status).json({ tags: data });
	} catch (error) {
		next(error);
	}
};
