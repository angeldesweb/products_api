import type { Request, Response, NextFunction } from 'express';
import { paginatedResponse } from '../service/formatter';
import { requestHandler } from '../service/http';
import { PathBuilder } from '../service/query';
import 'dotenv/config';

export const getProducts = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const query = req.query;
		let path = '';
		if (query) path = PathBuilder(query);
		const { data, status } = await requestHandler(path);
		const docs = paginatedResponse(
			data,
			Number(query?.page) || undefined,
			Number(query?.rows) || undefined
		);
		return res.status(status).json(docs);
	} catch (error) {
		next(error);
	}
};

export const getProduct = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const id = req.params.id;
		const query = req.query;
		let path = `/${id}`;
		if (query.select) path = `${path}?select=${query.select}`;
		const { data, status } = await requestHandler(path);
		return res.status(status).json({ doc: data });
	} catch (error) {
		next(error);
	}
};

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
