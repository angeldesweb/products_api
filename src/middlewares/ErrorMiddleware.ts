import axios, { AxiosError } from 'axios';
import { NextFunction, Request, Response } from 'express';

export const ErrorMiddleware = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (!err) next(err);
	const errors = err as Error | AxiosError;
	if (!axios.isAxiosError(errors)) {
		return next(err);
	}

	return res
		.status(errors.response?.status || 500)
		.json({ error: errors.response?.data.message });
};
